<template>
  <div>
    <h1>Index</h1>

    <div class="p-2 bg-gray space-y-2">
      <Button
        ><span>primary-white (default)</span>
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
      <Button theme="primary-blue"
        ><span>primary-blue</span>
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
      <Button theme="secondary-white">secondary-white</Button>
      <Button theme="secondary-blue">secondary-blue</Button>
      <LinkBanner
        theme="transparent-gray"
        iconImage="topic/culture_small.png"
        titleText="วิธีตรวจสอบคำสัญญา"
        bodyText="หากนัก/พรรคการเมืองที่ได้เข้าไปเป็น รัฐบาล แล้วไม่ทำตามสัญญา มีกระบวนการตรวจ สอบอย่างไรบ้าง"
        buttonText="อ่านเพิ่มเติม"
        buttonUrl="guide"
      />
      <LinkBanner
        theme="ultramarine"
        iconImage="topic/culture_small.png"
        titleText="PROMISE TRACKER"
        bodyText="สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?"
        buttonText="ดูคำสัญญา"
        buttonUrl="explore"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '../components/button.vue';
import LinkBanner from '../components/link-banner.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: { Button, LinkBanner },
});
</script>
