<template>
  <div id="app">
    <headerrr/>
    <div style="height:30px;"></div>

    <router-view/>

   

     <Bottom/>
  </div>
</template>

<script>
import axios from 'axios'
import Bottom from "@/pages/public/bottom"
import Headerrr from "@/pages/public/header"

export default {
       components: {
       Bottom,
       Headerrr,
       },
   data() {
    return {

  
    };
  },
  methods: {

  },

}
</script>

<style>

 
</style>
