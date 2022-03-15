<template>
  <div class="status-animation"></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'StatusAnimation',
});
</script>

<style scoped>
.status-animation {
  width: 120px;
  height: 120px;
  background-image: url('/images/status/default.png');
  background-size: contain;
  animation: statusChange 6s infinite ease-in-out;
}
@keyframes statusChange {
  0% {
    background-image: url('static/images/status/default.png');
  }
  20% {
    background-image: url('static/images/status/nodata.png');
  }
  40% {
    background-image: url('static/images/status/proposed.png');
  }
  60% {
    background-image: url('static/images/status/paused.png');
  }
  80% {
    background-image: url('static/images/status/done.png');
  }
  100% {
    background-image: url('static/images/status/default.png');
  }
}
</style>
