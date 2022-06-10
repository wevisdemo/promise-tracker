<template>
  <button
    class="bg-white items-center py-2.5 px-2 wv-font-anuphan wv-u4"
    :class="optionClasses(option)"
    @click.stop="click"
  >
    <img
      v-if="option.iconUrl"
      class="w-5 h-5 rounded-full border border-gray border-opacity-10"
      :src="`${$config.path.images}${option.iconUrl}`"
    />
    <span>{{ option.label }}</span>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Option } from './dropdown-select.vue';

export default Vue.extend({
  name: 'DropdownItem',
  props: {
    option: {
      type: Object as PropType<Option>,
      default: undefined,
    },
  },
  methods: {
    optionClasses(option: Option) {
      if (option.isHeader) {
        return 'wv-font-semibold';
      }
      return 'flex space-x-2 cursor-pointer';
    },
    click() {
      if (this.option?.isHeader) {
        return;
      }
      this.$emit('click', this.option.value);
    },
  },
});
</script>
