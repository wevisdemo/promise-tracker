<template>
  <div class="flex flex-col space-y-1">
    <ToggleItem
      v-for="option in options"
      :key="option.label"
      :selected="option.label === selected"
      :option="option"
      @selected="handleSelected"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import ToggleItem from './toggle-item.vue';

export interface ListOption {
  label: string;
  colorClass?: string;
}

export default Vue.extend({
  name: 'ToggleList',
  components: { ToggleItem },
  props: {
    selected: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<ListOption[]>,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    handleSelected(label: string) {
      this.$emit('select', label);
    },
  },
});
</script>
