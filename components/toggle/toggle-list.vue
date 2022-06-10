<template>
  <div class="flex flex-col space-y-1">
    <ToggleItem
      v-for="option in options"
      :key="option.value"
      :selected="option.value === value"
      :option="option"
      @selected="$emit('input', option.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ToggleItem from './toggle-item.vue';

export interface ListOption {
  label: string;
  value: string;
  colorClass?: string;
}

export default Vue.extend({
  name: 'ToggleList',
  components: { ToggleItem },
  props: {
    value: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<ListOption[]>,
      default: () => [],
    },
  },
});
</script>
