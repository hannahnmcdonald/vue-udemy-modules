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
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

// Create new Vue Component
// Always create identifier which contain a dash- avoids clashing with official html elements
// ToggleDetails- component specific data and component specific method will help as we 
// try to fix the issue of 'show details' showing the details of all the contacts, and 
// not just the specific one that was invoked.
app.component('friend-contact', {
    data() {
        return {
            detailsAreVisible: false
        };
    }, methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');