<template>
  <div
    class="grid sm:grid-cols-2 bg-white px-6 py-3 max-w-2xl rounded-lg overflow-hidden"
  >
    <div>
      <h2 class="wv-h10 wv-font-kondolar wv-font-black py-4">รายละเอียด</h2>
      <p class="wv-font-baijamjuri wv-b5">
        "เป็นโครงการที่ต่อยอดจากที่ทำไว้หนึ่งในโครง
        การสำคัญของรัฐบาลพลเอกประยุทธ์ จันทร์ โอชา คือ โครงการ National
        e-payment มี โครงการย่อย “โครงการ ลงทะเบียนเพื่อสวัสดิ การแห่งรัฐ”
        เพื่อฐานข้อมูลสำหรับการจัดสวัสดิ
        การของหน่วยงานภาครัฐให้กับผู้ที่มีรายได้น้อยที่ต้องการความช่วยเหลือจากภาครัฐ
        เนื่องจาก มองว่าที่ผ่าน มาการจัด สวัสดิการสังคมและ การให้เงินช่วยเหลือ
        ของภาครัฐยังมีข้อจำกัด โดยการจัดสรรเงินไม่ตรงกลุ่มเป้าหมายเพราะ ข้อมูล
        ยังกระจัดกระจาย และไม่มีข้อมูลเชิงลึก ดังนั้นโครงการ
        ขึ้นมาเพื่อเป็นฐานข้อมูลและให้ ความช่วยเหลือได้"
      </p>
      <BoxContainer class="ultramarine-box wv-font-anuphan mt-3">
        <p class="wv-u4 wv-font-bold">หมายเหตุ : โครงการต่อยอดจากรัฐบาลคสช.</p>
        <p class="wv-u5 pt-2">
          เป็นนโยบายหรือโครงการที่มีการดำเนินการมาอยู่แล้วตั้งแต ่สมัย
          รัฐบาลคณะรักษาความสงบแห่งชาติ(คสช.) แล้วพรรค
          การเมือง/รัฐบาลนำมาสานต่อทำต่อเนื่องมา ไม่ได้เริ่มทำ
          เมื่อได้รับการแต่งตั้งเป็นรัฐบาล เมื่อวันที่ 10 กรกฎาคม พ.ศ. 2562
        </p>
      </BoxContainer>
      <h2 class="wv-h10 wv-font-kondolar wv-font-black py-4">
        ลิงก์ / ข้อมูลที่เกี่ยวข้อง
      </h2>
      <RelatedInfo></RelatedInfo>
    </div>
    <div class="sm:pl-6">
      <h2 class="wv-h10 wv-font-kondolar wv-font-black py-4">ไทม์ไลน์</h2>
      <Timeline />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BoxContainer from './box-container.vue';
import RelatedInfo from './related-info.vue';
import Timeline from './timeline.vue';

export default Vue.extend({
  name: 'ExpandedCard',
  components: { BoxContainer, RelatedInfo, Timeline },
  props: {
    theme: {
      type: String,
      default: 'primary',
    },
  },
});
</script>

<style>
.ultramarine-box {
  @apply bg-ultramarine text-white;
}
.border-box {
  @apply border-black border-2;
}
</style>
