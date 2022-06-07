export const confirmDialog = (msg: string) => {
    if (window.confirm(msg)) {
        return Promise.resolve();
    }
    return Promise.reject();
};
