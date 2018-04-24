<template>
  <div id="app">
    <ucc-header></ucc-header>
    <router-view></router-view>
    <ucc-footer></ucc-footer>
  </div>
</template>

<script>
import uccHeader from '@/components/header/item.vue'
import uccFooter from '@/components/footer/item.vue'

export default {
  name: 'App',
  components: {
    uccHeader,
    uccFooter
  }
}
</script>
