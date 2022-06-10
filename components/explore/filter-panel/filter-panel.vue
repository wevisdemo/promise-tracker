<template>
  <div class="flex flex-col p-5 bg-ultramarine space-y-2 wv-font-anuphan wv-u5">
    <p class="text-white wv-font-semibold">คัดกรองคำสัญญา</p>
    <DropdownSelect
      v-model="selectedParty"
      :options="partyOptions"
      placeholder="ทุกพรรคที่ให้คำสัญญา"
      placeholder-selecting="เลือกพรรค"
    />
    <DropdownSelect
      v-model="selectedTopic"
      :options="topicOptions"
      placeholder="ทุกประเด็นคำสัญญา"
      placeholder-selecting="เลือกประเด็น"
      :selected="selectedTopic"
    />

    <p class="text-white wv-font-semibold">เลือกดูคำสัญญาตามสถานะ</p>
    <ToggleList v-model="selectedStatus" :options="statusOptions" />

    <p class="text-white wv-font-semibold">ค้นหาตามคีย์เวิร์ด</p>
    <div class="flex flex-row p-1 rounded-sm bg-white space-x-1">
      <div class="bg-ultramarine rounded p-1.5">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0748 7.05784C11.0748 9.30714 9.25899 11.1157 7.0374 11.1157C4.8158 11.1157 3 9.30714 3 7.05784C3 4.80855 4.8158 3 7.0374 3C9.25899 3 11.0748 4.80855 11.0748 7.05784ZM10.81 13.0169C9.71969 13.7126 8.42547 14.1157 7.0374 14.1157C3.15075 14.1157 0 10.9558 0 7.05784C0 3.1599 3.15075 0 7.0374 0C10.924 0 14.0748 3.1599 14.0748 7.05784C14.0748 8.47643 13.6575 9.79727 12.9393 10.9036L17.5006 15.4967L15.3867 17.6254L10.81 13.0169Z"
            fill="white"
          />
        </svg>
      </div>
      <input
        v-model="keyword"
        class="flex-1 px-1"
        type="text"
        placeholder="พิมพ์คำเพื่อค้นหาสัญญา"
      />
    </div>
    <p class="text-white wv-font-semibold">
      พิมพ์คำ , โครงการ , ชื่อสัญญา เช่น เกษตร , โฉนด , เงินเดือนปริญญาตรี
      20,000
    </p>
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

const ALL_STATUS_VALUE = 'all';

const [governmentParties, oppositionParties] = parties.reduce<
  [Option[], Option[]]
>(
  ([government, opposition], { side, name }) => {
    const option: Option = {
      value: name,
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
        value: topic,
        label: promiseTopicTextMap.get(topic)?.short,
        iconUrl: `/topic/${topic}_small.png`,
      })) as Option[],
      statusOptions: [
        {
          value: ALL_STATUS_VALUE,
          label: 'ทุกสถานะคำสัญญา',
        },
        ...promiseStatusOrder.map((status) => ({
          value: status,
          label: promiseStatusTextMap.get(status),
          colorClass: `bg-status-${status}`,
        })),
      ] as ListOption[],
      selectedParty: '',
      selectedTopic: '',
      selectedStatus: ALL_STATUS_VALUE,
      keyword: '',
    };
  },
});
</script>
