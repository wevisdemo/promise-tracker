<template>
  <div>
    <h1>Explore</h1>
    <ActiveFilters />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ActiveFilters from '../components/explore/promise-overview/active-filters.vue';

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    ActiveFilters,
  },
});
</script>
