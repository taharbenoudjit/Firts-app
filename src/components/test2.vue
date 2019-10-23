<template>
<v-container class='ma-5' align:center
>
  <v-carousel height='100px' hide-delimiters >
    <v-carousel-item
      v-for="(image,i) in images"
      :key="i"
      :src="image.src"
    ></v-carousel-item>
  </v-carousel>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          {
            src: '@/pic/black.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>