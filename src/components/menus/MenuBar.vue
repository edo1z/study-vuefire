<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push('/')">Study Vuefire</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <SideMenu />
    </v-navigation-drawer>
  </div>
</template>

<script>
import SideMenu from '@/components/menus/SideMenu'
export default {
  name: 'menu-bar',
  components: { SideMenu },
  data: () => ({
    drawer: false
  })
}
</script>
