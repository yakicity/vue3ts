<template>
  <div>{{ countMessage }}</div>
  <button @click="count++">クリック！</button>
  <button @click="count = 0">リセット！</button>
  <div>{{ msg }}</div>
  <input type="checkbox" v-model="checked" />
  <div>{{ checked }}</div>
  <item-list />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import ItemList from "./ItemList.vue";

export default defineComponent({
  components: { ItemList },
  props: {
    msg: {
      type: String,
      default: "default value",
    },
  },
  setup() {
    const count = ref<number>(0);
    //const val1 = ref<string>();
    const countMessage = computed(() => "回数: " + count.value);
    const checked = ref<boolean>(false);
    return { count, countMessage, checked };
  },
});
</script>

<style></style>
