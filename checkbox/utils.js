// 全局 pageId（Bothub Fashion）
var pageId = 418140585694838;
// 全局 appId（uat app）
var appId = 611599205958417;

function createVueComponent(data) {
    return new Vue ({
        el: '#app',
        data: () => ({
            config: data,
        }),
        methods: {
            parseWidget() {
                const widget = window.BH.Widget;
                const data = this.config;

                widget.setConfig(data);
                widget.render(data.id);
            },
            toStringify() {
                return JSON.stringify(this.config, null, 2);
            },
            clearStorage() {
                window.localStorage.clear();
                this.parseWidget();
            },
        },
        mounted() {
            window.BH.init({
                debug: true,
                language: "en_US",
                renderImmediately: true,
                appId: appId,
                widgets: this.config,
            });
        },
    });
}