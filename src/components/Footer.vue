<template>
  
    <v-footer
      
      class="grey darken-3"
    >
      <v-card flat tile width="100%" class="grey darken-3 text-center">
      <v-card-title><h2 id='title'>ABOUT US</h2></v-card-title>
        <v-divider color='white'></v-divider>
        <v-card-text >
          <v-btn color='red darken-1'  icon  href="https://www.google.fr/maps/" target="_blank">
          <v-icon  >mdi-home</v-icon>
          </v-btn>
          <v-btn class="mx-4" color='red darken-1' icon  href="https://mail.google.com//" target="_blank">
            <v-icon >mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4" color='red darken-1' icon  >
            <v-icon >mdi-phone</v-icon>
          </v-btn>
        </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      
      
     
    }),
    
    
  }
</script>

<style>
  #title{
    font-size: 30px;
    font-weight: bold;
    color: red;
    text-transform: italic;
    font-family: Arial, Helvetica, sans-serif

  }
</style>