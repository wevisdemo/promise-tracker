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
      <img
        v-else
        class="w-12"
        :src="`${$config.path.images}/dummy.jpg`"
        alt="Dummy Party Logo"
      />
    </div>
    <div>
      <div class="h11 wv-font-bold">{{ partyName }}</div>
      <div>
        <span id="promise-sum">{{ partyPromisesSum }}</span>
        <span> คำสัญญา</span>
      </div>
    </div>
    <div class="w-64">
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
      <Button theme="primary-blue">
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
    partyPromisesSum() {
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
      const obj = promiseStatus.map((a: any) => {
        const status = a.status;
        const countPercentage =
          (a.count / (this as any).partyPromisesSum) * 100;
        return { status, countPercentage };
      });
      return obj;
    },
  },
});
</script>

<style></style>
