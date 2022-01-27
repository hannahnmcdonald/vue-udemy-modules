<template>
    <li>
    <!-- Props added between curly brackets -->
        <h2>{{ name }}</h2>
        <!-- On click, fire toggleDetails fx -->
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
    props: [
        'name',
        'phoneNumber',
        'emailAddress'
    ],
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '111111111',
                email: 'manuel@localhost.com',
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
}
</script>
