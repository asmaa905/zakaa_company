<template>
    <div class="mt-0">
      <navbar-comp />
            <slot name="content"/>
      <footer-comp />
    </div>
</template>

<script>
import FooterComp from './FooterComp.vue'
import NavbarComp from './NavbarComp.vue'
export default {
  components: { FooterComp, NavbarComp },
    name:"main-layout"
}
</script>

<style>

</style>