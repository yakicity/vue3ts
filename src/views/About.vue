<template>
  <div class="about">
    <h1>This is an about page</h1>
    <todo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todo from "@/components/Todo.vue";

export default defineComponent({
  name: "About",
  components: {
    Todo,
  },
});
</script>
