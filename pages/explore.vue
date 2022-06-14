<template>
  <div class="flex flex-row justify-center bg-black min-h-screen px-6 py-12">
    <div class="flex flex-row space-x-12">
      <div>
        <FilterPanel v-model="filters" class="w-80" />
      </div>

      <div class="w-full max-w-3xl flex flex-col items-center">
        <PromiseOverview
          :promises="promises"
          :filters="filters"
          class="max-w-screen-lg mx-auto"
        />

        <ToggleList
          v-model="groupBy"
          :options="groupByOptions"
          align="horizontal"
          class="my-6"
        />

        <div class="px-6">
          <template v-if="groupBy === 'topic'">
            <div v-for="topic in topics" :key="`topic-${topic}`">
              <TopicGroup
                v-if="filteredGroup === '' || filteredGroup === topic"
                :topic="topic"
                :promises="promises"
                :promise-per-page="filteredGroup === topic ? 0 : 3"
                @viewGroup="setGroupFilter($event)"
              />
            </div>
          </template>
          <template v-else>
            <div v-for="status in statuses" :key="`group-${status}`">
              <TopicGroup
                v-if="filteredGroup === '' || filteredGroup === status"
                :status="status"
                :promises="promises"
                :promise-per-page="filteredGroup === status ? 0 : 3"
                @viewGroup="setGroupFilter($event)"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PromiseOverview from '@/components/explore/promise-overview/promise-overview.vue';
import promises from '@/data/promises.json';
import TopicGroup from '@/components/explore/topic-group/topic-group.vue';
import FilterPanel from '@/components/explore/filter-panel/filter-panel.vue';
import ToggleList, { ListOption } from '@/components/toggle/toggle-list.vue';
import { PromiseTopic, PromiseStatus } from '@/models/promise';
import { Filter } from '~/models/filter';

enum GroupBy {
  Topic = 'topic',
  Status = 'status',
}

export default Vue.extend({
  name: 'ExplorePage',
  components: {
    PromiseOverview,
    TopicGroup,
    FilterPanel,
    ToggleList,
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
      groupBy: GroupBy.Topic as GroupBy,
      filteredGroup: '',
      filters: [] as Filter[],
      groupByOptions: [
        {
          label: 'ตามประเด็น',
          value: GroupBy.Topic,
        },
        {
          label: 'ตามสถานะ',
          value: GroupBy.Status,
        },
      ] as ListOption[],
    };
  },
  methods: {
    setGroupFilter(group: PromiseTopic | PromiseStatus) {
      this.filteredGroup = group;
    },
  },
});
</script>
