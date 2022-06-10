<template>
  <div class="flex flex-col p-5 bg-ultramarine space-y-2">
    <p class="text-white wv-font-anuphan wv-font-semibold wv-u5">
      คัดกรองคำสัญญา
    </p>
    <DropdownSelect
      :options="partyOptions"
      :placeholder="'ทุกพรรคที่ให้คำสัญญา'"
      :placeholder-selecting="'เลือกพรรค'"
      :selected="selectedParty"
      @select="selectParty($event)"
    />
    <DropdownSelect
      :options="topicOptions"
      :placeholder="'ทุกประเด็นคำสัญญา'"
      :placeholder-selecting="'เลือกประเด็น'"
      :selected="selectedTopic"
      @select="selectTopic($event)"
    />
    <p class="text-white wv-font-anuphan wv-font-semibold wv-u5">
      เลือกดูคำสัญญาตามสถานะ
    </p>
    <ToggleList
      :options="statusOptions"
      :selected="selectedStatus"
      @select="selectStatus($event)"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import DropdownSelect, {
  Option,
} from '@/components/dropdown-select/dropdown-select.vue';
import ToggleList, { ListOption } from '@/components/toggle/toggle-list.vue';
import { Filter } from '@/models/filter';
import parties from '@/data/parties.json';
import {
  promiseStatusOrder,
  promiseStatusTextMap,
  promiseTopicOrder,
  promiseTopicTextMap,
} from '~/models/promise';

const [governmentParties, oppositionParties] = parties.reduce<
  [Option[], Option[]]
>(
  ([government, opposition], { side, name }) => {
    const option: Option = {
      label: name,
      iconUrl: `/party/${name}.jpg`,
    };

    return side === 'government'
      ? [[...government, option], opposition]
      : [government, [...opposition, option]];
  },
  [[], []]
);

export default Vue.extend({
  name: 'FilterPanel',
  components: { DropdownSelect, ToggleList },
  props: {
    filters: {
      type: Array as PropType<Filter[]>,
      default: () => [],
    },
  },
  data() {
    return {
      partyOptions: [
        {
          isHeader: true,
          label: 'พรรคร่วมรัฐบาล',
        },
        ...governmentParties.sort((a, z) => a.label.localeCompare(z.label)),
        {
          isHeader: true,
          label: 'พรรคฝ่ายค้าน',
        },
        ...oppositionParties.sort((a, z) => a.label.localeCompare(z.label)),
      ] as Option[],
      topicOptions: promiseTopicOrder.map((topic) => ({
        label: promiseTopicTextMap.get(topic)?.short,
        iconUrl: `/topic/${topic}_small.png`,
      })) as Option[],
      statusOptions: [
        {
          label: 'ทุกสถานะคำสัญญา',
        },
        ...promiseStatusOrder.map((status) => ({
          label: promiseStatusTextMap.get(status),
          colorClass: `bg-status-${status}`,
        })),
      ] as ListOption[],
      selectedParty: '',
      selectedTopic: '',
      selectedStatus: 'ทุกสถานะคำสัญญา',
    };
  },
  computed: {},
  methods: {
    selectParty(optionLabel: string) {
      this.selectedParty = optionLabel;
    },
    selectTopic(optionLabel: string) {
      this.selectedTopic = optionLabel;
    },
    selectStatus(toggleItemLabel: string) {
      this.selectedStatus = toggleItemLabel;
    },
  },
});
</script>
