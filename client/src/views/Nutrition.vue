
<template>
  <section class="hero has-background-primary hero is-success is-fullheight">
      <container class="manage">
        <h1 class="title  has-text-black has-text-weight-bold is-large has-text-centered">Balanced Diet is Always Necessary for Good health</h1>
        <h1 class="sub-title has-text-black has-text-weight-bold has-text-centered ">It is Necessary to keep track of calories for the food we consume</h1>
         <div class="column is-one-third has-text-black">




            <p class="content"><b>The List of Food Items:</b> {{ selected }}</p>
        <b-field label="Find a JS framework">
            <b-autocomplete
                rounded
                v-model="name"
                :data="List"
                placeholder="e.g. jQuery"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
     
            <div class="">
             <ul class="panel">
               <li class="panel-heading has-background-warning">Fiber food</li>
               <li>1.Fruits </li>
               <li>2.Vegetables</li>
               <li>3.BEANS</li>
               <li>4.Breads</li>
               <li>5.Nuts</li>
            
              </ul>
            </div>
            </div> 

             <div class="column is-one-third has-text-black">
                          <div class="">
                              <ul class="panel">
                                <li class="panel-heading has-background-warning">Low Calorie but filling foods</li>
                                <li>1.Oats</li>
                                <li>2.Greek yogurt</li>
                                <li>3.Berries</li>
                                <li>4.Eggs</li>
                                <li>5.Chia Seeds</li>
            
                              </ul>


                          </div>


                        </div>
                        
      </container>
  </section>
</template>  
<script>
import Nutrition from '../models/Nutrition'
export default {
  
  data:()=>
  ({
    newfood: "",
    cal:0,
    diet:diets.State.diets,
    calories:Nutrition.State.Nutrition[0].diettotal ,
    selected:Nutrition.State.List
    

    
  }),
   
  methods: {
    async remove(i){
        try {
            await Nutrition.remove(i)
        } catch (error) {
            this.error = error;
        }
    },
    

    async addF(){
        try {
            await Nutrition.addF(this.newfood,this.cal)
        } catch (error) {
            this.error = error;
        }
    }},
    
    
    created(){
        Nutrition.Init()
    }
  }


</script>    