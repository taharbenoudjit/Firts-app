<template>


 
    <v-img  
      src='@/pic/frontBack.jpeg' >
  
  
    
      
        <v-container >
        <v-card  class="transparent mt-12 pa-12 "
          height='400px'
        >
          <v-card-text class='text-center 
          display-3 
          font-italic 
          font-weight-bold 
          green--text'>Welcome !</v-card-text>
          <v-card-text class="ma-6 
            display-1 
            dont-italic
            font-weight-bold
            text-center
            black--text" >feeling hungry?!</v-card-text>
          <v-btn class='mb-4 red darken-1' block replace :to="{name: 'menuBack'}">Let's order</v-btn>

        </v-card>
      </v-container>
     
    
  

    </v-img>
    
  </template>


