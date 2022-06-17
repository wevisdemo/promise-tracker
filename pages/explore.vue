<template>
  <div
    class="flex flex-row justify-center bg-black min-h-screen px-3 py-6 md:py-12"
  >
    <div class="relative flex flex-row w-full max-w-7xl">
      <FilterPanel v-model="filters" />

      <div class="w-full flex-1 flex flex-col items-center">
        <PromiseOverview
          :promises="filteredPromises"
          :filters="filters"
          class="max-w-screen-lg mx-auto"
          @removefilter="removeFilter($event)"
        />

        <ToggleList
          v-model="groupBy"
          :options="groupByOptions"
          align="horizontal"
          class="my-8"
        />

        <div class="w-full flex flex-col md:px-6">
          <TopicGroup
            v-for="group in groupBy === 'topic' ? topics : statuses"
            :key="`${groupBy}-${group}`"
            class=""
            :topic="groupBy === 'topic' ? group : undefined"
            :status="groupBy === 'status' ? group : undefined"
            :promises="filteredPromises"
            :promise-per-page="
              filters.find(({ type }) => type === groupBy) ? 0 : 3
            "
            @viewGroup="setGroupFilter(groupBy, group)"
          />
        </div>
      </div>

      <Button
        class="fixed md:sticky self-end top-3 md:bottom-4 right-3"
        @click="scrollToTop"
      >
        <div class="flex flex-row -mx-2 -my-1 md:m-0">
          <span class="hidden md:block mr-1">กลับด้านบน</span
          ><svg width="18" height="18" viewBox="0 0 18 18" class="fill-current">
            <path
              d="M9.74994 15L8.24994 15L8.24994 6L4.12494 10.125L3.05994 9.06L8.99994 3.12L14.9399 9.06L13.8749 10.125L9.74994 6L9.74994 15Z"
            />
          </svg>
        </div>
      </Button>
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
import Button from '@/components/button.vue';
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
    Button,
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
  watch: {
    filters(filters: Filter[]) {
      const query = filters.reduce(
        (q, { type, value }) => ({ ...q, [type]: value }),
        {}
      );

      this.$router.push({ query });
      this.scrollToTop();
    },
  },
  mounted() {
    this.filters = Object.entries(this.$router.currentRoute.query).map(
      ([type, value]) => ({ type, value } as Filter)
    );
  },
  methods: {
    removeFilter(filter: Filter) {
      this.filters = this.filters.filter(({ type }) => filter.type !== type);
    },
    setGroupFilter(
      type: FilterType.Status | FilterType.Topic,
      value: PromiseStatus | PromiseTopic
    ) {
      const existingFilter = this.filters.find(
        (filter) => filter.type === type
      );

      if (existingFilter?.value === value) return;

      this.filters = existingFilter
        ? this.filters.map((filter) =>
            filter.value === value ? ({ type, value } as Filter) : filter
          )
        : [...this.filters, { type, value } as Filter];
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
});
</script>
