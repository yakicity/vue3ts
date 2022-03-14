<template>
  <div class="sysadtest">
    <h1>This is an sysadtest page</h1>
    {{ mark }}
  </div>
</template>

<script lang="ts">
//配列をくっつけたいうまく
import { defineComponent } from "vue";

type Row = {
  body: string;
  count: string;
  percentage: string;
  respondent: string;
};

const getnerateMarkdownTable = <Key extends string>(
  header: ReadonlyArray<[Key, string]>,
  //rows: ReadonlyArray<Record<Key, string>>
  rows: Row
) => {
  let d = "| ";
  let e = "| ";
  for (let i = 0; i < header.length; i++) {
    d = d.concat(header[i][1], " | ");
    e = e.concat(" - | ");
  }
  let res = [
    d,
    e,
    `| ${rows.body} | ${rows.count} | ${rows.percentage} | ${rows.respondent} |`,
  ];
  return res.join("\n");
};
export default defineComponent({
  name: "Sysadtest",
  components: {},
  setup() {
    const mark = getnerateMarkdownTable(
      [
        ["body", "回答"],
        ["count", "回答数"],
        ["percentage", "選択率"],
        ["respondent", "その回答をした人"],
      ],
      {
        body: "参加する(チームは班が組む)",
        count: "7",
        percentage: "77.8%",
        respondent: "0214sh7, ryoha, ryoha, ryoha, ryoha, ryoha, ryoha",
      }
    );
    return { mark };
  },
});
</script>
