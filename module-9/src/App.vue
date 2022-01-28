<template>
  <div>
  <!-- Now we can list as self closing html el -->
    <TheHeader/>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
// Register this component locally instead of globally in main.js
import TheHeader from './components/TheHeader.vue';
export default {
  // List the component here and use a key or use the property name
  // Now we can list it as a self closing html element
  components: {
    TheHeader: TheHeader
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>