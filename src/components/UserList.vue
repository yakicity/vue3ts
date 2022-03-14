<template>
  <div>
    <h1>This page is user list.</h1>
    <div>
      <!-- Buefy のテーブルを使って実現 -->
      <!-- https://buefy.org/documentation/table/ -->
      <b-table
        :data="properties.users"
        :columns="columns"
        :striped="true"
        :hoverable="true"
        v-model:selected="selected"
      />
    </div>
    <div>
      <b-button type="is-info" @click="showMoreInformation">
        Show more selected...
      </b-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

type Props = {
  properties: string;
};
//UserList.vue は親コンポーネントである Users.vue から受け取ったデータをテーブルで表示するコンポーネント
export default defineComponent({
  name: "UserList",
  props: {
    properties: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props: Props) {
    const showMoreInformation = () => {
      if (selected) {
        alert("No data selected...");
        return false;
      }
      const selected = props.selected;
      this.$router.push({
        name: "user-detail",
        params: { id: selected["id"] },
      });
    };

    return {
      // `selected`, `columns` は Buefy のテーブルを使用する際に必要なパラメータ
      // https://buefy.org/documentation/table/
      showMoreInformation,
      selected: null,
      columns: [
        {
          field: "id",
          label: "ID",
          width: "50",
          numeric: true,
        },
        {
          field: "name",
          label: "NAME",
          width: "400",
          centered: true,
        },
        {
          field: "mail",
          label: "MAIL",
          width: "400",
          centered: true,
        },
      ],
    };
  },
});
</script>
