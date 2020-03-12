<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   
    

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">
      


      <router-link to="/" class="navbar-item" active-class="is-current" exact>Home</router-link>
      
      

      

      <router-link to="/Excercise" class="navbar-item" active-class="is-current">Excercise</router-link>
      

      
      <router-link to="/Heart" class="navbar-item" active-class="is-current">Heart</router-link>
      <router-link to="/Nutrition" class="navbar-item" active-class="is-current">Nutrition</router-link>
      
      <div class="navbar-item has-dropdown is-hoverable">
         <a class="navbar-item" active-class="is-current">Track</a>
         <div class="navbar-dropdown">
          <router-link to="/Activity" class="navbar-item">
            Activity</router-link>
          
           <hr class="navbar-divider">
          <router-link to="/log" class="navbar-item">
            Log</router-link>
          
         
          
        </div>
      </div>
          


      
         
          
    



      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item">
          About</a>
        

        <div class="navbar-dropdown">
          <router-link to="/contact" class="navbar-item">
            Contact</router-link>
          
           <hr class="navbar-divider">
          <router-link to="/report" class="navbar-item">
            Report an issue</router-link>
          
         
          
        </div>
      </div>
    </div>  
  

    <div class="navbar-end">
      <div class="navbar-item">
        
          <router-link to="/sign" class="navbar-item">
            Sign up</router-link>
        
          <router-link to="/login" class="navbar-item">
            Log in</router-link>
          
        
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