<template>
  
    
  <v-img src='@/pic/frontBack.jpeg' >
    <v-flex row class='justify-end'>
      
      <v-card  class="transparent mt-12 pa-12 " height='400px'>
        <v-card-text class='text-center ma-3 pa-4'> 
         <v-form v-model="valid" >
          <v-text-field v-model="name" label="Nom d'utilisateur" required></v-text-field>
         </v-form >
        </v-card-text>
        <v-card-text class=" pa-5 text-center " >
          <v-form v-model="valid">
        <v-text-field v-model="password" label="Mot de Passe" type='password' required></v-text-field>
      </v-form>
        </v-card-text>
        <v-btn class='mb-4 red darken-1' block dark @click="login">Conexion</v-btn>
      </v-card>
      
    </v-flex>
  </v-img>
</template>
   

<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    password: '',
   
    url: '' //'http://localhost:4000'
  }),
  methods: {
    async login () {
      
      var self = this
      axios.post('/api/login', {
         login: this.name,
        password: this.password
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
      const response = await axios.post(this.url + '/api/login', {
        login: this.name,
        password: this.password
      })
      console.log(response)
      console.log('response is:', response)
    },
    logout () {
    },
    
  }
}
</script>

<style>
  .v-label.theme--light{ color: white !important; }
  .model{color: white;}
</style>