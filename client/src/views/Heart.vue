<template> 
<section class="hero has-background-primary hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container">
      <figure class="image is-128x128">
        <img src="https://www.shutterstock.com/image-vector/electrocardiogram-icon-348577334">
      </figure>
      <progress class= "progress is-large" :value="BP" max="120/80" ></progress>
      <h2 class="title"><b>
          1.Blood pressure
        
     </b></h2>
      <h3 class="subtitle"><b>Enter the Blood Pressure: {{BP}}
        Unit-mmHg
      </b></h3>
      
    
                    
                        <button type="submit" name="bloodpressure" value=" mmHg" @click="add20()" >
                          </button> 
              
                    <button type="submit" name="bloodpressure" value="mmHg" @click="add40()" >
                    </button>
      
      <section class="content">
          <p>Blood pressure is the force of blood pushing against the walls of the arteries
              as your heart pumps blood.It includes two measurements."Systolic" is your Blood pressure when your heart
              beats while pumping blood."Diastolic" is your blood pressure when the heart is at rest between hearts  </p>
      </section>
    
                     
      <h2 class="title"><b>
          2.Electrocardiograms
        
     </b></h2>
      <h3 class="subtitle"><b>
        (ECG or EKG)
      </b></h3>
      
      <section class="content">
          <p>An Electrocardiogram is a test that records the timing and strength of electrical signals that 
              make the heart beat.By looking at an ECG,a doctor can gain insights about your heart rhythm and look for irregularities</p>
      </section>
    </div>
  </div>
</section>
      

</template>
<script>
import Heart from '..Models/Heart'
export default {
  data: () => ({
        BP: Heart.State.Heart[0].BPtotal //index of where you're looking
    }),
}
</script>