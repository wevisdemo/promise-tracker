<template>
  <div class="flex flex-row">{{ text }}</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Filter, FilterType } from '@/models/filter';
import {
  PromiseStatus,
  promiseStatusTextMap,
  PromiseTopic,
  promiseTopicTextMap,
} from '@/models/promise';

export default Vue.extend({
  name: 'FilterChips',
  props: {
    filter: {
      type: Object as PropType<Filter>,
      required: true,
    },
  },
  computed: {
    text() {
      const { type, value } = this.filter as Filter;

      switch (type) {
        case FilterType.Party:
          return value;
        case FilterType.Status:
          return `สถานะ: ${promiseStatusTextMap.get(value as PromiseStatus)}`;
        case FilterType.Keyword:
          return `คำค้นหา: ${value}`;
        case FilterType.Topic:
          return `ประเด็น${
            promiseTopicTextMap.get(value as PromiseTopic)?.short
          }`;
        default:
          return '';
      }
    },
  },
});
</script>
