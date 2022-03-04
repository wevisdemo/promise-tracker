<template>
  <div
    class="flex flex-col bg-white w-max p-4 rounded-lg sm:flex-row items-center gap-4"
  >
    <div>
      <img
        v-if="partyLogo"
        class="w-12"
        :src="`${$config.path.images}/${partyLogo}`"
        :alt="partyName"
      />
    </div>
    <div>
      <div class="h11 wv-font-bold">{{ partyName }}</div>
      <div class="party-promises">{{ `${partyPromisesSum} คำสัญญา` }}</div>
    </div>
    <div class="w-64">
      <span class="flex h-4 overflow-hidden">
        <span
          v-for="(item, i) in promises"
          :key="i"
          :style="`width:${item}%;background-color:${bgColor[i]}`"
        ></span>
      </span>
    </div>
    <div>
      <Button theme="primary-blue">
        <NuxtLink :to="buttonUrl">ดูคำสัญญา</NuxtLink>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { PromiseStatus } from '@/models/promise';

export default Vue.extend({
  name: 'PartyCard',
  props: {
    partyLogo: {
      type: String,
      default: '',
      required: false,
    },
    partyName: {
      type: String,
      default: '',
    },
    partyPromises: {
      type: Array as PropType<PromiseStatus[]>,
      default: () => [],
    },
    buttonUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      bgColor: ['#8f8f8f', '#fd9154', '#e91e63', '#f4c51f', '#48dbdb'],
    };
  },
  computed: {
    partyPromisesSum() {
      const promiseStatus = this.partyPromises as PromiseStatus[];
      let sum = '';
      promiseStatus.forEach((el) => {
        sum = Object.values(el).reduce((a, b) => a + b);
      });
      return sum;
    },
    promises() {
      const promiseStatus = this.partyPromises as PromiseStatus[];
      const obj = promiseStatus[0];
      if (typeof obj === 'object') {
        const promises = Object.values(obj);
        const percentage = promises.map(
          (num) => (Number(num) / Number((this as any).partyPromisesSum)) * 100
        );
        return percentage;
      } else {
        return {};
      }
    },
  },
});
</script>

<style></style>
