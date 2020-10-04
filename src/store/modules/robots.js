import { db } from '@/api/firebase'
import { firestoreAction } from 'vuexfire'

export default {
  namespaced: true,
  state: {
    robots: [],
  },
  actions: {
    bindItems: firestoreAction(({ bindFirestoreRef, unbindFirestoreRef}, name) => {
      unbindFirestoreRef('robots')
      const ref = db
        .collection('robots')
        .orderBy('name')
        .startAt(name)
        .endAt(name + '\uf8ff')
      return bindFirestoreRef('robots', ref)
    }),
  },
}
