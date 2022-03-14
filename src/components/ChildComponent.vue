<template>
  <div>
    <button @click="upperCaseMessage">To upper case</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "vue";

type Props = {
  message: string;
};

export default defineComponent({
  props: {
    message: {
      type: String,
      default: "default Value",
      //default: () => ({}),
    },
  },
  setup(props: Props, context: SetupContext) {
    const upperCaseMessage = () => {
      context.emit("change-message", props.message.toUpperCase());
    };

    return {
      upperCaseMessage,
    };
  },
});
</script>
