<template>
   <div>
     First Name : <input type="text" v-model="firstname" placeholder="Enter First Name">
     <p> {{firstname}} </p>
   </div>
</template>

<script>
   export default {
       data(){
           return {
               firstname: ''
           }
       }
   }
</script>