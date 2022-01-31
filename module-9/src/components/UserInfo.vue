<template>
  <section>
  <!-- Wrap content w/base card using Slots-->
  <base-card>
  <!-- V slot tells vue where to place the content. V-slot needs an argument (name of slot) -->
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <!-- leftover content goes to default slot OR you can specify-->
      <!-- v-slot default -->
  <template v-slot:default>
    <p>{{ infoText }}</p>
    <!-- v-slot default -->
  </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>


<style scoped>
/*Scoped makes the styles in this component only effect this component */
section header {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>