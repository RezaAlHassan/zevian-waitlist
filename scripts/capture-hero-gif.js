// Captures the hero animation as a looping GIF (1200x627, ~8fps)
import puppeteer from 'puppeteer';
import { PNG } from 'pngjs';
import GIFEncoder from 'gif-encoder-2';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const WIDTH = 1200;
const HEIGHT = 627;
const FPS = 8;
const DURATION_SEC = 13; // covers ~1 full loop of both animations
const FRAME_COUNT = FPS * DURATION_SEC;
const FRAME_INTERVAL_MS = Math.round(1000 / FPS);
const SCROLL_Y = 270; // scroll past title to show button + both animation cards

function waitForServer(url, maxAttempts = 40) {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        const check = () => {
            http.get(url, () => resolve()).on('error', () => {
                if (++attempts >= maxAttempts) return reject(new Error('Dev server timed out'));
                setTimeout(check, 1000);
            });
        };
        check();
    });
}

async function captureHeroGif() {
    let devServer;

    // Check if dev server is already running
    try {
        await waitForServer('http://localhost:5173', 1);
        console.log('Using existing dev server at localhost:5173');
    } catch {
        console.log('Starting dev server...');
        devServer = spawn('npm', ['run', 'dev'], {
            cwd: path.join(__dirname, '..'),
            stdio: 'pipe',
        });
        await waitForServer('http://localhost:5173');
        console.log('Dev server ready.');
    }

    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        args: [
            `--window-size=${WIDTH},${HEIGHT}`,
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--force-device-scale-factor=1',
        ],
    });

    try {
        const page = await browser.newPage();
        await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });

        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

        // Scroll so button + both animation cards are visible in the 627px viewport
        await page.evaluate((y) => window.scrollTo(0, y), SCROLL_Y);

        // Let animations initialize before capturing
        await new Promise((r) => setTimeout(r, 1200));

        // Capture frames
        console.log(`\nCapturing ${FRAME_COUNT} frames at ${FPS}fps (${DURATION_SEC}s)...`);
        const frames = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const buf = await page.screenshot({ type: 'png' });
            frames.push(buf);
            process.stdout.write(`\r  Frame ${i + 1}/${FRAME_COUNT}`);
            await new Promise((r) => setTimeout(r, FRAME_INTERVAL_MS));
        }

        console.log('\n\nEncoding GIF...');

        const encoder = new GIFEncoder(WIDTH, HEIGHT, 'neuquant', true);
        encoder.setDelay(FRAME_INTERVAL_MS);
        encoder.setRepeat(0); // loop forever
        encoder.setQuality(20); // 1=best quality (largest), 30=lowest quality (smallest)

        const outputPath = path.join(__dirname, '..', 'public', 'hero-animation.gif');
        const writeStream = fs.createWriteStream(outputPath);
        encoder.createReadStream().pipe(writeStream);

        encoder.start();

        for (let i = 0; i < frames.length; i++) {
            const png = PNG.sync.read(frames[i]);
            encoder.addFrame(png.data);
            process.stdout.write(`\r  Encoding frame ${i + 1}/${frames.length}`);
        }

        encoder.finish();

        await new Promise((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });

        const stat = fs.statSync(outputPath);
        const sizeMB = stat.size / 1024 / 1024;
        console.log(`\n\nDone! → public/hero-animation.gif`);
        console.log(`Size: ${sizeMB.toFixed(2)}MB`);

        if (sizeMB > 5) {
            console.warn(`\nWarning: ${sizeMB.toFixed(2)}MB exceeds 5MB target.`);
            console.warn('Increase QUALITY number or reduce DURATION_SEC in the script to shrink it.');
        }
    } finally {
        await browser.close();
        if (devServer) devServer.kill();
    }
}

captureHeroGif().catch((err) => {
    console.error('\nError:', err.message);
    process.exit(1);
});
