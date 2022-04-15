export const addWindowScrollEvent = (callback) => {
    return window.addEventListener("scroll", callback);
}

export const removeWindowScrollEvent = (callback) => {
    return window.removeEventListener("scroll", callback);
}

export const addWindowResizeEvent = (callback) => {
    return window.addEventListener("resize", callback);
}

export const removeWindowResizeEvent = (callback) => {
    return window.removeEventListener("resize", callback);
}