<template>
  <div id="app">
    <MyNav>

    </MyNav>



 <router-view/>
  </div>   

</template>

<script>
import MyNav from "@/components/Nav.vue"
export default {
  components: {
    MyNav
  }
  
}
</script>

<style lang="scss"> 
.navbar {
  color:darkblue;
  display:block;
  background-color: darkorange;;
}

  




</style>
