<template>
    <section>
        <h1 class="heading">Stay Hydrated Always</h1>

        <h2 class="subtitle">Tracking the water intake </h2>
        <figure class="image is-128x128">
           <img src="https://www.dreamstime.com/thirsty-athlete-drinking-power-drink-long-run-train-image159381749">
        </figure>   
        <progress class="progress is-large" :value="water" max="75"></progress>
            <h2>aggregate: {{water}} ounces </h2>
                <div class="manage">
                     <label class="button">
                        <input type="submit" name="water" value=" 3ounce" @click="add3()" >
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
        async work1(){
        try {
            await Goals.State.Goals.Goals.work1(goal)
        } catch (error) {
            this.error = error;
        }
    },
    async nowork(i){
        try {
            await Goals.State.Goals.Goals.nowork(i)
        } catch (error) {
            this.error = error
        }
    },
    },
    created(){
        Hydrate.Init()
    }
}
</script>