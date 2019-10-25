<template>
    
    <v-card class='my-1' >
        
        <v-carousel height='200px' hide-delimiters >
    <v-carousel-item
      v-for="(image,i) in images"
      :key="i"
      :src="image.src"
    
    ></v-carousel-item>
      
  </v-carousel>
    <v-img class='mt-1' src="@/pic/menuBack.jpeg">
        <v-layout row wrap >
      <v-flex xs3 md6 lg9 class="pr-3">
         <v-list-item>
            <v-list-item-content>
                <v-list-item-title ><h id='list-titel' >Signature</h></v-list-item-title>
                    <v-divider  inset color='white'></v-divider>
                    <div class='signatures'>
                        <v-container class="mx-5" >
                            <v-layout row wrap>
                                <v-flex xs12 sm6 lg3 v-for="Signature in Signatures" :key='Signature.name'>
                                    <v-card  height='350px' dark class="text-xs-center ma-3 transparent">
                                        <v-card-title><h4 id='type-title'>{{ Signature.name}}</h4></v-card-title>
                                        <v-responsive >
                                           <v-img height='200px' :src='Signature.img'></v-img>
                                        </v-responsive>
                                        <v-card-text>
                                            <div class='subheading text-center'>{{ Signature.description}}</div>
                                            
                                        </v-card-text>
                                        <v-card-action>
                                            <v-btn  color='red darken-1' small block dark>
                                                <v-icon left>mdi-cart-plus</v-icon>
                                                Ajouter {{ Signature.price}}
                                            </v-btn>
                                        </v-card-action>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                     </div>
            </v-list-item-content>
        </v-list-item>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title ><h id='list-titel'>Vegetarian</h></v-list-item-title>
            <v-divider inset color='white'></v-divider>
        <div class='Vegetarian'>
        <v-container class="mx-5" >
            <v-layout row wrap>
                <v-flex xs12 sm6 lg3 v-for="Vegetarian in Vegetarians" :key='Vegetarian.name'>
                    <v-card height='350px' dark class="text-xs-center ma-3 transparent" >
                        <v-card-title><h4 id='type-title'>{{ Vegetarian.name}}</h4></v-card-title>
                        <v-responsive pt-4>
                            <v-img height='200px' max-width="250px" :src='Vegetarian.img'></v-img>
                        </v-responsive>
                        <v-card-text>
                            <div class='subheading text-center'>{{ Vegetarian.description}}</div>
                            
                        </v-card-text>
                        <v-card-action>
                            <v-btn  color='red darken-1' small block dark>
                                <v-icon left>mdi-cart-plus</v-icon>
                                Ajouter {{ Vegetarian.price}}
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
      </v-list-item-content>
    </v-list-item>

    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title><h id='list-titel'>Traditionelles</h></v-list-item-title>
            <v-divider inset color='white'></v-divider>
        <div class='Traditionelles'>
        <v-container class="mx-5" >
            <v-layout row wrap>
                <v-flex xs12 sm6 lg3 v-for="Traditionelle in Traditionelles" :key='Traditionelle.name'>
                    <v-card height='350px' dark class="text-xs-center ma-3 transparent">
                        <v-card-title><h4 id='type-title'>{{ Traditionelle.name}}</h4></v-card-title>
                        <v-responsive pt-4>
                            <v-img height='200px' max-width="250px" :src='Traditionelle.img'></v-img>
                        </v-responsive>
                        <v-card-text>
                            <div class='subheading text-center'>{{Traditionelle.description}}</div>
                            
                        </v-card-text>
                        <v-card-action>
                            <v-btn  color='red darken-1' small block dark>
                                <v-icon left>mdi-cart-plus</v-icon>
                                Ajouter {{ Traditionelle.price}}
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
      </v-list-item-content>
    </v-list-item>

    <v-list-item Four-line>
      <v-list-item-content>
        <v-list-item-title><h id='list-titel'>Terre et Mer</h></v-list-item-title>
            <v-divider inset color='white'></v-divider>
        <div class='Terres'>
        <v-container class="mx-5" >
            <v-layout row wrap>
                <v-flex xs12 sm6 lg3 v-for="Terre in Terres" :key='Terre.name'>
                    <v-card height='350px' dark class="text-xs-center ma-3 transparent">
                        <v-card-title><h4 id='type-title'>{{ Terre.name}}</h4></v-card-title>
                        <v-responsive pt-4>
                            <v-img height='200px' max-width="250px" :src='Terre.img'></v-img>
                        </v-responsive>
                        <v-card-text>
                            <div class='subheading text-center'>{{Terre.description}}</div>
                            
                        </v-card-text>
                        <v-card-action>
                            <v-btn  color='red darken-1' small block dark>
                                <v-icon left>mdi-cart-plus</v-icon>
                                Ajouter {{ Terre.price}}
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
      </v-list-item-content>
    </v-list-item>

    <v-list-item Five-line>
      <v-list-item-content>
        <v-list-item-title><h id='list-titel'>Salé Sucrè</h></v-list-item-title>
            <v-divider inset color='white' ></v-divider>
        <div class='Sals'>
        <v-container class="mx-5" >
            <v-layout row wrap>
                <v-flex xs12 sm6 lg3 v-for="sal in sals" :key='sal.name'>
                    <v-card height='350px' dark class="text-xs-center ma-3 transparent">
                        <v-card-title><h4 id='type-title'>{{ sal.name}}</h4></v-card-title>
                        <v-responsive pt-4>
                            <v-img height='200px' max-width="250px" :src='sal.img'></v-img>
                        </v-responsive>
                        <v-card-text>
                            <div class='subheading text-center'>{{sal.description}}</div>
                            
                        </v-card-text>
                        <v-card-action>
                            <v-btn  color='red darken-1' small block dark>
                                <v-icon left>mdi-cart-plus</v-icon>
                                Ajouter {{ sal.price}}
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
      </v-list-item-content>
    </v-list-item>
      </v-flex>
      <v-flex >
         <v-layout  column justify-space-between  fill-height>
            <v-card class='ma-5'>
                <v-card-title>Facture</v-card-title>
                <divider insert></divider>
                <v-card-text>total here</v-card-text>
            </v-card>
         </v-layout>
      </v-flex>
   </v-layout>
        </v-img>
    </v-card>
    
</template>

<script>
    export default {
        data() {
            return{
               
                Signatures:[
                    { name:'Chévre Miel', 
                    description:'Chevrotin , miel, noix , Crème fraiche, olive noire , Figue' , 
                    price:'6.99 €',
                    img:'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2F74dd970b-6145-4021-ac64-f93479da3800.2Ejpeg/748x372/quality/80/crop-from/center/pizza-blanche-chevre-miel-et-creme-fraiche.jpeg' },
                    { name:'Salade Pizza' , 
                    description:'Sauce Tomate ,Basilique, tomate cerises, Salade , Mozzarella' ,
                    price:'5.99 €',
                    img:'https://assets.kraftfoods.com/recipe_images/rec_r1_44458v1fc.jpg'},
                    { name:'4 Fromages', 
                    description:'Crème Fraiche , Permesan, Ricotta , Emmental, Mozzarella' , 
                    price:'7.99 €',
                    img:'http://static.thiriet.com/data/common_public/gallery_images/site/18756/18774/50361.jpg' 
                    },
                    ],
                Vegetarians:[
                    { name:'Petit lègumes', 
                    description:'Sauce tomate , couregette, Aubergine , Poivron, olive noire' , 
                    price:'6.99 €' ,
                    img:'https://www.notretemps.com/cache/com_zoo_images/38/pizza-legumes-pate-choufleur_88349b97cf6734d0f3e7ddee9898b40b.jpg'
                    },
                    
                    { name:'Pizza oeuf', 
                    description:'Sauce tomate , œuf, tomate cerise, poivron, olive noire ,Corianbre' , 
                    price:'6.99 €' ,
                    img:'https://youcookcuisine.com/wp-content/uploads/2018/11/pizza-vegetarienne.jpg'
                    },
                ],
                Traditionelles:[
                    { name:'Algèrienne', 
                    description:'Poulet au Curry, Sauce Algèrienne , Pomme de terre, emmental' , 
                    price:'7.99 €' ,
                    img:'https://4.bp.blogspot.com/-BCQhb-YNCvs/UqqbpwZr1UI/AAAAAAAAJhs/12-mFpMIU9g/s1600/image.jpg'
                    },
                    { name:'Mexican', 
                    description:'Sauce tomate , Vinde hachèe, Olive , Piment, Sauce Blanche' , 
                    price:'7.99 €',
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGiOqXFS8gUTezW2ynf-REYokzarpmEeSaCG1NvqTSM8V05T9' 
                    },
                ],
                Terres:[
                    { name:'Fruits de Mer', 
                    description:'Sauce tomate , Moules, Crevettes , Calamar, Crabe, Olive , Jus de Citron' , 
                    price:'7.99 €' ,
                    img:'http://rd-prod.s3.amazonaws.com/images/nouvelles_recettes/Pizza-aux-fruits-de-mer.jpg?1434377034'
                    },
                    { name:'Saumon fumé', 
                    description:'Sauce tomate , Crème fraiche, Saumon , Mozzarella, Coriandre ' , 
                    price:'6.99 €' ,
                    img:'https://www.metro.ca/userfiles/image/recipes/pizza-saumon-fume-3149.jpg'
                    },
                    ],
                    sals:[
                        { name:'Saumon Ananas', 
                    description:' Saumon , Mozzarella, Ananas , Olive noire , Corianbre ' , 
                    price:'6.99€', 
                    img:'http://remypizza.com/120/tortilla-saumon-facon-pizza.jpg'
                    },
                    { name:'Chocolat', 
                    description:'Nutella , Banane, Fraise , Sucre Glace , noisettes , coco râpée ' , 
                    price:'5.99 €',
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyk5r1sW1ZPkvgvu_rzOkz0fg-DWNr9zeAocLv6grJtgcE6osm' 
                    },
                    ],
                 images: [
          {
            src: 'http://pomodoropizza.co.za/wp-content/uploads/pizza-background.jpg',
          },
          {
            src: 'https://wallpaperaccess.com/full/462773.jpg',
          },
          {
            src: 'https://i.pinimg.com/originals/be/c4/de/bec4de77e9c454368367727167fcb65f.jpg',
          },
          
        ],
            }
        }
        
    }
</script>


<style>
    #list-titel{
        font-size: 40px;
        color: #FFFFFF;
        text-shadow: 3px 2px gray;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: italic; 
        }
    #type-title{
       font-size: 20px;
        color: #FFFFFF;
        font-family: Arial, Helvetica, sans-serif; 
        }
    
    
</style>