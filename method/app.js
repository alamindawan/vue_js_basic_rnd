let app = Vue.createApp({
    data() {
        return {}
    },
    methods: {
        getCurrentTime() {
            return new Date();
        },
        sumOfNumebr() {
            let firstNumber = 10;
            let secondNumber = 30;
            return firstNumber + secondNumber;
        }
    }
});

app.mount("#app")