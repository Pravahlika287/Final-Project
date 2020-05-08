<template>
  <form class="container">
      {{error}}
      <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email" v-model="email" >
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success">
            Sign Up
            </button>
            <button class="button is-success" @click="cancel">Dont submit</button>


        </p>
        </div>
  </form>
</template>

<script>

export default {
    data:()=>({
        
            email: "",
            password: "",
            
        
    }),
    methods: {
        cancel()
        {
            this.email="";
            this.password="";
        }
           
        }
    }

</script>

<style>
</style>