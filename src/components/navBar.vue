<template>
  <div>
    <v-toolbar flat 
    color="grey darken-3"
    >
      <v-toolbar-title><v-btn text class="text-uppercase" rounded color='red darken-1' replace :to="{name: 'Back'}">
        <v-icon left>mdi-home</v-icon>
        Yum~Pizza</v-btn>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class='mx-2' text color='red red darken-1' rounded  replace :to="{name: 'menuBack'}">Menu</v-btn>
      <v-btn text rounded color='red darken-1' replace :to="{name: 'login'}">login</v-btn>
      <v-btn color='red darken-1'  icon>
          <v-icon dark >mdi-login-variant</v-icon>
        </v-btn>
      </v-toolbar>
  </div>
</template>