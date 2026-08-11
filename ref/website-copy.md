# Zevian website copy — two channels

Two landing variants, one per outbound angle. Section headings map to the real
components in `src/components/landing/`.

- **Channel A — Timing gap.** Track 1: SDR managers, 15–100 reps, actively hiring.
  Lands traffic from the "Timing gap" D1 / "Detection lag" D4 emails.
- **Channel B — Reporting gap.** Mid-to-large orgs, 100+ employees, BDM and
  team-manager roles (not HR). Lands traffic from the "Reporting gap" D1 /
  "Coaching evidence" D4 emails.

Track 1 is the priority track, so Channel A is the default homepage. Channel B
lives on its own route so the reporting-gap emails land on matching copy.

---

# Channel A — Timing gap

Route: `/` (default)
Title tag: `Zevian — see the work behind your numbers`
Meta description: `Weekly AI-scored performance tracking for SDR managers. Zevian scores the work behind your activity numbers every week.`

**Angle:** managers already track the numbers. Whether the work behind those
numbers is improving takes 60 to 90 days to show, by which point the salary is
spent. Zevian scores that work weekly, so the problem appears before it reaches
the numbers. Lead with the timing gap. Lead with a specific outcome number
nowhere.

## HeroSection

**H1:**
Your numbers look fine for 90 days.

**Subhead:**
Zevian scores the work behind them every week.

> The hook sets up the timing gap; the ProblemSection explains it. Keep the
> dials/meetings setup and the 60-to-90-day mechanics out of the hero — they
> live in ProblemSection and reading them twice weakens both.

**Button microcopy:** 30 days free · Cancel anytime

## ProblemSection

1. Activity numbers reach your dashboard the same week. The quality of the work
   behind them takes 60 to 90 days to show.
2. By then a deal has usually died for a reason you could have seen in week two,
   and the salary is spent.
3. An average new rep reaches full productivity at 5.3 months. A departure around
   six takes the whole investment with it.

## PivotLine

Your dialer tracks activity. Zevian tracks improvement.

## SolutionSection

**Step 01 — Set your KPIs and standards.**
Set the standards your team is measured against: discovery quality, objection
handling, follow-up discipline, call prep. Zevian scores every report against
them.

**Step 02 — Your team submits a weekly report.**
What they worked, what stalled, where they got stuck. Each report takes five
minutes. Zevian tracks the work and the numbers behind it.

**Step 03 — See who's improving and who's stalling.**
Zevian scores every report and tracks the change week to week, while coaching
still changes the outcome.

## ROIStrip

| Value | Label |
|---|---|
| **$15–20K** | spent before a bad hire is obvious |
| **60–90 days** | before work quality shows up in the numbers |

**Footnote:** Illustrative estimate based on a $70K average rep salary.

> Alternate metric if you'd rather lead with ramp: **5.3 months** / "average time
> for a new rep to reach full productivity" (ForEntrepreneurs SaaS benchmarks).

## BenefitLines

- Know who to coach before the conversation becomes a warning.
- Every score is written down, every week. You have proof when you need it.
- Reps see the same scores you do. They know where the bar sits.

## TestimonialSection

Feature **AK** (currently third and highlighted — keep it highlighted here, the
quote is the ramp-cost argument in the prospect's own words):

> "You only understand whether someone is improving after six months. By then
> you've already lost money."
> — Founder & B2B Sales Coach, B2B Outreach Agency

Order: KS, UK, **AK (featured)**.

## CTASection

**H2:** You need to know who's getting better.

**Sub:** Zevian scores your team's work every week, so you see improvement while
coaching still changes it.

**Button microcopy:** 30 days free · Cancel anytime

---

# Channel B — Reporting gap

Route: `/reviews`
Title tag: `Zevian — a record of your team's work, not just your memory`
Meta description: `Weekly AI-scored work records for managers. Go into review season with 20 weeks of evidence instead of an impression.`

## HeroSection

**H1 (line 1, bold):**
The loudest person in Slack gets promoted.

**H1 (line 2, muted):**
The quiet one doing better work doesn't.

**Subhead:**
Not because you're unfair — because there's no record. Zevian scores your team's
actual work every week, so review decisions rest on something written down
instead of on what you happen to remember.

**Button microcopy:** 30 days free · Cancel anytime

## ProblemSection

1. You don't see what your team is actually doing day to day. Nothing gets
   written down, so there's nothing to check later.
2. Then review season arrives. No record to point to, no clear reason to justify
   a promotion and no defensible one for a demotion. Visibility beats output, and
   the person who spoke up most gets picked.
3. Nearly 40% of annual appraisals are distorted by recency bias or memory
   lapses. The work happened. The record of it didn't.

## PivotLine

Your team's work is real. The record of it isn't.

## SolutionSection

**Step 01 — Define what good looks like.**
Set the criteria that matter on your team: quality, consistency, ownership,
communication. Weight what counts most. You decide the standard. Zevian measures
against it.

**Step 02 — Your team submits a weekly report.**
What they worked on, what they struggled with, where they need help. Takes five
minutes. Fits into how they already work.

**Step 03 — AI scores the work and builds the record.**
Every report is scored against your criteria and kept. By review season you're
reading 20 weeks of evidence instead of recalling an impression.

## ROIStrip

| Value | Label |
|---|---|
| **40%** | of annual appraisals distorted by recency bias or memory lapses |
| **52 weeks** | of documented work, instead of one conversation |

**Footnote:** Appraisal-distortion figure from SHRM.

## BenefitLines

- Promotions you can explain, with the weeks to back them up.
- The quiet high performer stops being invisible.
- When you do have to let someone go, the documentation already exists.

## TestimonialSection

Feature **UK** here — the fairness framing is the reporting-gap argument:

> "It would save a lot of time. Reps would like it too because they're being
> judged on their own work, not someone's impression of them."
> — Product Manager, 200+ Person Outbound Team

Order: KS, AK, **UK (featured)**.

## CTASection

**H2:** Stop running reviews on memory.

**Sub:** I'm onboarding teams myself right now, a couple at a time.

**Button microcopy:** 30 days free · Cancel anytime

---

# Notes

**Outcome claims are off the page.** "Ramp cost reduced to 3 weeks" and
"underperformer detection 4x faster" are a single pilot team's report, unvalidated
by a customer. They stay out of website copy and email copy entirely. If that
team will attach their name to it, it runs as a quoted testimonial from them and
nowhere else.

**Claims to keep attributed.** Numbers that appear on-page describe the problem,
never the result: 60-to-90-day quality lag, $15–20K bad-hire cost (own estimate),
5.3-month ramp (ForEntrepreneurs), 40% appraisal distortion (SHRM). Each stays in
a footnote under the metric it supports.

**Shared across both variants, unchanged:** Navbar, WaitlistButton, the three
animations, footer, `/privacy`, `/terms`.

**Track 2 (SDR outsourcing / sales augmentation firms) has no page yet.** The
angle is client accountability — showing a client what their reps did week to
week and proving improvement over time. That's a different promise from either
variant here (the buyer's buyer is the audience), so it needs its own D1 email
and its own copy rather than a tweak to Channel A.
