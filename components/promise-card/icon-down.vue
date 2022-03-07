<template>
  <svg
    width="32"
    height="32"
    viewBox="16 16 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_442_91719)">
      <circle
        cx="32"
        cy="32"
        r="12"
        transform="rotate(-180 32 32)"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.5499 36.0335C32.496 36.0876 32.4319 36.1305 32.3614 36.1598C32.2909 36.189 32.2152 36.2041 32.1389 36.2041C32.0625 36.2041 31.9869 36.189 31.9163 36.1598C31.8458 36.1305 31.7817 36.0876 31.7278 36.0335L28.2439 32.5496C28.1349 32.4406 28.0736 32.2927 28.0736 32.1385C28.0736 31.9844 28.1349 31.8365 28.2439 31.7275C28.3529 31.6184 28.5008 31.5572 28.655 31.5572C28.8092 31.5572 28.957 31.6184 29.0661 31.7275L32.1389 34.8014L35.2116 31.7275C35.2656 31.6735 35.3297 31.6306 35.4002 31.6014C35.4708 31.5722 35.5464 31.5572 35.6227 31.5572C35.6991 31.5572 35.7747 31.5722 35.8452 31.6014C35.9157 31.6306 35.9798 31.6735 36.0338 31.7275C36.0878 31.7814 36.1306 31.8455 36.1598 31.9161C36.1891 31.9866 36.2041 32.0622 36.2041 32.1385C36.2041 32.2149 36.1891 32.2905 36.1598 32.361C36.1306 32.4316 36.0878 32.4957 36.0338 32.5496L32.5499 36.0335V36.0335Z"
        fill="#3904E9"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_442_91719"
        x="-11"
        y="-15"
        width="86"
        height="86"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="1"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_442_91719"
        />
        <feOffset dy="-4" />
        <feGaussianBlur stdDeviation="15" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_442_91719"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_442_91719"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'IconDown',
});
</script>
