<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="C:\Users\admin\Desktop\Final-Project\fit.jpeg" width="112" height="28">
    </a>
    

    <a :class="{ 'is-active':isOpen }" @click="isOpen = !isOpen" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active':isOpen }" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">



      <router-link to="/" class="navbar-link" active-class="is-current" exact>Excercise</router-link>
      <div class="navbar-dropdown">
        <a class="navbar-item">
          Walking
        </a>  
        <hr class="navbar-divider">
        <a class="navbar-item">
          Running
        </a>
        <hr class="navbar-divider">
        <a class="navbar-item">
          Cycling
        </a> 
      </div>
      </div> 

      <div class="navbar-item has-dropdown is-hoverable">

      <router-link to="/about" class="navbar-link" active-class="is-current">Heart</router-link>
      <div class="navbar-dropdown">
        <a class="navbar-item">
          Blood Pressure
        </a>  
        <hr class="navbar-divider">
        <a class="navbar-item">
          Heart Rate
        </a>
        <hr class="navbar-divider">
        <a class="navbar-item">
          ECG
        </a> 
      </div>
      </div> 

      <div class="navbar-item has-dropdown is-hoverable">
      <router-link to="/game" class="navbar-link" active-class="is-current">Nutrition</router-link>
      <div class="navbar-dropdown">
        <a class="navbar-item">
            Carbohydrates
          </a>
           <hr class="navbar-divider">
          <a class="navbar-item">
            Fibres
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Vitamins
            </a>
         
          
        </div>
      </div>



      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
           <hr class="navbar-divider">
          <a class="navbar-item">
            Contact
          </a>
         
          
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light" href="/login">
            Log in
          </a>
        </div>
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
</style>