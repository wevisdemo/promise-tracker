<template>
  <div class="flex flex-col items-center">
    <BoxContainer class="ultramarine-box">
      <p class="wv-u5 wv-font-anuphan">3 เมษายน - 15 พฤษภาคม 2559</p>
      <p class="wv-b5 wv-font-baijamjuri">เริ่มแจกบัตรสวัสดิการแห่งรัฐ</p>
    </BoxContainer>
    <TimelineArrow class="p-2" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BoxContainer from './box-container.vue';
import TimelineArrow from './timeline-arrow.vue';

export default Vue.extend({
  name: 'Timeline',
  components: { BoxContainer, TimelineArrow },
});
</script>
