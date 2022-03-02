<template>
  <div v-if="promises.length > 0" class="flex flex-col space-y-2">
    <h1 class="wv-h8 wv-font-kondolar wv-font-black">
      สำรวจคำสัญญา พรรคการเมือง
    </h1>
    <p
      ref="countLabel"
      class="wv-h10 wv-font-kondolar wv-font-black text-ultramarine"
    >
      {{ promises.length }} คำสัญญา
    </p>
    <div v-if="filters.length > 0" class="flex flex-col items-start space-y-1">
      <FilterChip
        v-for="filter in filters"
        :key="filter.type"
        :filter="filter"
      />
    </div>
    <p v-else class="wv-u4 wv-font-semibold">จากทุกพรรค ในทุกประเด็น</p>
  </div>
  <div v-else>
    <h1 class="wv-h8 wv-font-kondolar wv-font-black">
      ไม่พบคำสัญญาที่คุณค้นหา
    </h1>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import FilterChip from './filter-chip.vue';

import { Filter } from '@/models/filter';
import { TrackingPromise } from '@/models/promise';

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
    filters: {
      type: Array as PropType<Filter[]>,
      default: () => [],
    },
  },
});
</script>
