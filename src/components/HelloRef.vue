<template>
  <div class="app">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const msg = ref("Hello TypeScript");
    msg.value = "Hello Vue 3";
    const changeMsg = () => {
      msg.value = "Hello Vue";
    };
    return {
      msg,
      changeMsg,
    };
  },
});
</script>
