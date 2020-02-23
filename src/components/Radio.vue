<template>
    <div>         <input type="radio" value="Blue" v-model="color">  : Blue
                  <input type="radio" value="Green" v-model="color"> : Green
                  <br/><span>Picked: {{ color }}</span>
    </div>
</template>

<script>
   export default {
       data(){
           return {
               color: ''
           }
       }
   }
</script>