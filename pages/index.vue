<template>
  <div class="flex flex-col items-center text-white sm:px-6">
    <div class="gradient-background" />
    <Landing />
    <div class="bg-ultramarine w-screen z-30 h-20 fixed bottom-0">
      <NuxtLink to="explore">
        <ScrollIcon class="text-white">ดูคำสัญญา</ScrollIcon>
      </NuxtLink>
    </div>
    <div class="mt-6 mb-10 space-y-8 px-2">
      <StatusExplanation />
      <PartyPromise />
      <!-- <div class="grid grid-cols-1 gap-4">
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
      </div> -->
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
      <LinkBanner
        theme="transparent-gray"
        iconImage="article/article.png"
        titleText="วิธีตรวจสอบคำสัญญา"
        bodyText="หากนัก/พรรคการเมืองที่ได้เข้าไปเป็น รัฐบาล แล้วไม่ทำตามสัญญา มีกระบวนการตรวจ สอบอย่างไรบ้าง"
        buttonText="อ่านเพิ่มเติม"
        buttonUrl="guide"
      />
      <FormLink />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Landing from '@/components/landing.vue';
import LinkBanner from '@/components/link-banner.vue';
import StatusExplanation from '@/components/explanation/status-explanation.vue';
import ExplanationContainer from '@/components/explanation/explanation-container.vue';
import ScrollIcon from '@/components/scroll-icon.vue';
import FormLink from '@/components/form-link.vue';
import PartyPromise from '~/components/party/party-promise.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Landing,
    LinkBanner,
    StatusExplanation,
    ExplanationContainer,
    ScrollIcon,
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
