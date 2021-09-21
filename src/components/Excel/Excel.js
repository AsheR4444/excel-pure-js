export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = document.createElement('div');
        this.components.forEach((Component) => {
            const component = new Component();
        });

        return $root;
    }

    render() {
        // this.$el.insertAdjacentHTML('afterbegin', '<h1>Test</h1>');

        this.$el.append(this.getRoot());
    }
}
