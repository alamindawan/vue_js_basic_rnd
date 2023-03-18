let app = Vue.createApp({
    data() {
        return {
            targetData: {
                name: "oo og",
                fb: "https://web.facebook.com/?_rdc=1&_rdr",
                codeBinding: '<a href="https://github.com/alamindawan/">Github</a>'
            }
        }
    }
});

app.mount("#app")