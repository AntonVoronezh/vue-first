<template>
  <div class="card">
    <div v-if="img" class="card-img__wrapper">
      <img :src="img" >
    </div>
    <slot name="header"></slot>
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
 <div class="card-body">
<slot name="body"></slot>
    <slot></slot>
   
   <router-link v-if="link" :to="link" class="link" style="display: block">See more</router-link>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img : {
      type: String
    },
    link: {
      type: String
    }

  }
}
</script>
