<template>
  <div>
    <div
      class="blog-bg"
      :style="{
        backgroundImage: `url(${$config.path.images}/background/blog_bg.png)`,
      }"
    />
    <div class="flex flex-col items-center z-10">
      <div class="blog-header wv-font-kondolar wv-h10">
        <img
          class="w-16 h-16 mr-3"
          :src="`${$config.path.images}/status/default.png`"
          alt="promise-logo"
        />
        <div>
          <h1 class="wv-font-bold">PROMISE TRACKER</h1>
          <h2>สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?</h2>
        </div>
      </div>
      <div
        class="mt-10 sm:mt-20 grid gap-6 max-w-4xl justify-items-center px-2 sm:px-6"
      >
        <PromiseCard
          v-if="promise"
          class="shadow-2xl"
          :openState="true"
          :promise="promise"
        />
        <LinkBanner
          theme="ultramarine"
          iconImage="article/explore.png"
          titleText="PROMISE TRACKER"
          bodyText="สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน ?"
          buttonText="ดูคำสัญญา"
          buttonUrl="explore"
        />
        <LinkBanner
          theme="ultramarine"
          iconImage="article/article.png"
          titleText="วิธีตรวจสอบคำสัญญา"
          bodyText="หากนัก/พรรคการเมืองที่ได้เข้าไปเป็น รัฐบาล แล้วไม่ทำตามสัญญา มีกระบวนการตรวจ สอบอย่างไรบ้าง"
          buttonText="อ่านเพิ่มเติม"
          buttonUrl="guide"
        />
        <div class="mb-6 w-full">
          <Button class="w-full justify-center"
            ><span>แจ้งคำสัญญาที่อยากให้ติดตามเพิ่มเติม</span>
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import promises from '@/data/promises.json';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import LinkBanner from '@/components/link-banner.vue';
import Button from '@/components/button.vue';
import { PromiseStatus, TrackingPromise } from '@/models/promise';

export default Vue.extend({
  name: 'PromisePage',
  components: {
    PromiseCard,
    LinkBanner,
    Button,
  },
  data() {
    return {
      slug: this.$route.params,
    };
  },
  head(): {} {
    return {
      title: this.promiseStatusInfo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.promiseStatusInfo.description,
        },
        {
          property: 'og:title',
          content: this.promiseStatusInfo.title,
        },
        {
          property: 'og:description',
          content: this.promiseStatusInfo.description,
        },
        {
          property: 'og:image',
          content: this.promiseStatusInfo.image,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    };
  },
  computed: {
    id(): number {
      return parseInt(this.slug.id, 10);
    },
    promise(): TrackingPromise | {} {
      return this.matchedPromise(this.id);
    },
    promiseStatusInfo() {
      const baseImageUrl = `https://raw.githubusercontent.com/wevisdemo/promise-tracker/main/static/og`;
      if (this.promise) {
        const promise = this.promise as TrackingPromise;
        const titleInfo = `โครงการ${promise.title} โดยพรรค${promise.party}`;
        switch (promise.status as PromiseStatus) {
          case PromiseStatus.Proposed:
            return {
              title: `${titleInfo} ถูกเสนอต่อสภาแล้ว`,
              description: `คำสัญญานี้ถูกเสนอต่อสภา ร่วมจับตา รอดูผล ของคำสัญญานี้...ว่าได้ไปต่อไหม ?`,
              image: `${baseImageUrl}/${promise.status}.jpg`,
            };
          case PromiseStatus.Paused:
            return {
              title: `${titleInfo} ถูกระงับ`,
              description: `น่าเศร้า !! คำสัญญานี้ถูกระงับไว้ ร่วมแชร์ให้คำสัญญาได้ไปต่อกัน`,
              image: `${baseImageUrl}/${promise.status}.jpg`,
            };
          case PromiseStatus.Working:
            return {
              title: `${titleInfo} กำลังดำเนินการ`,
              description: `คำสัญญานี้กำลังดำเนินการอยู่ บอกต่อให้ทุกคนมาลุ้นไปพร้อมๆกันว่าใกล้แล้ว!!`,
              image: `${baseImageUrl}/${promise.status}.jpg`,
            };
          case PromiseStatus.Done:
            return {
              title: `${titleInfo} สำเร็จแล้ว`,
              description: `คำสัญญานี้ทำได้สำเร็จ บอกต่อให้ทุกคนดู นี่คือคำสัญญาที่พูดแล้วทำจริง!!`,
              image: `${baseImageUrl}/${promise.status}.jpg`,
            };
          case PromiseStatus.NoData:
          default:
            return {
              title: `${titleInfo} ยังไม่พบข้อมูล`,
              description: `คำสัญญานี้ยังไม่พบข้อมูล ขอ(ทวง)ถามพรรคการเมืองถึงข้อมูลและการดำเนินการเกี่ยวกับคำสัญญานี้`,
              image: `${baseImageUrl}/${promise.status}.jpg`,
            };
        }
      } else {
        return {
          title: `Promise Tracker แพลตฟอร์มสำรวจคำสัญญาต่างๆของผู้นำ พรรคการเมือง ที่ให้คำสัญญาไว้`,
          description: `สำรวจ รับรู้ ร่วมติดตาม ให้พรรคการเมืองทำตามคำสัญญาที่ให้ไว้กับเรา`,
          image: `${baseImageUrl}/default.jpg`,
        };
      }
    },
  },
  methods: {
    matchedPromise(id: number) {
      return promises.filter((promise) => promise.id === id)[0];
    },
  },
});
</script>

<style scoped>
.blog-bg {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  z-index: -1;
  position: sticky;
  top: 0;
  margin-top: -100vh;
}
.blog-header {
  @apply flex justify-center items-center bg-gradient-to-b from-ultramarine to-transparent text-white w-screen h-28 p-4;
}
</style>
