<template>
  <WvContainer heading="เกี่ยวกับโครงการ">
    <div class="px-2 sm:px-0">
      <WvParagraphGroup heading="เกี่ยวกับโปรเจกต์นี้">
        <p>
          ช่วงเลือกตั้งทุกครั้งจะเห็นแต่ละพรรคการเมืองชูนโยบายหาเสียงของตัวเอง
          คำสัญญาว่าหากได้รับเลือกแล้วจะดำเนินการตามที่ตนได้หาเสียงไว้
          ซึ่งก็ปฎิเสธไม่ได้ว่า คำสัญญาหรือนโยบายที่หาเสียง
          อาจเป็นส่วนที่ส่งผลต่อการตัดสินใจเลือกพรรคเหล่านั้น
          แต่เมื่อเลือกพรรคต่างๆได้รับเลือกเข้าไปแล้ว
          สิ่งต่อไปที่ประชาชนต้องการรู้คือคำสัญญาที่ให้ไว้ ทำได้มากน้อยแค่ไหน
          หรือเป็นเพียงคำพูดออกมาเท่านั้น
        </p>
        <p>
          เพื่อทำให้ทุกคนรับรู้ ร่วมติดตาม ให้พรรคการเมืองรักษาสัญญาที่ให้ไว้
          และการดำเนินการของคำสัญญาต่างๆ (promise) หรือนโยบายเหล่านั้น ทางทีม
          WeVis จึงได้รวบรวมข้อมูลการทำตามคำสัญญา
          เพื่อให้ประชาชนสามารถค้นหาหรือเลือกดูคำสัญญาต่างๆ พรรคการเมือง
          ในรูปแบบที่เข้าถึงและเข้าใจได้ง่าย
        </p>
        <p>
          โดยเป็นคำสัญญาช่วงหาเสียงเลือกตั้งของพรรคการเมืองปี 2562
          (พรรคที่ได้ก่อตั้งเป็นรัฐบาลและเป็นฝ่ายค้าน) ระยะเวลาตั้งแต่ 10
          กรกฏาคม 2562 ว่าคำสัญญาได้ถูกดำเนินการมากน้อยแค่ไหน รักษาคำสัญญาได้ไหม
        </p>
      </WvParagraphGroup>
      <br /><br />
      <WvParagraphGroup heading="นโยบายการนำข้อมูลไปใช้ต่อ">
        <p>
          WeVis มีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
          และเปิดข้อมุลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
          Attribution-NonCommercial License (CC-BY-NC)
          คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา
          แต่ห้ามนำไปใช้เพื่อการค้า
        </p>
        <p>
          หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
          ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
          หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
        </p>
      </WvParagraphGroup>
      <br /><br />
      <WvParagraphGroup heading="อาสาสมัครร่วมพัฒนา">
        <WvParagraphGroup
          v-for="(role, roleIndex) in roleGroup"
          :key="`role-${roleIndex}`"
          :small="true"
          :heading="role[0].role"
        >
          <div class="flex flex-wrap">
            <div
              v-for="(person, personIndex) in role"
              :key="`person-${personIndex}`"
            >
              <ExternalLink v-if="person.url !== ''" :url="person.url">
                <span class="hover:underline">{{ person.name }}</span>
                <span v-if="personIndex < role.length - 1" class="pr-1">,</span>
              </ExternalLink>
              <div v-else>
                <span>{{ person.name }}</span>
                <span v-if="personIndex < role.length - 1">, </span>
              </div>
            </div>
          </div>
        </WvParagraphGroup>

        <WvParagraphGroup :small="true" heading="ประสานงานและจัดการอื่นๆ">
          <p>
            <ExternalLink
              class="text-ultramarine hover:underline"
              url="https://punchup.world/"
              >Punch Up</ExternalLink
            >
            และ
            <ExternalLink
              class="text-ultramarine hover:underline"
              url="https://wevis.info/"
              >WeVis</ExternalLink
            >
            ในโปรเจกต์ Promise Tracker
            สำรวจคำสัญญาของพรรคการเมืองที่ผ่านมารักษาคำสัญญาได้แค่ไหน
            ยังได้รับการสนับสนุนทุนในการดำเนินงานจาก
            <ExternalLink
              class="text-ultramarine hover:underline"
              url="https://www.ned.org/"
              >National Endowment for Democracy (NED)</ExternalLink
            >
            ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์
            ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
          </p>
        </WvParagraphGroup>
      </WvParagraphGroup>
    </div>
    <WvButtonGroup :center="true">
      <a
        :href="downloadUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex"
      >
        <WvButton class="border-2"
          ><svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_314_173)">
              <path
                d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <line
                x1="10.667"
                y1="0.5"
                x2="10.667"
                y2="13"
                stroke="currentColor"
                stroke-width="2"
              />
            </g>
            <defs>
              <clipPath id="clip0_314_173">
                <rect
                  width="20.8333"
                  height="20"
                  fill="white"
                  transform="translate(0.0834961 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div>ดาวน์โหลดข้อมูล</div>
        </WvButton>
      </a>
      <a
        :href="feedbackUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex"
      >
        <WvButton class="border-2">
          <img
            width="30"
            src="data:image/png;base64,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"
            alt=""
          />
          <span>Feedback</span>
        </WvButton>
      </a>
      <a
        :href="githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex"
      >
        <WvButton class="border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              fill="currentColor"
            />
          </svg>
          <span>GitHub Repo</span>
        </WvButton>
      </a>
    </WvButtonGroup>
    <WvSharer :center="true" />
    <WvParagraphGroup class="px-2 sm:px-0" heading="ที่มาของข้อมูล">
      <p>
        ทางทีมผู้พัฒนา
        ได้ใช้ข้อมูลจากเว็บไซต์จากเว็บไซต์ข่าวที่เขียนหรือกล่าวถึงนโยบาย
        และบางคำสัญญาที่หาข้อมูลได้ จะสืบค้นข้อมูลต่อจากเอกสารทางราชการ เช่น
        ราชกิจจานุเษกษา มติคณะรัฐมนตรี
      </p>
      <WvParagraphGroup :small="true" heading="หมายเหตุ">
        <p>
          พยายามรวบรวมข้อมูลให้ได้มากที่สุด โดยนำข้อมูลจากสำนักข่าวและเฟสบุ๊ค
          เว็บไซต์ หรือทวิตเตอร์ ของพรรคการเมือง และข้อมูลรูปนโยบายบางพรรค
          แต่บางส่วนไม่มีข้อมูลปรากฎแล้ว
        </p>
      </WvParagraphGroup>

      <WvParagraphGroup :small="true" heading="อ้างอิงข้อมูลจาก :">
        <ul class="list-disc list-outside ml-8">
          <li
            v-for="(reference, refIndex) in references"
            :key="`reference-${refIndex}`"
            class="hover:underline"
          >
            <ExternalLink class="break-all" :url="reference">{{
              reference
            }}</ExternalLink>
          </li>
        </ul>
      </WvParagraphGroup>
    </WvParagraphGroup>
  </WvContainer>
</template>

<script lang="ts">
import Vue from 'vue';
import WvContainer from '@wevisdemo/ui/components/container.vue';
import WvParagraphGroup from '@wevisdemo/ui/components/paragraph-group.vue';
import WvButton from '@wevisdemo/ui/components/button.vue';
import WvButtonGroup from '@wevisdemo/ui/components/button-group.vue';
import WvSharer from '@wevisdemo/ui/components/sharer.vue';
import ExternalLink from '@/components/external-link.vue';
import { createMetadata } from '~/utils/metadata';

export default Vue.extend({
  name: 'AboutPage',
  components: {
    WvContainer,
    WvParagraphGroup,
    WvButton,
    WvButtonGroup,
    WvSharer,
    ExternalLink,
  },
  data() {
    return {
      contributors: [
        {
          name: 'วิถี ภูษิตาศัย',
          url: 'https://github.com/Th1nkK1D',
          role: 'เขียนโปรแกรม',
        },
        {
          name: 'ณรัฐ สุชาติสุนทร',
          url: 'https://github.com/mixth',
          role: 'เขียนโปรแกรม',
        },
        {
          name: 'ณัฐกิตติ์ แซ่ตัน',
          url: 'https://www.linkedin.com/in/nathakit-saetan/',
          role: 'เขียนโปรแกรม',
        },
        {
          name: 'ธนภัทร จำนงรัตน์',
          url: 'https://github.com/palminister',
          role: 'เขียนโปรแกรม',
        },
        {
          name: 'พิชญา โชนะโต',
          url: 'https://www.instagram.com/messymachine/',
          role: 'ออกแบบ',
        },
        {
          name: 'ธนวิชญ์ ประสงค์พงษ์ชัย',
          url: 'https://linkedin.com/in/taepras',
          role: 'ออกแบบ',
        },
        {
          name: 'ศุภิสรา อิศรานุกูล',
          url: 'https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/',
          role: 'สืบค้นและรวบรวมข้อมูล',
        },
        { name: 'ธนพล เตชไกรชนะ', url: '', role: 'สืบค้นและรวบรวมข้อมูล' },
        { name: 'สุรวิชญ์ กาหลง', url: '', role: 'สืบค้นและรวบรวมข้อมูล' },
        {
          name: 'ธนิสรา เรืองเดช',
          url: 'https://www.linkedin.com/in/thanisara-r/',
          role: 'บรรณาธิการ',
        },
      ],
      references: [
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'https://www.nhso.go.th/page/history',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://mgronline.com/politics/detail/9620000016460',
        'https://www.thairath.co.th/news/politic/1488069',
        'http://www.lp-pao.go.th/Plan/images/book/Book-005.pdf',
        'https://www.moveforwardparty.org/about/',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://act-party.org/',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://www.bbc.com/thai/thailand-60035754',
        'https://www.posttoday.com/property/593070',
        'https://twitter.com/NewEconomicsTH/status/1107546153464127488/photo/1',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://today.line.me/th/v2/article/G1jG1Z',
        'http://www.mnre.go.th/th/service/list/1781',
        'https://voicetv.co.th/read/UIrwJtu0g',
        'https://ptp.or.th/%e0%b8%99%e0%b9%82%e0%b8%a2%e0%b8%9a%e0%b8%b2%e0%b8%a2%e0%b8%ab%e0%b8%a5%e0%b8%b1%e0%b8%81%e0%b8%9e%e0%b8%a3%e0%b8%a3%e0%b8%84%e0%b9%80%e0%b8%9e%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b9%84%e0%b8%97%e0%b8%a2/%e0%b8%99%e0%b9%82%e0%b8%a2%e0%b8%9a%e0%b8%b2%e0%b8%a2%e0%b8%94%e0%b9%89%e0%b8%b2%e0%b8%99%e0%b9%80%e0%b8%a8%e0%b8%a3%e0%b8%a9%e0%b8%90%e0%b8%81%e0%b8%b4%e0%b8%88',
        'https://www.mof.go.th/th/detail/2020-04-03-10-20-57/2021-05-11-16-11-37',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://www.facebook.com/DemocratPartyTH/posts/10155778021481791/',
        'http://www.ratchakitcha.soc.go.th/DATA/PDF/2564/A/041/T_0004.PDF',
        'https://www.khaosod.co.th/politics/news_2282457',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'http://www.ratchakitcha.soc.go.th/DATA/PDF/2562/A/095/T_0001.PDF',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=39',
        'https://www.support1448.org/',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://m.facebook.com/thematterco/photos/a.1735876059961122/2227993137416076',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=30',
        'https://www.thairath.co.th/news/politic/2249827',
        'https://www.thaigov.go.th/news/contents/details/39516',
        'http://pracharathschool.go.th/apps/home',
        'https://www.thaigov.go.th/news/contents/details/39516',
        'https://act-party.org/',
        'https://thematter.co/social/office-labour-policy/72577',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=35',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://www.prd.go.th/th/content/category/detail/id/39/iid/13264',
        'https://www.mol.go.th/%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B9%88%E0%B8%B3',
        'https://surat2.go.th/2021/files/com_agency/2021-10_0119f789415964f.pdf',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=13',
        'https://www.facebook.com/DemocratPartyTH/photos/pcb.10155705874221791/10155705873746791',
        'https://www.thaigov.go.th/news/contents/details/45605',
        'https://www.khaosod.co.th/monitor-news/news_6300775',
        'https://www.dop.go.th/enai/faq/view=967',
        'https://www.posttoday.com/politic/news/583622',
        'https://news.mthai.com/politics-news/699571.html',
        'http://www.ratchakitcha.soc.go.th/DATA/PDF/2562/A/095/T_0001.PDF',
        'https://news.mthai.com/politics-news/699571.html',
        'https://www.posttoday.com/property/593071',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://teroasia.com/news/138442',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://act-party.org/',
        'https://teroasia.com/news/138442',
        'https://news.mthai.com/politics-news/699571.html',
        'https://drive.google.com/file/d/14iL3fWy1TtYj0kLpv6IzICYVFmgz0F1n/view',
        'https://news.mthai.com/politics-news/699571.html',
        'https://news.mthai.com/politics-news/699571.html',
        'https://news.mthai.com/politics-news/699571.html',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://act-party.org/',
        'https://theactive.net/news/20201125/',
        'https://www.dol.go.th/Pages/%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B4%E0%B8%99.aspx',
        'https://www.facebook.com/DemocratPartyTH/posts/10155752110846791/',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=14',
        'https://futureforwardparty.org/?page_id=3020',
        'https://www.moveforwardparty.org/about/',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://futureforwardparty.org/?page_id=2998',
        'https://www.moveforwardparty.org/about/',
        'https://eeco.or.th/th/filedownload/1478/cf4092afd2456bb1f03995574db27a75.pdf',
        'https://www.pptvhd36.com/news/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%99%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99/99863',
        'https://www.moveforwardparty.org/about/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=16',
        'http://www.ratchakitcha.soc.go.th/DATA/PDF/2562/A/095/T_0001.PDF',
        'https://workpointtoday.com/tax-policy/',
        'https://www.facebook.com/DemocratPartyTH/videos/2202989076621434/',
        'https://www.facebook.com/DemocratPartyTH/posts/10155301939861791/',
        'https://govwelfare.cgd.go.th/welfare/check',
        'https://teroasia.com/news/138442',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=39',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=16',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://m.facebook.com/thematterco/photos/a.1735876059961122/2227993137416080',
        'https://futureforwardparty.org/?page_id=3018',
        'https://www.moveforwardparty.org/about/',
        'https://www.matichon.co.th/politics/news_1371440',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=35',
        'https://thestandard.co/phoom-jai-thai-denied-4-day-work-week-policy/',
        'https://www.bangkokbiznews.com/business/921766',
        'https://act-party.org/',
        'https://www.facebook.com/DemocratPartyTH/posts/10155705874221791',
        'https://www.facebook.com/watch/?v=643233466104611',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=17',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://twitter.com/hashtag/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1?src=hashtag_click',
        'http://www.todayhighlightnews.com/2019/03/23-4.html',
        'https://twitter.com/NewEconomicsTH/status/1108278649101254656/photo/1',
        'https://www.hfocus.org/content/2021/11/23648',
        'https://elect.in.th/civil-movement-2020/',
        'https://www.oae.go.th/view/1/%E0%B8%94%E0%B8%B1%E0%B8%8A%E0%B8%99%E0%B8%B5%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%A5%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95/TH-TH',
        'http://www.ratchakitcha.soc.go.th/DATA/PDF/2562/A/095/T_0001.PDF',
        'https://mgronline.com/local/detail/9640000125284',
        'https://www.posttoday.com/politic/news/574891',
        'https://www.posttoday.com/politic/news/669029',
        'https://www.springnews.co.th/news/629409',
        'https://bhumjaithai.com/news/1952',
        'https://www.ncb.co.th/ncb-infographic/jat-gep-wai-gee-pee',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=39',
        'https://www.hfocus.org/content/2019/01/16754',
        'https://futureforwardparty.org/?page_id=3018',
        'https://www.moveforwardparty.org/about/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=14',
        'https://teroasia.com/news/138442',
        'https://www.thansettakij.com/politics/378941',
        'https://m.facebook.com/praewmagazine/photos/a.413770445358/10156902262040359/',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://www.thairath.co.th/news/politic/1502596',
        'https://siamrath.co.th/n/62144',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=29',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=39',
        'https://twitter.com/hashtag/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1?src=hashtag_click',
        'http://www.todayhighlightnews.com/2019/03/23-4.html',
        'https://elect.in.th/candidates/p/%E0%B8%9E%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2.html',
        'https://resolution.soc.go.th/PDF_UPLOAD/2562/9933313821.pdf',
        'https://resolution.soc.go.th/PDF_UPLOAD/2562/9933316131.pdf',
        'https://resolution.soc.go.th/PDF_UPLOAD/2562/9933360221.pdf',
        'https://workpointtoday.com/%E0%B8%8A%E0%B8%B9%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89-%E0%B8%81%E0%B8%B2%E0%B8%A3/',
        'https://twitter.com/NewEconomicsTH/status/1106110584674635776/photo/1',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=16',
        'https://twitter.com/hashtag/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1?src=hashtag_click',
        'https://www.facebook.com/electinth/photos/policy-promise-%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A2-%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%AB%E0%B8%B2%E0%B8%A3-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%A2%E0%B9%8C%E0%B9%83%E0%B8%84%E0%B8%A3%E0%B8%A7%E0%B9%88%E0%B8%B2-%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%9B%E0%B8%B1%E0%B8%95%E0%B8%A2%E0%B9%8C-%E0%B8%88%E0%B8%B0%E0%B9%84/374128073405932/',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://futureforwardparty.org/?page_id=2998',
        'https://www.moveforwardparty.org/about/',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.nhso.go.th/page/history?fbclid=IwAR2hWsN3iVpA81GBLQma2wQs0iaeFmzw1DQ5NIL2ilmvBHICSc_qz2x4PnQ',
        'https://www.matichon.co.th/politics/news_3057111',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=29',
        'https://twitter.com/hashtag/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1?src=hashtag_click',
        'https://futureforwardparty.org/?page_id=2998',
        'https://www.moveforwardparty.org/about/',
        'https://www.posttoday.com/politic/news/574891',
        'https://www.boi.go.th/upload/content/Summary_Investment.pdf',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=14',
        'https://today.line.me/th/v2/article/G1jG1Z',
        'https://www.matichon.co.th/election-2019/news_1377692',
        'https://twitter.com/hashtag/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1?src=hashtag_click',
        'https://twitter.com/hashtag/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1?src=hashtag_click',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=35',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=29',
        'https://news.mthai.com/politics-news/789439.html',
        'https://m.facebook.com/thematterco/photos/a.1735876059961122/2227993137416077',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=33',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=35',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=35',
        'https://www.posttoday.com/property/593072',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.thairath.co.th/news/politic/1455296',
        'https://www.thairath.co.th/news/politic/1455296',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=19',
        'https://elect.in.th/candidates/p/%E0%B8%9E%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2.html',
        'https://www.labour.go.th/index.php/hm7/73-2562-01-04-06-01-50',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=14',
        'https://www.pptvhd36.com/news/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%99%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99/99431',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'https://www.naewna.com/likesara/418268',
        'https://www.posttoday.com/politic/news/574891',
        'https://act-party.org/',
        'https://futureforwardparty.org/?page_id=3017',
        'https://www.moveforwardparty.org/about/',
        'https://www.senate.go.th/document/Ext24764/24764236_0002.PDF',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=17',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'http://www.ratchakitcha.soc.go.th/DATA/PDF/2563/A/021/T_0023.PDF',
        'https://www.moveforwardparty.org/about/',
        'https://web.facebook.com/123905949628/posts/10157090356079629/?_rdc=1&_rdr',
        'https://m.facebook.com/thematterco/photos/a.1735876059961122/2227993137416081',
        'https://news.thaipbs.or.th/content/277773',
        'https://www.moveforwardparty.org/about/',
        'https://futureforwardparty.org/?page_id=3017',
        'https://act-party.org/',
        'https://www.thaipost.net/main/detail/32014',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.dop.go.th/th/benefits/3/835',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=17',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=16',
        'https://act-party.org/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=16',
        'https://prachatai.com/journal/2020/11/90571',
        'https://www.moveforwardparty.org/about/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'https://d.dailynews.co.th/politics/687400/',
        'https://www.moveforwardparty.org/about/',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://futureforwardparty.org/?page_id=3015',
        'https://www.moveforwardparty.org/about/',
        'https://act-party.org/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=19',
        'https://act-party.org/',
        'https://news.thaipbs.or.th/content/276617',
        'https://news.thaipbs.or.th/content/282073',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://drive.google.com/file/d/1n-iGC5pjRHyhkqXehYgFV5c7yyBgPTfy/view?usp=sharing',
        'https://futureforwardparty.org/?page_id=3017',
        'https://www.moveforwardparty.org/about/',
        'https://www.facebook.com/PueaChatOfficial/videos/1104445763048530/',
        'https://m.facebook.com/thematterco/photos/a.1735876059961122/2227993137416079',
        'https://www.thairath.co.th/news/politic/2062760',
        'https://www.moveforwardparty.org/about/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=17',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://www.thairath.co.th/news/politic/1454515',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=14',
        'https://www.matichon.co.th/news-monitor/news_1597125',
        'https://today.line.me/th/v2/article/E00reY',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://elect.in.th/candidates/p/%E0%B8%9E%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2.html',
        'https://www.posttoday.com/politic/news/574130',
        'https://www.moveforwardparty.org/about/',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://futureforwardparty.org/?page_id=2998',
        'https://www.moveforwardparty.org/about/',
        'https://www.matichon.co.th/news-monitor/news_1635648',
        'https://twitter.com/hashtag/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1?src=hashtag_click',
        'https://www.posttoday.com/property/593072',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://teroasia.com/news/138442',
        'https://www.matichon.co.th/politics/news_3063339',
        'https://www.moveforwardparty.org/about/',
        'https://www.bangkokbiznews.com/politics/830435',
        'https://m.facebook.com/thematterco/photos/a.1735876059961122/2227993137416078',
        'https://futureforwardparty.org/?page_id=1027',
        'https://www.moveforwardparty.org/about/',
        'https://www.chartthaipattana.or.th/%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%81%E0%B8%A9%E0%B8%95%E0%B8%A3/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=19',
        'https://m.facebook.com/thematterco/photos/a.1735876059961122/2227993137416076',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.bangkokbiznews.com/politics/829627',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://futureforwardparty.org/?page_id=3023',
        'https://www.moveforwardparty.org/about/',
        'https://futureforwardparty.org/?page_id=3023',
        'https://www.moveforwardparty.org/about/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=42',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://teroasia.com/news/138442',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://twitter.com/NewEconomicsTH/status/1107927272558747649/photo/1',
        'https://futureforwardparty.org/?page_id=3023',
        'https://www.moveforwardparty.org/about/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=39',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://www.facebook.com/PrachachatPeopleNation/photos/a.2233758270216197/2243374155921275/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=33',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://teroasia.com/news/138442',
        'https://act-party.org/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://news.thaipbs.or.th/content/276619',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://mgronline.com/daily/detail/9610000122660',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://starthaiup.com/whats-happening/9-startup-policies-2019/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=19',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=30',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=16',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'http://www.ratchakitcha.soc.go.th/DATA/PDF/2562/A/095/T_0001.PDF',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.facebook.com/love.at.first.sight.prachapiwat/posts/2059625547486014/',
        'https://futureforwardparty.org/?page_id=3017',
        'https://www.moveforwardparty.org/about/',
        'https://www.chartthaipattana.or.th/%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A1/',
        'https://www.chartthaipattana.or.th/%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%A1/',
        'https://twitter.com/hashtag/%E0%B8%9E%E0%B8%A3%E0%B8%A3%E0%B8%84%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1?src=hashtag_click',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=33',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=13',
        'https://www.thaigov.go.th/news/contents/details/50437',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://today.line.me/th/v2/article/G1jG1Z',
        'https://www.facebook.com/sereeruamthai/posts/339249500043736/',
        'https://www.facebook.com/sereeruamthai/posts/339249500043736/',
        'http://www.todayhighlightnews.com/2019/03/23-4.html',
        'https://www.facebook.com/sereeruamthai/posts/339249500043736/',
        'https://www.facebook.com/sereeruamthai/posts/339249500043736/',
        'https://www.facebook.com/sereeruamthai/posts/339249500043736/',
        'https://www.facebook.com/sereeruamthai/posts/339249500043736/',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=17',
        'https://ilaw.or.th/node/5160',
        'https://www.thaipost.net/main/detail/31917',
        'https://www.chartthaipattana.or.th/%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2/',
        'https://elect.in.th/candidates/p/%E0%B8%9E%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2.html',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.naewna.com/politic/columnist/38362',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.pptvhd36.com/news/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%99%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99/99097',
        'https://news.thaipbs.or.th/content/276618',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://act-party.org/',
        'https://drive.google.com/file/d/1BLEXX13lot6_DRtGetNyQg1TzE898W2m/view',
        'https://www.bangkokbiznews.com/advertorials/news/1259',
        'https://www.matichon.co.th/politics/news_2647539',
        'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=34',
        'https://futureforwardparty.org/?page_id=3015',
        'https://www.moveforwardparty.org/about/',
      ],
      downloadUrl:
        'https://sheets.wevis.info/dashboard/#/base/e8f1ad5d-f1af-4f68-aa38-bcf45d519312',
      feedbackUrl: 'https://bit.ly/promisetracker-feedback',
      githubUrl: 'https://github.com/wevisdemo/promise-tracker',
    };
  },
  head: createMetadata({ pageName: 'เกี่ยวกับโครงการ' }),
  computed: {
    roleGroup(): {} {
      return this.groupBy('role', this.contributors);
    },
  },
  methods: {
    groupBy(key: string | number, array: Array<any>) {
      return array.reduce((cache: any, item) => {
        const currentKey = item[key];
        if (currentKey in cache) {
          return { ...cache, [currentKey]: cache[currentKey].concat(item) };
        }
        return { ...cache, [currentKey]: [item] };
      }, {});
    },
  },
});
</script>
