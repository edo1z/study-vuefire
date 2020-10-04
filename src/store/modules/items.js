import { db } from '@/api/firebase'
import { firestoreAction } from 'vuexfire'

export default {
  namespaced: true,
  state: {
    items: [],
  },
  actions: {
    bindItems: firestoreAction(({ bindFirestoreRef, unbindFirestoreRef}, name) => {
      unbindFirestoreRef('items')
      const ref = db
        .collection('items')
        .orderBy('name')
        .startAt(name)
        .endAt(name + '\uf8ff')
      return bindFirestoreRef('items', ref)
    }),
  },
}
