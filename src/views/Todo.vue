<template>
  <div class="todo">
    <h1>This is an todo page</h1>
    <form>
      <label>Todo</label>
      <input />
    </form>
    <todo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Practice from "@/components/Todo.vue";

export default defineComponent({
  name: "Todo",
});
</script>
