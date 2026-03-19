import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

export const base44 = appParams.appId ? createClient({
    appId: appParams.appId,
    token: appParams.token,
}) : {
    auth: {
        me: () => Promise.resolve(null),
        logout: () => {},
        redirectToLogin: () => {},
        isAuthenticated: () => Promise.resolve(false),
    },
    analytics: {
        track: () => {},
    }
};
