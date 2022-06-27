<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center text-white px-6">
      <div class="gradient-background" />
      <Landing />
      <div class="mt-10 mb-16 space-y-8 px-2">
        <StatusExplanation />
        <PartyPromise />
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
            หรือใช้กลไกของสภา เช่น การอภิปราย การตั้งกระทู้ถาม
            นั่นแสดงให้เห็นว่า
            ฝ่ายค้านได้พยายามผลักดันให้คำสัญญานั้นได้เป็นที่รับรู้
            หรือเข้าสู่กระบวนการตามอำนาจหน้าที่ที่พวกเขาทำได้
          </p>
        </ExplanationContainer>
        <LinkBanner
          theme="transparent-gray"
          icon-image="article/article.png"
          title-text="วิธีตรวจสอบคำสัญญา"
          body-text="หากนัก/พรรคการเมืองที่ได้เข้าไปเป็น รัฐบาล แล้วไม่ทำตามสัญญา มีกระบวนการตรวจ สอบอย่างไรบ้าง"
          button-text="อ่านเพิ่มเติม"
          button-url="guide"
        />
        <div>
          <FormLink />
        </div>
      </div>
    </div>
    <NuxtLink
      to="explore"
      class="w-full h-20 flex flex-row items-center justify-center px-4 py-2 wv-u4 wv-font-bold space-x-2 border-b bg-ultramarine text-white hover:bg-white hover:text-ultramarine"
    >
      <span>ดูคำสัญญา</span>
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
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Landing from '@/components/landing.vue';
import LinkBanner from '@/components/link-banner.vue';
import StatusExplanation from '@/components/explanation/status-explanation.vue';
import ExplanationContainer from '@/components/explanation/explanation-container.vue';
import FormLink from '@/components/form-link.vue';
import PartyPromise from '~/components/party/party-promise.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Landing,
    LinkBanner,
    StatusExplanation,
    ExplanationContainer,
    FormLink,
    PartyPromise,
  },
});
</script>

<style scoped>
.gradient-background {
  z-index: -5;
  @apply w-screen h-screen fixed top-0 bg-gradient-to-b from-ultramarine to-black;
}
</style>
