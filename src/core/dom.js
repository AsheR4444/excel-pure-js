class Dom {
    constructor(selector) {
        this.$el =
            typeof selector === 'string'
                ? document.querySelector(selector)
                : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
        }

        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on() {}

    append(node) {
        if (node instanceof Dom) {
            // eslint-disable-next-line no-param-reassign
            node = node.$el
        }

        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }

        return this
    }
}

export const $ = (selector) => new Dom(selector)

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)

    if (classes) {
        el.classList.add(classes)
    }
    return el
}
