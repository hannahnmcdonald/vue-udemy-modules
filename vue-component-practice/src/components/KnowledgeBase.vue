<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid @select-topic="$emit('select-topic', $event)"></knowledge-grid>
  </section>
</template>

<script>
// We will pass topics to knowlegeGrid in a different way
export default {
  // props: ['topics'],
  // emits: ['select-topic'],
};
</script>