<template>
  <v-img src='@/pic/frontBack.jpeg' >
    <v-flex row class='justify-end'>
      <v-card  class="transparent mt-12 pa-12 " height='400px'>
        <v-card-text class='text-center ma-6 pa-12'> 
          <h1 >Welcome !</h1>
        </v-card-text>
        <v-card-text class="ma-5 pa-5 text-center">
          <h3>feeling hungry?!</h3>
        </v-card-text>
        <v-btn class='mb-4 red darken-1' block replace :to="{name: 'menuBack'}">Let's order</v-btn>
      </v-card>
    </v-flex>
  </v-img>
</template>


<style>
  h1{
    font-size: 100px;
    font-style: oblique;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    text-shadow: 3px 2px gray;
  }

  h3{
    font-size: 40px;
    font-style: italic;
    color:#E0E0E0;
    font-family:Arial, Helvetica, sans-serif;
  }
</style>