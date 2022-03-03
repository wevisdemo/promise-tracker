<template>
  <div class="h11">{{ partyName }}</div>
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
    // promises: {
    //   type: Object as PropType<Map<PromiseStatus, Number>>,
    //   default: {},
    // },
  },
});
</script>

<style></style>
