<template>
    
    <v-card class='my-1' >
        
            <v-carousel height='200px' hide-delimiters >
                <v-carousel-item
                v-for="(image,i) in images"
                :key="i"
                :src="image.src">
                </v-carousel-item>
            
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
                                        <v-flex xs12 sm6 lg3 v-for="(Signature, index) in Signatures" :key='Signature.name'>
                                            <v-card  height='350px' dark class="text-xs-center ma-3 transparent">
                                                <v-card-title><h4 id='type-title'>{{ Signature.name}}</h4></v-card-title>
                                                <v-responsive >
                                                <v-img height='200px' :src='Signature.img'></v-img>
                                                </v-responsive>
                                                <v-card-text>
                                                    <div class='subheading text-center'>{{ Signature.description}}</div>
                                                    
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-btn @click="addOrder(0, index)" color='red darken-1' small block dark>
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

                <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title ><h id='list-titel'>Vegetarian</h></v-list-item-title>
                            <v-divider inset color='white'></v-divider>
                            <div class='Vegetarian'>
                                <v-container class="mx-5" >
                                    <v-layout row wrap>
                                        <v-flex xs12 sm6 lg3 v-for="(Vegetarian, index) in Vegetarians" :key='Vegetarian.name'>
                                            <v-card height='350px' dark class="text-xs-center ma-3 transparent" >
                                                <v-card-title><h4 id='type-title'>{{ Vegetarian.name}}</h4></v-card-title>
                                                <v-responsive pt-4>
                                                    <v-img height='200px' max-width="250px" :src='Vegetarian.img'></v-img>
                                                </v-responsive>
                                                <v-card-text>
                                                    <div class='subheading text-center'>{{ Vegetarian.description}}</div>
                                                    
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-btn  color='red darken-1' small block dark @click="addOrder(1, index)">
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

                <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title><h id='list-titel'>Traditionelles</h></v-list-item-title>
                        <v-divider inset color='white'></v-divider>
                         <div class='Traditionelles'>
                            <v-container class="mx-5" >
                                <v-layout row wrap>
                                    <v-flex xs12 sm6 lg3 v-for="(Traditionelle, index) in Traditionelles" :key='Traditionelle.name'>
                                        <v-card height='350px' dark class="text-xs-center ma-3 transparent">
                                            <v-card-title><h4 id='type-title'>{{ Traditionelle.name}}</h4></v-card-title>
                                            <v-responsive pt-4>
                                                <v-img height='200px' max-width="250px" :src='Traditionelle.img'></v-img>
                                            </v-responsive>
                                            <v-card-text>
                                                <div class='subheading text-center'>{{Traditionelle.description}}</div>
                                                
                                            </v-card-text>
                                            <v-card-action>
                                                <v-btn  color='red darken-1' small block dark @click="addOrder(2, index)">
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

                <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title><h id='list-titel'>Terre et Mer</h></v-list-item-title>
                        <v-divider inset color='white'></v-divider>
                            <div class='Terres'>
                                <v-container class="mx-5" >
                                    <v-layout row wrap>
                                        <v-flex xs12 sm6 lg3 v-for="(Terre, index) in Terres" :key='Terre.name'>
                                            <v-card height='350px' dark class="text-xs-center ma-3 transparent">
                                                <v-card-title><h4 id='type-title'>{{ Terre.name}}</h4></v-card-title>
                                                <v-responsive pt-4>
                                                    <v-img height='200px' max-width="250px" :src='Terre.img'></v-img>
                                                </v-responsive>
                                                <v-card-text>
                                                    <div class='subheading text-center'>{{Terre.description}}</div>
                                                    
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-btn  color='red darken-1' small block dark @click="addOrder(3, index)">
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

                <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title><h id='list-titel'>Salé Sucrè</h></v-list-item-title>
                        <v-divider inset color='white' ></v-divider>
                            <div class='Sals'>
                                <v-container class="mx-5" >
                                    <v-layout row wrap>
                                        <v-flex xs12 sm6 lg3 v-for="(sal, index) in sals" :key='sal.name'>
                                            <v-card height='350px' dark class="text-xs-center ma-3 transparent">
                                                <v-card-title><h4 id='type-title'>{{ sal.name}}</h4></v-card-title>
                                                <v-responsive pt-4>
                                                    <v-img height='200px' max-width="250px" :src='sal.img'></v-img>
                                                </v-responsive>
                                                <v-card-text>
                                                    <div class='subheading text-center'>{{sal.description}}</div>
                                                    
                                                </v-card-text>
                                                <v-card-action>
                                                    <v-btn  color='red darken-1' @click="addOrder(4, index)" small block dark>
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
                </v-list-item >
            </v-flex>

            <v-flex >

            <v-layout  column justify-space-between  fill-height>
                <v-card class='transparent ma-5 white--text' >
                    <v-card-title><h1 class='facture'>Facture</h1></v-card-title>
                        <v-list-item two-line>
                            <v-list-item-content>
                                    <v-layout column wrap>
                                        <v-flex xs12 sm6 lg3 v-for="(item, index) in AddedItems" :key='item.name'>
                                            <v-list-item-title class='white--text'><p class='pro-title'>{{item.name}}</p></v-list-item-title>
                                            <v-list-item-subtitle class='white--text'><p class='pro-price'>{{item.price}}€</p></v-list-item-subtitle>
                                                <v-card-action >
                                                    <v-btn  color='red darken-1 ma-2' @click="removeOrder(index)" small block dark>
                                                        <v-icon left>mdi-delete</v-icon>
                                                    </v-btn>
                                                </v-card-action>
                                                <v-divider color='white'></v-divider>
                                        </v-flex>
                                    </v-layout>
                            </v-list-item-content>
                        </v-list-item >
                        
                        <divider insert></divider>
                        <v-card class="pa-2 transparent"><p id='total'>Total:&nbsp;&nbsp;{{this.totalPrice}}€</p></v-card>
                        <v-btn class='mr-2' dark  color='red red darken-1' block replace :to="{name: 'end'}">Valider</v-btn>
                    </v-card>
                    
                </v-layout>
            </v-flex>
        </v-layout>
    </v-img>
    </v-card>
    
</template>

<script>
    export default {
        data: ()=> ({
                AddedItems:[],
                Signatures:[
                    
                    { name:'Chévre Miel', 
                    description:'Chevrotin , miel , noix , Crème fraiche , olive noire , Figue, Corianbre' , 
                    price:6.99,
                    img:'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2F74dd970b-6145-4021-ac64-f93479da3800.2Ejpeg/748x372/quality/80/crop-from/center/pizza-blanche-chevre-miel-et-creme-fraiche.jpeg' },
                    { name:'Salade Pizza' , 
                    description:'Sauce Tomate ,Basilique, tomate cerises, Salade , Mozzarella' ,
                    price:5.99,
                    img:'https://assets.kraftfoods.com/recipe_images/rec_r1_44458v1fc.jpg'},
                    { name:'4 Fromages', 
                    description:'Crème Fraiche , Permesan, Ricotta , Emmental, Mozzarella' , 
                    price:7.99,
                    img:'http://static.thiriet.com/data/common_public/gallery_images/site/18756/18774/50361.jpg' 
                    },
                    ],
                Vegetarians:[
                    { name:'Petit lègumes', 
                    description:'Sauce tomate , couregette, Aubergine , Poivron, olive noire' , 
                    price:6.99 ,
                    img:'https://www.notretemps.com/cache/com_zoo_images/38/pizza-legumes-pate-choufleur_88349b97cf6734d0f3e7ddee9898b40b.jpg'
                    },
                    
                    { name:'Pizza oeuf', 
                    description:'Sauce tomate , œuf, tomate cerise, poivron, olive noire ,Corianbre' , 
                    price:6.99 ,
                    img:'https://static.750g.com/images/622-auto/8db9432e3dd8b53b9b099abfceee7815/pizza-a-la-roquette-fromage-et-oeufs.jpg'
                    },
                ],
                Traditionelles:[
                    { name:'Algèrienne', 
                    description:'Poulet au Curry, Sauce Algèrienne , Pomme de terre, emmental' , 
                    price:7.99 ,
                    img:'https://4.bp.blogspot.com/-BCQhb-YNCvs/UqqbpwZr1UI/AAAAAAAAJhs/12-mFpMIU9g/s1600/image.jpg'
                    },
                    { name:'Mexican', 
                    description:'Sauce tomate , Vinde hachèe, Olive , Piment, Sauce Blanche' , 
                    price:7.99,
                    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGiOqXFS8gUTezW2ynf-REYokzarpmEeSaCG1NvqTSM8V05T9' 
                    },
                ],
                Terres:[
                    { name:'Fruits de Mer', 
                    description:'Sauce tomate , Moules, Crevettes , Calamar, Crabe, Olive , Jus de Citron' , 
                    price:7.99 ,
                    img:'http://rd-prod.s3.amazonaws.com/images/nouvelles_recettes/Pizza-aux-fruits-de-mer.jpg?1434377034'
                    },
                    { name:'Saumon fumé', 
                    description:'Sauce tomate , Crème fraiche, Saumon , Mozzarella, Coriandre ' , 
                    price:6.99 ,
                    img:'https://www.metro.ca/userfiles/image/recipes/pizza-saumon-fume-3149.jpg'
                    },
                    ],
                sals:[
                        { name:'Saumon Ananas', 
                    description:' Saumon , Mozzarella, Ananas , Olive noire , Corianbre ' , 
                    price:6.99 , 
                    img:'http://remypizza.com/120/tortilla-saumon-facon-pizza.jpg'
                    },
                    { name:'Chocolat', 
                    description:'Nutella , Banane, Fraise , Sucre Glace , noisettes , coco râpée ' , 
                    price:5.99 ,
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
                totalPrice:0
        }),
        methods:{
            addOrder(type, index){
                var item;
                switch(type){
                    case 0:
                        item = this.Signatures[index];
                        break;
                    case 1:
                        item = this.Vegetarians[index];
                        break;
                    case 2:
                        item = this.Traditionelles[index];
                        break;
                    case 3:
                        item = this.Terres[index];
                        break;
                    case 4:
                        item = this.sals[index];
                        break;
                }
                
                this.AddedItems.push({
                    id: this.AddedItems.length,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    
                })

                this.totalPrice += item.price
                this.totalPrice = Math.round(this.totalPrice*100)/100
            },
            removeOrder(index){
                var item = this.AddedItems[index]
                this.AddedItems.splice(index, 1)
                this.totalPrice -= item.price
                this.totalPrice = Math.round(this.totalPrice*100)/100
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
    .pro-title{
        font-size: 20px;
        color:LightGray ;
        font-weight: bold;
        text-shadow: 3px 2px black;
        }
    .pro-price{
        font-size: 15px;
        color: 	#EF5350;
        font-weight: bold;
        text-shadow: 3px 2px black;
        }
    .facture{
       font-size: 30px;
        color: #FFFFFF;
        text-shadow: 3px 2px black;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: italic; 
        }
    #total{
        font-size: 30px;
        color: #EF5350;
        font-weight: bold;
        text-shadow: 3px 2px black;
        text-transform: italic;
    }

</style>