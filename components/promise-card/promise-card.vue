<template>
  <div :id="`promise-card-${promise.id}`">
    <SingleCard @readmore="handleReadClick($event)" :promise="promise" />
    <ExpandedCard :expanded="readMoreState" :promise="promise" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import SingleCard from './single-card.vue';
import ExpandedCard from './expanded-card.vue';
import { TrackingPromise } from '@/models/promise';

export default Vue.extend({
  name: 'PromiseCard',
  components: { SingleCard, ExpandedCard },
  data() {
    return {
      readMoreState: false,
    };
  },
  props: {
    promise: {
      type: Object as PropType<TrackingPromise>,
      default: () => ({}),
    },
  },
  methods: {
    handleReadClick(clickState: boolean) {
      this.readMoreState = clickState;
    },
  },
});
</script>
