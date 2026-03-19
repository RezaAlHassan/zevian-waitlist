import React from 'react';

const UserNotRegisteredError = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-center max-w-md">
                You are not registered for this application. Please contact your administrator if you believe this is an error.
            </p>
        </div>
    );
};

export default UserNotRegisteredError;
