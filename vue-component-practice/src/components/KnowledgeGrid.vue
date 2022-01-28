<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // Injected from what was provided in app.vue 
  // You can only inject what has been provided in a higher up level. App.vue is higher (or a parent component)
  // MUST have parent/child relationship
  inject: ['topics'],
  emits: ['select-topic']
};
</script>