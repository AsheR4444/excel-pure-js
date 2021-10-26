class Dom {}

export function $(tagName, classes = '') {
    return new Dom();
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName);

    if (classes) {
        el.classList.add(classes);
    }

    return el;
};
