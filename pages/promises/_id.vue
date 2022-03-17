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
        <FormLink />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
  matchedPromise,
  titleText,
  descriptionMap,
  imageUrl,
} from './meta-utils';
import promises from '@/data/promises.json';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import LinkBanner from '@/components/link-banner.vue';
import FormLink from '@/components/form-link.vue';
import { PromiseStatus, TrackingPromise } from '@/models/promise';

export default Vue.extend({
  name: 'PromisePage',
  components: {
    PromiseCard,
    LinkBanner,
    FormLink,
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
          hid: 'og-title',
          property: 'og:title',
          content: this.promiseStatusInfo.title,
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.promiseStatusInfo.description,
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: this.promiseStatusInfo.image,
        },
      ],
    };
  },
  computed: {
    id(): number {
      return parseInt(this.slug.id, 10);
    },
    promise(): TrackingPromise | {} {
      return matchedPromise(promises as TrackingPromise[], this.id);
    },
    promiseStatusInfo() {
      const baseImageUrl = `https://raw.githubusercontent.com/wevisdemo/promise-tracker/main/static/og`;
      if (this.promise) {
        const promise = this.promise as TrackingPromise;
        return {
          title: titleText(promise.title, promise.party, promise.status),
          description: descriptionMap.get(promise.status as PromiseStatus),
          image: imageUrl(baseImageUrl, promise.status),
        };
      } else {
        return {
          title: `Promise Tracker แพลตฟอร์มสำรวจคำสัญญาต่างๆของผู้นำ พรรคการเมือง ที่ให้คำสัญญาไว้`,
          description: `สำรวจ รับรู้ ร่วมติดตาม ให้พรรคการเมืองทำตามคำสัญญาที่ให้ไว้กับเรา`,
          image: `${baseImageUrl}/default.jpg`,
        };
      }
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
