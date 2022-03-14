<template>
  <div class="home">
    <HelloWorld msg="Vue3 + TypeScript + router + いつかvuex" />
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    <h2>ref,reactive</h2>
    <what-is-reactive />
    <h2>computed</h2>
    <what-is-computed />
    <h2>watch,watchefect</h2>
    <what-is-watch />
    <h2>prop,emit</h2>
    <parent-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ParentComponent from "@/components/ParentComponent.vue";
import WhatIsReactive from "@/components/WhatIsReactive.vue";
import WhatIsComputed from "@/components/WhatIsComputed.vue";
import WhatIsWatch from "@/components/WhatIsWatch.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    ParentComponent,
    WhatIsReactive,
    WhatIsComputed,
    WhatIsWatch,
  },
});
</script>
