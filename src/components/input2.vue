<template>
   <div>
     Last Name : <input type="text" v-model="lastname" placeholder="Enter Last Name">
     <p> {{lastname}} </p>
   </div>
</template>

<script>
   export default {
       data(){
           return {
               lastname: ''
           }
       }
   }
</script>