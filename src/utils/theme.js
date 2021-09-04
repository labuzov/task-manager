const getCurrentTheme = () => {
    return document.body.dataset.theme;
}

export const setSelectedTheme = (theme) => {
    document.body.dataset.theme = theme;
}

export const getNewTheme = () => {
    const currentTheme = getCurrentTheme();

    if (currentTheme !== 'dark') {
        return 'dark';
    } else {
        return 'default';
    }
}

