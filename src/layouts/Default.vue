<template>
  <div>
    <MenuBar />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </div>
</template>

<script>
import MenuBar from '@/components/menus/MenuBar'
import Footer from '@/components/footers/Footer'
export default {
  name: 'default',
  components: { MenuBar, Footer },
}
</script>
