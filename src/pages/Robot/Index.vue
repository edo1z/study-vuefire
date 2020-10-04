<template>
  <Default>
    <v-container>
      <h2 class="mb-4">Robots</h2>
      <v-btn @click="$router.push('/robots/add')" class="mb-4">New</v-btn>
      <ul>
        <li>hoge</li>
      </ul>
    </v-container>
  </Default>
</template>

<script>
import Default from '@/layouts/Default'
export default {
  components: { Default },
}
</script>
