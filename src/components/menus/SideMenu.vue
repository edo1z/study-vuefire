<template>
  <v-list nav dense>
    <v-list-item-group v-model="group">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="goto(item.to, item.outside)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: 'robots', icon: 'mdi-account', to: '/robots', outside: false },
      {
        title: 'categories',
        icon: 'mdi-account',
        to: 'categories',
        outside: false,
      },
      { title: 'specs', icon: 'mdi-account', to: 'specs', outside: false },
      {
        title: 'accessories',
        icon: 'mdi-account',
        to: 'accessories',
        outside: false,
      },
      {
        title: 'inquiries',
        icon: 'mdi-account',
        to: 'inquiries',
        outside: false,
      },
    ],
  }),
  methods: {
    goto(to, outside) {
      if(outside) {
        window.open(to, '_blank')
      } else {
        this.$router.push(to)
      }
    },
  },
}
</script>
