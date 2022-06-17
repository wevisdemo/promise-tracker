<template>
  <div class="flex flex-row justify-center bg-black min-h-screen px-6 py-12">
    <div class="flex flex-row space-x-12">
      <div>
        <FilterPanel v-model="filters" class="w-80" />
      </div>

      <div class="w-full max-w-3xl flex flex-col items-center">
        <PromiseOverview
          :promises="filteredPromises"
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
                :promises="filteredPromises"
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
                :promises="filteredPromises"
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
import { PromiseTopic, PromiseStatus, TrackingPromise } from '@/models/promise';
import { Filter, FilterType } from '~/models/filter';

enum GroupBy {
  Topic = 'topic',
  Status = 'status',
}

const checkFilterOnPromise = (
  { type, value }: Filter,
  promise: TrackingPromise
): boolean => {
  switch (type) {
    case FilterType.Party:
      return promise.party === value;
    case FilterType.Status:
      return promise.status === value;
    case FilterType.Topic:
      return promise.topic === value;
    case FilterType.Keyword:
      return promise.title.includes(value);
    default:
      return false;
  }
};

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
      filters: [] as Filter[],
      filteredGroup: '',
      groupBy: GroupBy.Topic as GroupBy,
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
  computed: {
    filteredPromises(): TrackingPromise[] {
      return this.filters.length > 0
        ? (promises as TrackingPromise[]).filter((promise) =>
            this.filters.every((filter: Filter) =>
              checkFilterOnPromise(filter, promise)
            )
          )
        : (promises as TrackingPromise[]);
    },
  },
  methods: {
    setGroupFilter(group: PromiseTopic | PromiseStatus) {
      this.filteredGroup = group;
    },
  },
});
</script>
