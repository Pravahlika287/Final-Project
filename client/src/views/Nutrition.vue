
<template>
  <section class="hero has-background-primary hero is-success is-fullheight">
      <container class="manage">
        <h1 class="title  has-text-black has-text-weight-bold is-large has-text-centered">Balanced Diet is Always Necessary for Good health</h1>
        <h1 class="sub-title has-text-black has-text-weight-bold has-text-centered ">It is Necessary to keep track of calories for the food we consume</h1>
         <div class="column is-one-third has-text-black">
     
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
                        <input class="input" type="text" placeholder="Item" v-model="newfood">
                        <input class="input" type="text" placeholder="calorieconsum" v-model="cal">
                        <button type="submit" value="addition" @click="addF()">


                    <container class="manage">
                  <div v-for="x in Nutrition.State.Nutrition" :key="x.food">
                    <table class="t1">
                     <td> diet:{{x.name}}</td> <td>calories: {{x.calorie}} </td>
                     <button class="cancel" @click="remove(i)"></button>
                    </table>  
                   </div> 
                    </container>    
                       

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