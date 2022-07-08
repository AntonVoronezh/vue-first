<template>
  <div class="wrapper">
    <TheHeader />
    <div class="wrapper-content">
      <div class="container">gggggggggggg</div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  components: { TheHeader, TheFooter },
  data() {
    return {
      links: [
        {
          title: "Home",
          alias: "home",
          url: "/",
        },
        {
          title: "About",
          alias: "about",
          url: "/about",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
