
// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) => new Promise((resolve) => setTimeout(() => resolve(1), time));
