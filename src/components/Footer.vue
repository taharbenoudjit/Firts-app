<template>
  
    <v-footer
      
      class="grey darken-3"
    >
      <v-card
        flat
        tile
        width="100%"
        class="grey darken-3 text-center"
      >
        <v-card-text >
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
            >
              <v-icon color='red darken-1' size="24px">{{ icon }}</v-icon>
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
    