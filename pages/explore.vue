<template>
  <div class="bg-black min-h-screen">
    <h1>Explore</h1>
    <div class="max-w-screen-lg mx-auto">
      <PromiseOverview :promises="promises" :filters="[]" />
    </div>
    <div class="bg-gray">
      <PromiseCard
        v-for="promise in promises.slice(93, 96)"
        :key="`promise-card-${promise.id}`"
        class="pb-2"
        :openState="false"
        :promise="promise"
      />
    </div>
    <div class="bg-black">
      <PromiseCard
        v-for="promise in promises.slice(96, 97)"
        :key="`promise-card-${promise.id}`"
        class="pb-2"
        :openState="true"
        :promise="promise"
      />
    </div>
    <div class="bg-gray">
      <div v-for="topic in topics" :key="`topic-${topic}`">
        <TopicGroup
          v-if="filteredTopic === '' || filteredTopic === topic"
          :topic="topic"
          :promises="promises"
          :promisePerPage="filteredTopic === topic ? 0 : 3"
          @viewTopic="setTopicFilter($event)"
        />
      </div>
      <button class="border border-black p-2 mt-2" @click="filteredTopic = ''">
        Remove Topic Filter: {{ filteredTopic }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PromiseOverview from '@/components/explore/promise-overview/promise-overview.vue';
import promises from '@/data/promises.json';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import TopicGroup from '@/components/explore/topic-group/topic-group.vue';
import { PromiseTopic } from '@/models/promise';

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    PromiseOverview,
    PromiseCard,
    TopicGroup,
  },
  data() {
    return {
      promises,
      PromiseTopic,
      topics: [
        PromiseTopic.Equality,
        PromiseTopic.Security,
        PromiseTopic.Foreign,
        PromiseTopic.Administration,
        PromiseTopic.Culture,
        PromiseTopic.Economics,
        PromiseTopic.Environmental,
      ],
      filteredTopic: '',
    };
  },
  methods: {
    setTopicFilter(topic: PromiseTopic) {
      this.filteredTopic = topic;
    },
  },
});
</script>
