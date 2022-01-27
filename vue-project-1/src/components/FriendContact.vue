<template>
    <li>
    <!-- Props added between curly brackets -->
    <!-- Checks to see if friend is favorite -->
    <!-- IF true, (favorite) will be printed next to friend's name -->
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }} </h2>
        <!-- On click, fire toggleDetails fx -->
        <button @click="toggleFavorite"> Toggle Favorite </button>
        <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <!-- If detailsAreVisible is true, render below items -->
            <ul v-if="detailsAreVisible">
                <li>
                    <strong>Phone:</strong>
                    {{ phoneNumber }}
                </li>
                <li>
                    <strong>Email:</strong>
                    {{ emailAddress }}
                </li>
            </ul>
    </li>

</template>

<script>
export default {
    // Props are data properties that are also available in the template
    // MUST be camel case. Vue will automatically convert it to Kebab case
    // MUST be different from data or computed properties
    // Source :
    // https://v3.vuejs.org/guide/component-props.html
    // Below ARRAY is the bare minimum for props. 
    // You may want to share more information. See Props object with more data
    // props: [
    //     "name",
    //     "phoneNumber",
    //     "emailAddress",
    //     "isFavorite",
    // ],
    // Set required properties & property types
    // Set default for isFavorite
    // Provide Object as value 
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        emailAddress: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            // props don't have to be required
            required: false, 
            // should prop be missing, provide default value
            default: false,
        }
    },
    data() {
        return {
            detailsAreVisible: false,
            // Below not needed due to new v-for loop in FriendContact.vue 
            // friend: {
            //     id: 'manuel',
            //     name: 'Manuel Lorenz',
            //     phone: '111111111',
            //     email: 'manuel@localhost.com',
            // },

        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        // Vue uses uni-directional data flow. 
        // Data should only be changed in app.vue not friendContact.vue
        // Changes should not be made in this component- change in app.vue
        // Ways to fix this:
        // 1) Change w/parent
        // 2) Take recieved data as initial data. Change only in friendContact Component, but we are 
            // Aware of the fact that it cannot be changed in app
            // See above data property 'friendIsFavorite'
        toggleFavorite() {
            // 1)
            // No longer needed:
            // Now that isFavorite is a boolean, we can simply check it
            // if (this.friendIsFavorite === '1') {
            //     this.friendIsFavorite = '0';
            // } else {
            //     this.friendIsFavorite = '1';
            // }

            // 2)
            // this.friendIsFavorite = !this.friendIsFavorite
            // ABOVE changes the rendering of isFavorite, but does not change it
            // within the friends array. NEEDS to be changes at the source- w/2 way communication
            
            // 3)
            this.$emit('toggle-favorite', this.id)
            // $emit() is a built in method that can be called from inside a view component on the this keyword
            // With this, you can emit your own custom event to which you can listen
            // $emit() takes in one argument, which is the name of the custom event. USE KEBAB CASE
            // can be listed like onclick components
            // second argument can also be passed in (There is no limit)

            // Prop called id listed as second argument. Now when emited, will carry prop as extra data
            // this.id will carry over the toggleFavoriteStatus method on app.vue (called friendId)
            
        }
    }
}
</script>
