// import from Vue package
import { createApp } from 'vue';
// import from custom file w/path
// import default export- name flexible
import App from './App.vue';
// Import friend-contact component from components folder
import FriendContact from './components/FriendContact.vue';
// Import new-friend component from components folder
import NewFriend from './components/NewFriend.vue';

// Store create app in a constant
const app = createApp(App)

// Pass FriendContact & NewFriend as a second arguments to the component method
// Custom HTML unlocked and can be added as html element in template for App.vue
// Must be kebab case- First is the name of the html element, and second is the name of component
app.component('friend-contact', FriendContact )
app.component('new-friend', NewFriend);

// Mount App
app.mount('#app');
