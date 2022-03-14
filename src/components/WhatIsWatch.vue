<template>
  <div>
    <div>{{ val1 }}</div>
    <div>{{ val2.p1 }}</div>
    <div>{{ val3 }}</div>
    <div>{{ val4.p1 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from "vue";

export default defineComponent({
  setup: () => {
    // ref で作ったオブジェクトで watchEffect
    const val1 = ref(0);
    watchEffect(() => console.log(`val1:${val1.value}`));

    // reactive で作ったオブジェクトで watchEffect
    const val2 = reactive({ p1: 0 });
    watchEffect(() => console.log(`val2.p1:${val2.p1}`));

    // ref で作ったオブジェクトで watch
    const val3 = ref(0);
    watch(val3, () => console.log(`val3:${val3.value}`));

    // reactive で作ったオブジェクトで watch
    const val4 = reactive({ p1: 0 });
    watch(val4, () => console.log(`val4.p1:${val4.p1}`));
    // もしくは
    // 特定のプロパティだけ監視
    //   watch(() => val4.p1, ()=> console.log(`val4.p1:${val4.p1}`))
    //
    // 特定のプロパティを別のオブジェクトで取り扱う
    //   watch(() => val4.p1, (p = val4.p1)=> console.log(`val4.p1:${p}`))

    setInterval(() => {
      val1.value++;
      val2.p1++;
      val3.value++;
      val4.p1++;
    }, 1000);

    return { val1, val2, val3, val4 };
  },
});
</script>
