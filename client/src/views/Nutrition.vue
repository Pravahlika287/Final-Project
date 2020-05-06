
<template>
  <section>
  <h1 class="title">Checkout the Nutrition information here</h1>
  <h2 class='subtitle">It is important to know and keep track of calories we consume</h2>
          <div class="column">
     
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


                          </div>

                        </div>

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