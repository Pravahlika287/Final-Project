<template>
    <section>
    <h1 class="title">This is the Workout page</h1>
    <h2 class="subtitle">You can save progress here</h2>
        <div class="c1">
        
                <image src="https://www.pexels.com/photo/person-tying-lace-of-shoes-1040427/"></image>
                
               
        </div>
        
    <container>
        <h2 class="control">Hey guys,u can add the daily workout right here</h2>
        <progress class="progress is-danger" max="100">30%</progress>
        
         
        
                <input class="input" type="text" placeholder="add excercise" v-model="newex" v-if="isAdmin">
                    <input class="button" type="submit" value="Add another item" @click="addEx()">

                     <div class="manage" v-for="y in workouts" :key="y.workout">
                    <h3>{{y.workout}}
                        <a class="del" @click="remove(i)" v-if="isAdmin"></a>
                    </h3>    
            </div>            
    </container>
    </section> 
</template>   

<script>
import Excercise from "../models/Excercise";
export default{
  data:()=>({
    newex: "",
    workout: workouts.State.workouts,
    isAdmin :"true",//defined i
    i:""
    
  }),
  methods: {
    
    async remove(i){
        try {
            await Excercise.remove(i)
        } catch (error) {
            this.error = error
        }
        }
    },
    async addEx(){
        try {
            await Excercise.addEx(this.newex)
        } catch (error) {
            this.error = error;
        }
    },
    created(){
        Excercise.Init()
    }
  }
</script>