<template>
  
    <v-footer
      position: absolute
      class="green lighten-3"
    >
      <v-card
          flat
          width="100%"
          class="green lighten-3 text-center"
      >
          <v-card-text>
            Nous sommes une chaine de restuaration rapide ,nous somme dans le domaine depuis 1972 ,on sait que nous ne sommes pas les seuls dans le domaine main on essaye d'être les meilleures
          </v-card-text>   
      </v-card>     
      <v-divider></v-divider>
      <v-card
        flat
        tile
        width="100%"
        class="green lighten-3 text-center"
      >
        <v-card-text >
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
            >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
        </v-card-text>
        </v-card>
    </v-footer>

    
      
    
  
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      
     
    }),
    
    
  }
</script>
    