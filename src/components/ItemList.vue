<template>
  <div v-for="item in items" :key="item.id">
    <div class="item" :class="{ important: item.rank <= 1 }">
      <div class="name">名前: {{ item.name }}{{ item.id }}</div>
      <div class="rank">重要度： {{ item.rank }}</div>
      <div class="isFinished">完了したか： {{ item.isFinished }}</div>
      <!-- <button @click="checked(item)">完了</button> -->
      <input type="checkbox" id="checked" v-model="item.isFinished" />
      <div v-if="item.rank == 0">最重要</div>
      <button @click="deleteItem(item)">消去</button>
    </div>
  </div>
  <div>
    <label v-for="label in options" id="label.rank" :key="label">
      <input type="radio" v-model="checkedOptions" v-bind:rank="label.rank" />{{
        label.label
      }}
    </label>
    <p>{{ checkedOptions }}</p>
    <h2>↓checkedItems↓</h2>
    <p>{{ checkedItems }}</p>
  </div>
  <div>
    <label>
      名前
      <textarea v-model="newItemName" type="text" placeholder="ztmy" />
    </label>
    <label>
      重要さ
      <input v-model="newItemRank" type="number" />
    </label>
    <button @click="addItem">add</button>
  </div>
</template>

<script lang="ts">
/**
 * 完了未完量がみんな同じになっちゃうし繁栄できない
 * 未完タスクと完了済みタスクのリストが表示する
 * タスクを完了させる
 * 選択するのができないな、v-model,v-bind,id,:keyとかなにかわからんな
 * …
 */
import {
  computed,
  defineComponent,
  reactive,
  readonly,
  ref,
  toRef,
  toRefs,
} from "vue";

export interface Item {
  id: number;
  name: string;
  rank: number;
  isFinished: boolean;
}
export interface Option {
  rank: number;
  label: string;
  items: Item[];
}

export default defineComponent({
  //name: "ItemList",
  setup: () => {
    const items = ref<Item[]>([
      //{ id: 0, name: "a", rank: 1, isFinished: false },
      //{ id: 1, name: "b", rank: 2, isFinished: false },
    ]);
    let options = ref<Option[]>([
      { rank: 0, label: "最重要", items: [] },
      { rank: 1, label: "重要", items: [] },
      { rank: 2, label: "普通", items: [] },
    ]);
    let idCount = 2;
    let newItemName = ref<string>("");
    let newItemRank = ref<number>(0);
    let newItemChecked = ref<boolean>(false);
    let current = ref<number>(0);
    let checkedItems = ref<number>(0);

    const addItem = () => {
      if (newItemName.value == "") {
        return; //入力が空なら追加しない
      }
      items.value.push({
        id: idCount,
        name: newItemName.value,
        rank: newItemRank.value,
        //isFinished: false,
        isFinished: newItemChecked.value,
      });
      options.value[newItemRank.value].items.push({
        id: idCount,
        name: newItemName.value,
        rank: newItemRank.value,
        //isFinished: false,
        isFinished: newItemChecked.value,
      });
      idCount++;
      newItemName.value = "";
      newItemRank.value = 0;
      newItemChecked.value = false;
    };
    const deleteItem = (item: Item) => {
      const index = items.value.indexOf(item);
      items.value.splice(index, 1);
    };
    const checkedOptions = computed(
      (current: number) => options.value[current]
    );

    return {
      items,
      newItemName,
      newItemRank,
      deleteItem,
      addItem,
      checkedOptions,
      options,
      current,
      checkedItems,
    };
  },
});
</script>
<style>
.important {
  color: red;
}
</style>
