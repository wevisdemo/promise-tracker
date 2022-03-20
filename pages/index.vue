<template>
  <div class="bg-gradient-to-b from-ultramarine to-black text-white">
    <div class="p-2 space-y-2">
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
      <StatusAnimation />
      <ScrollIcon class="text-white">ดูคำสัญญา</ScrollIcon>
      <LinkBanner
        theme="transparent-gray"
        iconImage="article/article.png"
        titleText="วิธีตรวจสอบคำสัญญา"
        bodyText="หากนัก/พรรคการเมืองที่ได้เข้าไปเป็น รัฐบาล แล้วไม่ทำตามสัญญา มีกระบวนการตรวจ สอบอย่างไรบ้าง"
        buttonText="อ่านเพิ่มเติม"
        buttonUrl="guide"
      />
      <LinkBanner
        theme="ultramarine"
        iconImage="article/explore.png"
        titleText="PROMISE TRACKER"
        bodyText="สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?"
        buttonText="ดูคำสัญญา"
        buttonUrl="explore"
      />
      <PartyPromise />
      <div class="grid grid-cols-1 gap-4">
        <StatusLegend
          class="text-white"
          :showDetail="false"
          :showInline="true"
        />
        <StatusLegend class="text-white" :showDetail="false" />
        <StatusLegend
          class="text-white"
          :showDetail="false"
          showOnly="ถูกระงับ"
        />
        <StatusLegend
          class="text-white"
          :showDetail="false"
          showOnly="สำเร็จ"
        />
      </div>
      <StatusExplanation />
      <ExplanationContainer title="ทวงสัญญากับฝ่ายค้านได้ด้วยเหรอ?">
        <img
          class="mb-4 sm:mr-8 sm:mb-0 w-28 sm:w-48"
          :src="`${$config.path.images}/topic/proposed.png`"
          alt="proposed"
        />
        <p class="wv-font-baijamjuri wv-b6 text-white">
          <span class="wv-font-bold"
            >บทบาทหลักของฝ่ายค้านในรัฐสภา คือการตรวจสอบการทำงานของรัฐบาล</span
          >
          และแม้จะเป็นการยากที่จะผลักดันเสียงของประชาชนด้วยเสียงข้างน้อย
          แต่เราก็อยากลองชวนทุกคนทบทวนดูว่า พวกเขาพยายามเพื่อเราแค่ไหน ดังนั้น
          สำหรับพรรคฝ่ายค้าน หากดำเนินการมาถึงขั้นตอน "เสนอต่อสภา" ขึ้นไป
          หรือใช้กลไกของสภา เช่น การอภิปราย การตั้งกระทู้ถาม นั่นแสดงให้เห็นว่า
          ฝ่ายค้านได้พยายามผลักดันให้คำสัญญานั้นได้เป็นที่รับรู้
          หรือเข้าสู่กระบวนการตามอำนาจหน้าที่ที่พวกเขาทำได้
        </p>
      </ExplanationContainer>
      <FormLink />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Button from '@/components/button.vue';
import LinkBanner from '@/components/link-banner.vue';
import StatusExplanation from '@/components/explanation/status-explanation.vue';
import StatusLegend from '@/components/explanation/status-legend.vue';
import ExplanationContainer from '@/components/explanation/explanation-container.vue';
import StatusAnimation from '@/components/status-animation.vue';
import ScrollIcon from '@/components/scroll-icon.vue';
import FormLink from '@/components/form-link.vue';
import PartyPromise from '~/components/party/party-promise.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Button,
    LinkBanner,
    StatusExplanation,
    StatusLegend,
    ExplanationContainer,
    StatusAnimation,
    ScrollIcon,
    FormLink,
    PartyPromise,
  },
});
</script>
