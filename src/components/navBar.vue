<template>
  <div>
    <v-toolbar flat 
    color="green lighten-3"
    >
      <v-toolbar-title><v-btn text replace :to="{name: 'Back'}">Yum~Pizza</v-btn></v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text replace :to="{name: 'menuBack'}">Menu</v-btn>
        <v-btn text>Promos</v-btn>
        <v-btn text replace :to="{name: 'login'}">login</v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-login-variant</v-icon>
        </v-btn>
        
      </template>
    </v-toolbar>
  </div>
</template>