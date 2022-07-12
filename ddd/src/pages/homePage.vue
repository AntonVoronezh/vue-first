<template>
  <p>home pahe</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <TheCard :title="`${item.title} lvl`" :name="`${item.lvl}`" :img="`${item.img}`">
      <!--     <template v-slot:header>Head {{item.title}}</template>-->
      <!--     <template v-slot:body>BODY </template>-->
uydtyutf
    </TheCard>
  </div>
</template>

<script>
import TheCard from "@/components/UI/TheCard";

export default {
  components: { TheCard },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "aaaaaa",
          description: "vvvvv vvvvvvvv vvvvvvvvv",
          lvl: 4,
          img: "img/1.jpg",
        },
        {
          id: 2,
          title: "aaa222aaa",
          description: "2vvvvv 2vvvvvvvv 2vvvvvvvvv",
          lvl: 5,
          img: "img/3.jpg",
        },
      ],
    };
  },
};
</script>
