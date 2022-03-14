<template>
  <div>
    <h1>{{ state.message }}</h1>
    <ChildComponent />
    <!-- 上はpropsに渡してないからボタンがあるだけ -->
    <ChildComponent
      :message="state.message"
      @change-message="changeMessage"
    ></ChildComponent>
  </div>
</template>

<script lang="ts">
import ChildComponent from "@/components/ChildComponent.vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  components: {
    ChildComponent,
  },
  setup() {
    const state = reactive<{ message: string }>({
      message: "Hello",
    });

    const changeMessage = (message: string) => {
      state.message = message;
    };

    return {
      state,
      changeMessage,
    };
  },
});
</script>
