<template>
  <div class="app">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const state = reactive({
      msg: "Hello TypeScript" as string,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
