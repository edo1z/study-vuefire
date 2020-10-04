import {db} from '@/api/firebase'
import {firestoreAction} from 'vuexfire'

export default {
  namespaced: true,
  state: {
    items: [],
  },
  actions: {
    bindItems: firestoreAction(({bindFirestoreRef}) => {
      return bindFirestoreRef('items', db.collection('items'))
    })
  }
}
