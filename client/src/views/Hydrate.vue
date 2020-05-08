<template>
    <section>
        <h1 class="title has-text-centered has-text-weight-bold is-large">Stay Hydrated Always</h1>

        <h2 class="subtitle has-text-success has-text-centered">Tracking the water intake </h2>
        <figure class="image is-128x128">
           <img src="http://www.newdesignfile.com/postpic/2013/07/water-tracker-app-iphone_296020.jpg" width="250" height ="230">
        </figure>   
        <progress class="progress is-medium is-success" :value="water" max="75"></progress>
            <h2 class="control has-text-weight-bold">Aggregate: {{water}} ounces </h2>
                <div class="manage">
                     <label class="button">
                        <input type="submit" name="water" value=" 3 ounces " @click="add3()" >
                    </label>
                     <label class="button">
                         <input type="submit" name="water" value="6 ounces" @click="add6()" >
                     </label>
                    <label class="button">
                        <input type="submit" name="water" value="15 ounces" @click="add15()" >
                     </label>
                    <label class="button">
                         <input type="submit" name="water" value= "25 ounces" @click="add25()" >
                    </label>
                 </div>
    </section>    
</template>

<script>
import Hydrate from '../models/Hydrate'
export default {
    data: () => ({
        water: Hydrate.State.Hydrate[0].hydratetotal //index of where you're looking
    }),
    methods: {
        add3(){
            this.water=3
        
       
    },
    add6(){
        this.water+=6
    
    },
     add15(){
        this.water+=15
    },
    
        add25() {
            this.water+=25
            
    },
    created(){
        Hydrate.Init()
    }
}
}
</script>