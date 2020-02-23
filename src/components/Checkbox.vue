<template>
   <div id='language'>
     Has Membership : <input type="checkbox" value="membership" v-model="membership">
                      <p> {{membership}} </p>
   </div>
</template>

<script>
export default {
       data(){
           return {
               membership: ''
           }
       }
   }
</script>