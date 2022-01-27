<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul>
        <!-- NOTE- Don't put a space between words -->
        <!-- V-for loop over our friends array. -->
        <!-- V-for must have Key -->
        <!-- Now we have Dynamic Data w/v-bind (shorthand is just :)-->
        <!-- Now we can cut back on code because v-for will dynamically create each component -->
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name="friend.name"
                :phone-number="friend.phone"
                :email-address="friend.email"
                v-bind:is-favorite="friend.isFavorite"
                @toggle-favorite="toggleFavoriteStatus"
            ></friend-contact>
            <!-- ABOVE- set is-favorite to be dynamic value (friend.isFavorite) and dependent on friends array
            We want to make sure this isn't hard-coded so we know how to work with dynamic data. 
            This data could also be coming from a database or API fetch etc.  -->
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
                    isFavorite: true
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '111111111',
                    email: 'julie@localhost.com',
                    isFavorite: false
                }
            ]
        }
    },
    methods: {
        // @toggleFavorite within FriendContact.vue, $emit() adds @toggle-favorite 
        // to our friend-contact component which in turn fires the below fx 
        toggleFavoriteStatus(friendId) {
            // Alert works
            // alert('this works!');

            // Built in JS find method 
            // Below helps us find the friend whos id is equal the friend's Id that was toggled
            const identifiedFriend = this.friends.find(
                (friend) => friend.id === friendId
            );
            // Set identified friend equal to what it currently is not
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
        }
    },
    computed: {

    }
}
</script>

<style>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
