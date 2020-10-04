<template>
  <div>
    <Default>
      <v-container>
        <h2>Items</h2>
        <v-btn @click="getItems" color="primary" class="mt-4">Get!</v-btn>
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
  components: { Default },
  computed: {
    ...mapState('items', {
      items: (state) => state.items,
    }),
  },
  methods: {
    ...mapActions('items', ['getItems']),
  },
}
</script>
