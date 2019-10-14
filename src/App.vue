<template>
  <v-app>
    

    <v-content>
      <navBar/>
      <Footer/>
      <back/>
    </v-content>
  </v-app>
</template>

<script>
import navBar from './components/navBar';
import Footer from './components/Footer';
import Back from './components/Back';




export default {
  name: 'App',
  components: {
    
    navBar,
    Footer,
    Back,
    
  },
  data: () => ({
    //
  }),
};
</script>
