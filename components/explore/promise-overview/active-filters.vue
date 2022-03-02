<template>
  <div class="flex flex-col">
    <h1 class="wv-h8 wv-font-kondolar wv-font-black">
      สำรวจคำสัญญา พรรคการเมือง
    </h1>
    <p
      ref="countLabel"
      class="wv-h10 wv-font-kondolar wv-font-black text-ultramarine"
    >
      {{ promises.length }} คำสัญญา
    </p>
    <div class="flex flex-wrap">
      <FilterChip :filter="filter" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { TrackingPromise } from '../../../models/promise';
import FilterChip from './filter-chip.vue';

export default Vue.extend({
  name: 'ActiveFilters',
  components: {
    FilterChip,
  },
  props: {
    promises: {
      type: Array as PropType<TrackingPromise[]>,
      default: () => [],
    },
  },
  data() {
    return {
      filter: { type: 'party', value: 'พลังประชารัฐ' },
    };
  },
});
</script>
