<template>
<nav class="navbar has-background-black" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      </a>
   
    

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">
      


      <router-link to="/" class="navbar-item " active-class="is-current" exact>Home</router-link>
      
      

      

      <router-link to="/Excercise" class="navbar-item" active-class="is-current">Excercise</router-link>
      

      
      <router-link to="/Heart" class="navbar-item" active-class="is-current">Heart</router-link>
      
      <router-link to="/Nutrition" class="navbar-item" active-class="is-current">Nutrition</router-link>
      <router-link to="/Hydrate" class="navbar-item" active-class="is-current">Hydrate</router-link>
      <router-link to="/About" class="navbar-item" active-class="is-current">About</router-link> 
        
      
          
         
          
        </div>
      </div>
          


      
         
          
    



          
           
         
          
        
    
      
    <div class="navbar-end">
      <div class="navbar-items">
  
    <div class="buttons"> 
    
        
          <a class= "button is-primary" href="/signup">
          <strong>Sign up</strong></a>
        
         <a class="button is-primary" href="/login">
         Log in</a>
          
        
      </div>
    </div>
    </div>
    
  

</nav>
</template>

<script>
export default {
  data: ()=>({
    isOpen: false
  })
}
</script>

<style>
  .is-current {
    font-weight: bold;
    color: blueviolet
  }
  .navbar {
    font: 1em sans-serif;
    text-align: center;
    font-weight: 500;
    color: #000;
  }
</style>