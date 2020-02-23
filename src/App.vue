<template>
  <div id="app">
    <h3>from App.vue</h3>
    <img alt="Vue logo" src="./assets/logo.png">
    <app-message></app-message>
    <input-vasu></input-vasu>
    <input-vasu-2></input-vasu-2>
    <input-checkbox></input-checkbox>
    <input-radio></input-radio>
    <input-tabs></input-tabs>
    <input-tabs-2></input-tabs-2>
  </div>
</template>

<script>
import input from './components/input.vue'
import input2 from './components/input2.vue'
import Checkbox from './components/Checkbox.vue'
import Radio from './components/Radio.vue'
import Tabs from './components/Tabs.vue'
import Tabs2 from './components/Tabs2.vue'

export default {
  components:  {
       'input-vasu': input,
       'input-vasu-2': input2,
       'input-checkbox': Checkbox,
       'input-radio': Radio,
       'input-tabs': Tabs,
       'input-tabs-2': Tabs2
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
