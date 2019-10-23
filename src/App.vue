<template>
  <v-app>
    
    <v-content>
    <navBar></navBar>
        <router-view></router-view>
        
    <Footer></Footer>

    </v-content>
  </v-app>
</template>

<script>




import navBar from './components/navBar'
import Footer from './components/Footer'






export default {
  name: 'App',
  components: {
    navBar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
