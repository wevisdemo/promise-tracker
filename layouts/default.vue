<template>
  <div class="flex flex-col min-h-screen wv-font-anuphan wv-b5">
    <WvNavbar
      class="z-20"
      title="PROMISE TRACKER"
      :logo-addon-src="`${$config.path.images}/logo-addon.png`"
    >
      <NuxtLink v-for="{ label, path } in routes" :key="path" :to="path">
        <WvNavButton :active="path === $route.path">{{ label }}</WvNavButton>
      </NuxtLink>
    </WvNavbar>
    <div class="flex-1">
      <Nuxt />
    </div>
    <WvFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import WvNavbar from '@wevisdemo/ui/components/navbar.vue';
// @ts-ignore
import WvFooter from '@wevisdemo/ui/components/footer.vue';
// @ts-ignore
import WvNavButton from '@wevisdemo/ui/components/nav-button.vue';

export default Vue.extend({
  components: { WvNavbar, WvFooter, WvNavButton },
  data() {
    return {
      routes: [
        { label: 'หน้าแรก', path: '/' },
        { label: 'ดูคำสัญญา', path: '/explore' },
        { label: 'วิธีตรวจสอบคำสัญญา', path: '/guide' },
        { label: 'เกี่ยวกับโครงการ', path: '/about' },
      ],
    };
  },
});
</script>
