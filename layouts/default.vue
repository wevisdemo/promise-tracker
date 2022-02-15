<template>
  <div class="flex flex-col min-h-screen">
    <WvNavbar title="PROMISE TRACKER" logo-addon-src="/logo-addon.png">
      <WvNavButton>Home</WvNavButton>
      <WvNavButton>ดูคำสัญญา</WvNavButton>
      <WvNavButton>วิธีทวงสัญญา</WvNavButton>
      <WvNavButton>เกี่ยวกับโครงการ</WvNavButton>
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
});
</script>
