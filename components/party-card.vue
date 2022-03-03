<template>
  <div>
    <div class="h11">
      {{ partyName }}
    </div>
    <NuxtLink :to="partyLink"></NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PartyCard',
  props: {
    partyName: {
      type: String,
      default: '',
    },
    partyLink: {
      type: String,
      default: '',
    },
    // promises: {
    //   type: Object as PropType<Map<PromiseStatus, Number>>,
    //   default: {},
    // },
  },
});
</script>

<style></style>
