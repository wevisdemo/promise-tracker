<template>
  <div
    class="flex flex-col bg-white max-w-2xl rounded-lg border-2 border-white overflow-hidden"
  >
    <div class="bg-status-done h-2 mb-3" />
    <div class="flex justify-between">
      <div>
        <div class="bg-gray bg-opacity-10 rounded w-max p-2 ml-3">
          <StatusLegend :show-detail="false" show-only="สำเร็จ" />
        </div>
        <h2 class="wv-h10 wv-font-kondolar wv-font-black px-3 py-4">
          เงินเดือนปริญญาตรี 20,000 บาท เงินเดือน อาชีวะ 18,000 บาท
        </h2>
        <div
          class="flex divide-x-2 divide-gray pb-4 wv-font-anuphan wv-u4 wv-font-bold"
        >
          <div class="flex px-3">
            <div class="w-4 mr-2">
              <img
                :src="`${$config.path.images}/party/dummy.jpg`"
                alt="dummy"
              />
            </div>
            <p>คุณภาพชีวิต</p>
          </div>
          <div class="flex px-3">
            <div class="w-4 mr-2">
              <img
                :src="`${$config.path.images}/party/dummy.jpg`"
                alt="dummy"
              />
            </div>
            <p>พรรคพลังประชารัฐ</p>
          </div>
        </div>
      </div>
      <div class="w-14 sm:w-16 md:w-20 flex-shrink-0 mr-3 mb-3">
        <img :src="`${$config.path.images}/party/dummy.jpg`" alt="dummy" />
      </div>
    </div>
    <div
      class="flex justify-between bg-black text-white wv-font-anuphan wv-u4 wv-font-bold px-1 py-2"
    >
      <div class="flex items-center">
        <p class="px-3">อ่านเพิ่มเติม</p>
        <button @click="onReadClick">
          <IconUp v-if="clicked" />
          <IconDown v-else />
        </button>
      </div>
      <div class="flex items-center">
        <p class="hidden sm:block">แชร์คำสัญญา</p>
        <WvSharer
          class="mr-3"
          label=" "
          :allow-copy-link="true"
          :light="true"
          :outline="true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import WvSharer from '@wevisdemo/ui/components/sharer.vue';
import IconDown from './icon-down.vue';
import IconUp from './icon-up.vue';
import StatusLegend from '@/components/explanation/status-legend.vue';

export default Vue.extend({
  name: 'SingleCard',
  components: { StatusLegend, WvSharer, IconDown, IconUp },
  props: {
    theme: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    onReadClick() {
      this.clicked = !this.clicked;
    },
  },
});
</script>
