<template>
  <p>home pahe</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <TheCard
      :title="`${item.title} lvl`"
      :name="`${item.lvl}`"
      :img="`${item.img}`"
      :link="`/${item.alias}`"
    >
      <template v-slot:header> {{ item.description }}</template>
      <template v-slot:body>
      <div ></div>
      </template>
    </TheCard>
  </div>
</template>

<script>
import TheCard from "@/components/UI/TheCard";
import items from "@/seeders/items.js";

export default {
  components: { TheCard },
  data() {
    return {
      items,
    };
  },
};
</script>
