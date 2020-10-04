import {db} from '@/api/firebase'

export default {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    items: (state, items) => state.items = items
  },
  actions: {
    async getItems({commit}) {
      const snapshot = await db.collection('items').get()
      const items = []
      snapshot.forEach(doc => {
        items.push(doc.data())
      })
      commit('items', items)
    },
  }
}
