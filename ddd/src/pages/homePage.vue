<template>
  <p>home pahe</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <TheCard
      :title="`${item.title} lvl`"
      :name="`${item.lvl}`"
      :img="`${item.img}`"
    >
      <!--     <template v-slot:header>Head {{item.title}}</template>-->
      <!--     <template v-slot:body>BODY </template>-->
      uydtyutf
    </TheCard>
  </div>
</template>

<script>
import TheCard from "@/components/UI/TheCard";
import items from "../seeders/items.json";

export default {
  components: { TheCard },
  data() {
    return {
      items,
    };
  },
};
</script>
