// import from Vue package
import { createApp } from 'vue';
// import from custom file w/path
// import default export- name flexible
import App from './App.vue';
// Import friend-contact component from components folder
import FriendContact from './components/FriendContact.vue';

// Store create app in a constant
const app = createApp(App).mount('#app');

// Pass FriendContact as a second argument to the component method
// Custom HTML unlocked and can be added as html element in template for App.vue
app.component('friend-contact', FriendContact )
