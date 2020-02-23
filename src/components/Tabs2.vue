<template>
  <tabs>
    <tab title="Vue">
      This is Vue
    </tab>
    <tab title="React">
      This is React
    </tab>
    <tab title="Svelte">
      This is Svelte
    </tab>
  </tabs>
</template>

<script>
import { Tabs, Tab } from 'vue-slim-tabs'

export default {
  components: {
    Tabs, Tab
  }
}
</script>

<!-- optionally use our default style -->
<style src="vue-slim-tabs/themes/default.css"></style>