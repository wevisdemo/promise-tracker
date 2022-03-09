<template>
  <div class="flex flex-row space-x-1 bg-white md:bg-transparent">
    <button
      v-for="{ label, type } in displayButtons"
      :key="type"
      :class="`wv-u4 wv-font-semibold text-white w-1/3 px-3 py-2 rounded-t border border-white ${
        activeTab === type ? 'bg-ultramarine border-b-0' : 'bg-black'
      }`"
      @click="$emit('change', type)"
    >
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Filter, FilterType } from '@/models/filter';

const buttons = [
  { label: 'ดูตามสถานะ', type: FilterType.Status },
  { label: 'ดูตามพรรค', type: FilterType.Party },
  { label: 'ดูตามประเด็น', type: FilterType.Topic },
];

export default Vue.extend({
  name: 'TabNavigation',
  props: {
    filters: {
      type: Array as PropType<Filter[]>,
      default: () => [],
    },
    activeTab: {
      type: String as PropType<FilterType>,
      default: null,
    },
  },
  computed: {
    displayButtons() {
      return buttons.filter(
        ({ type }) => !this.filters.find((filter) => filter.type === type)
      );
    },
  },
});
</script>
