<template>
  <div>
    <Default>
      <v-container>
        <h2>Items</h2>
        <v-text-field label="name" v-model="name">
        </v-text-field>
        <v-btn @click="search" color="primary" class="mt-4">search</v-btn>
        <ul class="mt-4">
          <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
      </v-container>
    </Default>
  </div>
</template>

<script>
import Default from '@/layouts/Default'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  data: () => ({
    name: null
  }),
  components: { Default },
  computed: {
    ...mapState('items', {
      items: (state) => state.items,
    }),
  },
  methods: {
    ...mapActions('items', ['bindItems']),
    search() {
      this.bindItems(this.name)
    }
  },
}
</script>
