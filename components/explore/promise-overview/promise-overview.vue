<template>
  <div class="grid grid-cols-2">
    <div />
    <TabNavigation
      :filters="filters"
      :active-tab="activeTab"
      @change="(type) => (activeTab = type)"
    />
    <ActiveFilters
      :filters="filters"
      :promises="promises"
      @removefilter="(filter) => $emit('removefilter', filter)"
    />
    <TabBody :promises="promises" :group-by="activeTab" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ActiveFilters from './active-filters.vue';
import TabNavigation from './tab-navigation.vue';
import TabBody from './tab-body.vue';
import { TrackingPromise } from '@/models/promise';
import { Filter, FilterType } from '@/models/filter';

export default Vue.extend({
  name: 'PromiseOverview',
  components: { TabBody, TabNavigation, ActiveFilters },
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
  data() {
    return {
      activeTab: FilterType.Status,
    };
  },
});
</script>
