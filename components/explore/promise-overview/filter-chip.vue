<template>
  <div class="flex flex-row">
    <span>{{ text }}</span>
    <button @click="$emit('remove')">
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.836 4.66422C13.8884 4.71647 13.9299 4.77854 13.9583 4.84688C13.9866 4.91522 14.0012 4.98848 14.0012 5.06247C14.0012 5.13646 13.9866 5.20972 13.9583 5.27806C13.9299 5.34639 13.8884 5.40847 13.836 5.46072L5.96097 13.3357C5.85535 13.4413 5.7121 13.5007 5.56272 13.5007C5.41335 13.5007 5.27009 13.4413 5.16447 13.3357C5.05885 13.2301 4.99951 13.0868 4.99951 12.9375C4.99951 12.7881 5.05885 12.6448 5.16447 12.5392L13.0395 4.66422C13.0917 4.61183 13.1538 4.57027 13.2221 4.54192C13.2905 4.51356 13.3637 4.49896 13.4377 4.49896C13.5117 4.49896 13.585 4.51356 13.6533 4.54192C13.7216 4.57027 13.7837 4.61183 13.836 4.66422Z"
          fill="#3904E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.16428 4.66422C5.1119 4.71647 5.07033 4.77854 5.04198 4.84688C5.01362 4.91522 4.99902 4.98848 4.99902 5.06247C4.99902 5.13646 5.01362 5.20972 5.04198 5.27806C5.07033 5.34639 5.1119 5.40847 5.16428 5.46072L13.0393 13.3357C13.1449 13.4413 13.2882 13.5007 13.4375 13.5007C13.5869 13.5007 13.7302 13.4413 13.8358 13.3357C13.9414 13.2301 14.0007 13.0868 14.0007 12.9375C14.0007 12.7881 13.9414 12.6448 13.8358 12.5392L5.96078 4.66422C5.90853 4.61183 5.84646 4.57027 5.77812 4.54192C5.70978 4.51356 5.63652 4.49896 5.56253 4.49896C5.48854 4.49896 5.41528 4.51356 5.34694 4.54192C5.2786 4.57027 5.21653 4.61183 5.16428 4.66422V4.66422Z"
          fill="#3904E9"
        />
      </svg>
    </button>
  </div>
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
