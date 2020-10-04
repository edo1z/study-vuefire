<template>
  <Default>
    <v-container>
      <h2 class="mb-4">Robots Add</h2>
      <v-text-field label="name" v-model="robot.name"/>
      <v-text-field label="makerName" v-model="robot.makerName"/>
      <v-text-field label="status" v-model="robot.status"/>
      <v-text-field label="info" v-model="robot.info"/>
      <v-text-field label="branch" v-model="robot.branch"/>
      <v-btn @click="submit">Submit</v-btn>
    </v-container>
  </Default>
</template>

<script>
import Default from '@/layouts/Default'
export default {
  components: { Default },
  data: () => ({
    robot: {
      name: null,
      makerName:  null,
      status: null,
      info: null,
      branch: null
    }
  }),
  methods: {
    submit() {
      console.log('submit')
    }
  }
}
</script>
