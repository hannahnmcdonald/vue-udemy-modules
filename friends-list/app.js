const app = Vue.createApp({
    data() {
        return {
            // Added to friend-contact component:
            // detailsAreVisible: false,
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
    // Added to friend-contact component:
    // methods: {
    //     toggleDetails() {
    //         this.detailsAreVisible = !this.detailsAreVisible;
    //     }
    // }
});

// Create new Vue Component
// Always create identifier which contain a dash- avoids clashing with official html elements
// ToggleDetails- component specific data and component specific method will help as we 
// try to fix the issue of 'show details' showing the details of all the contacts, and 
// not just the specific one that was invoked.
app.component('friend-contact', {
    // This component must have its own template as well. USE BACKTICKS
    template: `
        <li v-for="friend in friends" :key="friend.id">
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Show Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong>{{ friend.phone }}</li>
                <li><strong>Email:</strong>{{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend:  {
                id: 'julie',
                name: 'Julie Jones',
                phone: '111111111',
                email: 'julie@localhost.com',
            }
        };
    }, methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}); 

// This component is encapsulated so it does not communicate with first Vue app component
// Therefore, method toggleDetails() and detailsAreVisible data can be deleted in 
// app component because they are not needed. (commented out)

app.mount('#app');