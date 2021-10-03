<template>
  <Hello />
  <hello-ref />
  <hello-reactive />
  <hello-rea-toref />
  <div class="app">
    <hello-props :msg="msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Hello from "./components/Hello.vue";
import HelloRef from "./components/HelloRef.vue";
import HelloReactive from "./components/HelloReactive.vue";
import HelloReaToref from "./components/HelloReaToref.vue";
import HelloProps from "./components/HelloProps.vue";

export default defineComponent({
  name: "App",
  components: {
    Hello,
    HelloRef,
    HelloReactive,
    HelloReaToref,
    HelloProps,
  },
  setup() {
    const msg = ref("Hello TypeScript");

    return {
      msg,
    };
  },
});
</script>
