<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
	components: { FriendContact },
    data() {
        return {
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

    },
    computed: {

    }
}
</script>
