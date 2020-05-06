<template>



<section class="hero has-background-white hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">A Balanced Diet is Always an important part of Health and Fitness</h1>
      <h2 class="sub-title">Guys,You can know about the food which doesnt have any cholestrol and food which is good in fibres</h2>
       <div class="column is-one-third">
        <div class="">
          <ul class="panel">
            <li class="panel-heading">fiber food</li>
            <li>1.Fruits </li>
            <li>2.Vegetables</li>
            <li>3.BEANS</li>
            <li>4.Breads</li>
            <li>5.Nuts</li>
            
          </ul>

        </div>
      </div>
      <div class="column">
        <div class="">
          <ul class="panel">
            <li class="panel-heading">Low Calorie but filling foods</li>
            <li>1.Oats</li>
            <li>2.Greek yogurt</li>
            <li>3.Berries</li>
            <li>4.Eggs</li>
            <li>5.Chia Seeds</li>
            
          </ul>
          <h3 class="control">Total calories:{{calories}}</h3>
          <label class="button">
                        <input type="submit" name="calorie" value=" 300 " @click="add300()" >
                    </label>
                     <label class="button">
                         <input type="submit" name="calorie" value=" 500" @click="add500()" >
                     </label>
          <input class="input" type="text" placeholder="add food" v-model="newfood" v-if="isAdmin">
                    <input class="button" type="submit" value="Add another food" @click="addF(newfood,calorie)">
                    <div class="manage" v-for="y in diets" :key="y.diet">
                    <h3>{{y.diet}}
                        <a class="del" @click="removeF(i)" v-if="isAdmin"></a>
                    </h3>    

        </div>
      </div>
      
       
      
        

       
       
       
       
       
    </div>
  </div>
     
     
    
  </section>
  
</template>
<script>
import Nutrition from '../models/Nutrition'
export default {
  
  data:()=>
  ({
    newfood: "",
    diet:diets.State.diets,
    calories:Nutrition.State.Nutrition[0].diettotal ,
    
    isAdmin: true
  }),
  methods: {
    async remove(i){
        try {
            await diets.State.diets.remove(i)
        } catch (error) {
            this.error = error;
        }
    },
    

    async addF(newfood,calorie){
        try {
            await diets.State.diets.addF(newfood)
        } catch (error) {
            this.error = error;
        }
    },
    
    created(){
        Nutrition.Init()
    }
  }
}

</script>