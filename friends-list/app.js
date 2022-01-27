const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            // Friends Array full of friends objects
            // TO be rendered within the html via v-for loop
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '111111111',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '111111111',
                    email: 'julie@localhost.com',
                }
            ]
        }
    }
});

app.mount('#app');