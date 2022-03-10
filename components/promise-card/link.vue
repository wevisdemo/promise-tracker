<template>
  <div class="flex flex-col items-center">
    <BoxContainer class="border-black border-2 wv-font-anuphan mb-3">
      <a
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="wv-font-anuphan wv-font-bold wv-u4 text-ultramarine underline"
      >
        {{ link.name }}
      </a>
    </BoxContainer>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import BoxContainer from './box-container.vue';
import { PromiseLink } from '@/models/promise';

export default Vue.extend({
  name: 'Link',
  components: { BoxContainer },
  props: {
    link: {
      type: Object as PropType<PromiseLink>,
      default: () => ({
        name: '',
        url: '',
      }),
    },
  },
});
</script>
