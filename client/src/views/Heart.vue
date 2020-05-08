<template> 
<section class="hero has-background-primary hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container">
     
      <h2 class="title"><b>
          1.Blood pressure
        
     </b></h2>
      <h3 class="subtitle"> {{BP}} Unit-mmHg </h3>
      
      
    
                
      <section class="content has-text-centered has-text-black">
          <p>Blood pressure is the force of blood pushing against the walls of the arteries
              as your heart pumps blood.It includes two measurements."Systolic" is your Blood pressure when your heart
              beats while pumping blood."Diastolic" is your blood pressure when the heart is at rest between hearts  </p>
      </section>
    <button  value="pressure" name="Bp" @click="add20">ADD</button>
    <button value="pressure" name="Bp" @click="add40">ADD</button>
                     
      <h2 class="title"><b>
          2.Electrocardiograms
        
     </b></h2>
      <h3 class="subtitle"><b>
        (ECG or EKG)
      </b></h3>
      
      <section class="content has-text-centered has-text-black">
          <p>An Electrocardiogram is a test that records the timing and strength of electrical signals that 
              make the heart beat.By looking at an ECG,a doctor can gain insights about your heart rhythm and look for irregularities</p>
      </section>
    </div>
  </div>
</section>
      

</template>
<script>
import Heart from '../models/Heart'
export default {
  data: () => ({
        BP: Heart.State.Heart[0].BPtotal //index of where you're looking
    }),

methods: {
         add20(){
        this.BP+=20
    },
      add40(){
        this.BP+=40
      
    },
    created(){
        Heart.Init()
    }
}
}
</script>