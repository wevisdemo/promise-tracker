<template>
  <div
    class="flex flex-col bg-white w-max px-4 py-3 rounded-sm items-center sm:flex-row gap-6"
  >
    <div class="flex gap-1">
      <img
        v-if="partyLogo"
        class="w-9 h-9 rounded shadow"
        :src="`${$config.path.images}/${partyLogo}`"
        :alt="partyName"
      />
      <img
        v-else
        class="w-9 h-9 rounded shadow"
        :src="`${$config.path.images}/party/dummy.jpg`"
        alt="Dummy Party Logo"
      />
      <div class="w-40">
        <div class="h11 wv-font-black">{{ partyName }}</div>
        <div>
          <span id="promise-sum">{{ sumPartyPromises }}</span>
          <span> คำสัญญา</span>
        </div>
      </div>
    </div>
    <div class="w-44">
      <span class="flex h-4 overflow-hidden">
        <span
          v-for="(item, i) in promises"
          :key="i"
          :style="`width:${item.countPercentage}%;`"
          :class="`bg-status-${bgColor[i]}`"
          :title="item.status"
        ></span>
      </span>
    </div>
    <div>
      <Button theme="primary-blue" class="h-10">
        <NuxtLink :to="buttonUrl">ดูคำสัญญา</NuxtLink>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-2.26862e-07 6.74994L-2.92429e-07 5.24994L9 5.24994L4.875 1.12494L5.94 0.0599401L11.88 5.99994L5.94 11.9399L4.875 10.8749L9 6.74994L-2.26862e-07 6.74994Z"
          />
        </svg>
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
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
      type: Array,
      default: () => [],
    },
    buttonUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      bgColor: ['nodata', 'proposed', 'paused', 'working', 'done'],
    };
  },
  computed: {
    sumPartyPromises() {
      const promiseStatus = this.partyPromises as Array<any>;
      const count = promiseStatus.map((a: any) => a.count);
      if (count.length > 0) {
        const sum = count.reduce((a: any, b: any) => a + b);
        return sum;
      } else {
        return 0;
      }
    },
    promises() {
      const promiseStatus = this.partyPromises as Array<any>;
      if (promiseStatus.length > 0) {
        const chart = promiseStatus.map((a: any) => {
          const status = a.status;
          const countPercentage = (
            (a.count / (this as any).sumPartyPromises) *
            100
          ).toFixed(2);
          return { status, countPercentage };
        });
        return chart;
      } else {
        const dummy = [
          { status: PromiseStatus.NoData, countPercentage: '100' },
        ];
        return dummy;
      }
    },
  },
});
</script>

<style></style>
