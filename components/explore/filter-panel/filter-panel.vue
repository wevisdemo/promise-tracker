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
        {
          label: 'พลังประชารัฐ',
          iconUrl: '/party/พลังประชารัฐ.jpg',
        },
      ] as Option[],
      topicOptions: [
        {
          label: 'ความเท่าเทียม/คุณภาพชีวิต',
          iconUrl: '/topic/equality_small.png',
        },
      ] as Option[],
      statusOptions: [
        {
          label: 'ทุกสถานะคำสัญญา',
        },
        {
          label: 'ไม่พบข้อมูล',
          color: '#8F8F8F',
        },
        {
          label: 'ถูกเสนอต่อสภา',
          color: '#FD9154',
        },
        {
          label: 'ถูกระงับไว้ก่อน',
          color: '#E91E63',
        },
        {
          label: 'กำลังดำเนินการ',
          color: '#F4C51F',
        },
        {
          label: 'สำเร็จ',
          color: '#48DBDB',
        },
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
