<template>
  <div
    class="grid grid-cols-6 gap-4 p-4 sm:p-6 max-w-4xl bg-gray bg-opacity-10 rounded-xl"
  >
    <div class="col-span-6 sm:col-span-2">
      <h5 class="wv-h5 font-kondolar wv-font-bold">สำรวจคำสัญญา</h5>
      <h5 class="wv-h5 font-kondolar wv-font-bold pb-6">ตามพรรค</h5>
      <StatusLegend class="text-white" :showDetail="false" />
    </div>
    <div class="col-span-6 sm:col-span-4">
      <div class="flex flex-col gap-4">
        <span class="wv-h8 wv-font-kondolar wv-font-bold">
          ฝ่ายรัฐบาล {{ NCPOParty.length }} พรรค
        </span>
        <div class="flex flex-col gap-1">
          <PartyCard
            v-for="{ label, icon, data } in NCPOParty"
            :key="label"
            :partyLogo="icon"
            :partyName="label"
            :partyPromises="data"
            buttonUrl="explore"
          />
        </div>
        <span class="wv-h8 wv-font-kondolar wv-font-bold">
          ฝ่ายค้าน {{ nonNCPOParty.length }} พรรค
        </span>
        <div class="flex flex-col gap-1">
          <PartyCard
            v-for="{ label, icon, data } in nonNCPOParty"
            :key="label"
            :partyLogo="icon"
            :partyName="label"
            :partyPromises="data"
            buttonUrl="explore"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartyCard from '~/components/party/party-card.vue';
import StatusLegend from '@/components/explanation/status-legend.vue';
import { groupPromisesBy } from '@/components/explore/promise-overview/promises-aggregator';
import promises from '@/data/promises.json';
import { FilterType } from '@/models/filter';

export default {
  name: 'IndexPage',
  components: {
    PartyCard,
    StatusLegend,
  },
  data() {
    return {
      promises,
    };
  },
  computed: {
    NCPOParty() {
      const party = groupPromisesBy(FilterType.Party, this.promises, 50);
      return party.charts.filter((el) => el.isNCPO === true);
    },
    nonNCPOParty() {
      const party = groupPromisesBy(FilterType.Party, this.promises, 50);
      return party.charts.filter((el) => el.isNCPO === false);
    },
  },
};
</script>
