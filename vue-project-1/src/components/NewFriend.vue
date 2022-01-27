<template>
<!-- Listen to submit event -->
<!-- prevent default modifier -->
<!-- Fires method called submitData() -->
    <form @submit.prevent="submitData">
        <div>
        <!-- v-model to bind the input to the variables below -->
            <label>Name</label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="enteredEmail"/>
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enteredPhone"/>
        </div>
        <div>
            <button> Add Contact </button>
        </div>
    </form>
</template>

<script>
export default {
    // We know for sure we will be emiting an event. Props are for
    // sending data INTO the component && events are for sending data OUT of the component
    // SOURCE: https://v3.vuejs.org/guide/migration/emits-option.html#emits-option
    emits: ['add-contact'],
    data() {
        return {
            // set variables to empty strings
            // BIND W/ V-MODEL (See above template)
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        };
    },
    methods: {
        submitData() {
            this.$emit('add-contact', 
                this.enteredName, 
                this.enteredPhone, 
                this.enteredEmail
            );
        }
    }
}
</script>

<style>

</style>