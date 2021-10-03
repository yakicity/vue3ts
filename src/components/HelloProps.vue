<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Hello",
  props: {
    msg: {
      type: String as PropType<string>,
    },
  },
});
</script>
