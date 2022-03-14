<template>
  <div>
    <div>{{ val1 }}</div>
    <div>{{ val2 }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup: () => {
    // ref で作ったオブジェクトで computed
    const tmp1 = ref(0);
    const val1 = computed(() => tmp1.value * 10);

    // reactive で作ったオブジェクトで computed
    const tmp2 = reactive({ p1: 0 });
    const val2 = computed(() => tmp2.p1 * 100);

    setInterval(() => {
      tmp1.value++;
      tmp2.p1++;
    }, 1000);

    return { val1, val2 };
  },
});
</script>
