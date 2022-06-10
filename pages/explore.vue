<template>
  <div class="bg-black min-h-screen">
    <h1>Explore</h1>
    <div class="max-w-screen-lg mx-auto">
      <PromiseOverview :promises="promises" :filters="filters" />
    </div>

    <div class="bg-status-done">
      <button class="border border-black p-2 mt-2" @click="groupBy = 'topic'">
        ตามประเด็น
      </button>
      <button class="border border-black p-2 mt-2" @click="groupBy = 'status'">
        ตามสถานะ
      </button>
      {{ groupBy }}
    </div>

    <div>
      <FilterPanel v-model="filters" />
    </div>

    <div v-if="groupBy === 'topic'" class="bg-gray">
      <div v-for="topic in topics" :key="`topic-${topic}`">
        <TopicGroup
          v-if="filteredGroup === '' || filteredGroup === topic"
          :topic="topic"
          :promises="promises"
          :promise-per-page="filteredGroup === topic ? 0 : 3"
          @viewGroup="setGroupFilter($event)"
        />
      </div>
    </div>
    <div v-else class="bg-gray">
      <div v-for="status in statuses" :key="`group-${status}`">
        <TopicGroup
          v-if="filteredGroup === '' || filteredGroup === status"
          :status="status"
          :promises="promises"
          :promise-per-page="filteredGroup === status ? 0 : 3"
          @viewGroup="setGroupFilter($event)"
        />
      </div>
    </div>
    <button
      class="border bg-white border-black p-2 mt-2"
      @click="filteredGroup = ''"
    >
      Remove Group Filter: {{ filteredGroup }}
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PromiseOverview from '@/components/explore/promise-overview/promise-overview.vue';
import promises from '@/data/promises.json';
import TopicGroup from '@/components/explore/topic-group/topic-group.vue';
import FilterPanel from '@/components/explore/filter-panel/filter-panel.vue';
import { PromiseTopic, PromiseStatus } from '@/models/promise';
import { Filter } from '~/models/filter';

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    PromiseOverview,
    TopicGroup,
    FilterPanel,
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
      statuses: [
        PromiseStatus.NoData,
        PromiseStatus.Proposed,
        PromiseStatus.Paused,
        PromiseStatus.Working,
        PromiseStatus.Done,
      ],
      groupBy: 'topic',
      filteredGroup: '',
      filters: [] as Filter[],
    };
  },
  methods: {
    setGroupFilter(group: PromiseTopic | PromiseStatus) {
      this.filteredGroup = group;
    },
  },
});
</script>
