<template>
  <div class="flex flex-col items-center">
    <BoxContainer class="border-box wv-font-anuphan">
      ตรวจสอบสิทธิ์สวัสดิการแห่งรัฐ
    </BoxContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BoxContainer from './box-container.vue';

export default Vue.extend({
  name: 'RelatedInfo',
  components: { BoxContainer },
});
</script>
