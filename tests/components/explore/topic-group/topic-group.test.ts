import { config, mount } from '@vue/test-utils';
import TopicGroup from '@/components/explore/topic-group/topic-group.vue';
import {
  PromiseTopic,
  promiseTopicTextMap,
  TrackingPromise,
} from '@/models/promise';
import {
  filteredPromise,
  getPromisesLength,
} from '@/components/explore/topic-group/topic-utils';
import PromiseCard from '@/components/promise-card/promise-card.vue';
import Button from '@/components/button.vue';

describe('Topic Group', () => {
  const promises = [
    {
      id: 1,
      isActive: false,
      party: 'พลังประชารัฐ',
      title: 'ต่อยอดบัตรสวัสดิการแห่งรัฐ',
      topic: 'culture',
      status: 'done',
      description: 'เป็นโครงการที่ต่อยอด',
      isNCPO: true,
      imageFileName: 'พลังประชารัฐ_7',
      links: [
        {
          name: 'ตรวจสอบสิทธิ์สวัสดิการแห่งรัฐ ',
          url: 'https://govwelfare.cgd.go.th/welfare/check\n',
        },
      ],
      timelines: [
        {
          label: 'เปิดโอกาสให้ผู้มีรายได้น้อยลงทะเบียน ',
          from: '2016-04-03',
          to: '2016-05-15',
        },
      ],
    },
    {
      id: 2,
      isActive: false,
      party: 'พลังประชารวย',
      title: 'ต่อยอดซัมติง',
      topic: 'culture',
      status: 'nodata',
      description: 'เป็นโครงการที่ต่อยอด',
      isNCPO: true,
      imageFileName: 'พลังประชารัฐ_7',
      links: [
        {
          name: 'ตรวจสอบสิทธิ์สวัสดิการแห่งรัฐ ',
          url: 'https://govwelfare.cgd.go.th/welfare/check\n',
        },
      ],
      timelines: [
        {
          label: 'เปิดโอกาสให้ผู้มีรายได้น้อยลงทะเบียน ',
          from: '2016-04-03',
          to: '2016-05-15',
        },
      ],
    },
    {
      id: 3,
      isActive: false,
      party: 'รวมพลังประชาชาติไทย',
      title: 'มีสำนักงานตำรวจที่ขึ้นกับจังหวัดและประชาชนในพื้นที่ ',
      topic: 'culture',
      status: 'nodata',
      description:
        'เป็นนโยบายกระจายอำนาจการบริหารงาน การจัดสรรงบประมาณและกำลังคนของตำรวจลงสู่จังหวัด ให้แต่ละจังหวัดมีสำนักงานตำรวจที่ขึ้นกับจังหวัดและประชาชนในพื้นที่\n\nโดยเฉพาะให้มีตำรวจที่มีหน้าที่จัดการแก้ปัญหายาเสพติดระดับจังหวัดขึ้นเป็นการเฉพาะ ซึ่งมีขีดความสามารถในการป้องกันและปราบปรามยาเสพติด กำกับ ควบคุมโดยประชาชนในจังหวัด\n\nซึ่งไม่พบข้อมูล',
      isNCPO: false,
      imageFileName: 'รวมพลังประชาชาติไทย_8',
      links: [
        {
          name: 'เว็บไซต์พรรครวมพลังประชาชาติไทย',
          url: 'https://act-party.org/',
        },
        {
          name: "กาง 10 นโยบายพรรค'รวมพลังประชาชาติไทย'เพื่ออนาคต ของประเทศ  - ไทยโพสต์",
          url: 'https://www.thaipost.net/main/detail/32014',
        },
      ],
      timelines: [
        {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-01',
          to: '2019-03',
        },
        {
          label: 'แต่งตั้งรัฐบาล',
          from: '2019-07-10',
        },
        {
          label: 'แถลงนโยบายต่อรัฐสภา',
          from: '2019-07-25',
        },
      ],
    },
    {
      id: 4,
      isActive: false,
      party: 'ไทรักธรรม',
      title:
        'มีอาชีพเสริมเพิ่มรายได้จากอาชีพหลักพร้อมจัดหาการตลาดให้อันนำไปสู่การลดภาระหนี้สิน',
      topic: 'culture',
      status: 'nodata',
      description:
        'เป็นนโยบายที่ให้ประชาชนมีรายได้เสริม เพิ่มรายได้จากอาชีพหลักพร้อมทำการตลาดให้ \n\nซึ่งไม่พบข้อมูลอย่างเป็นรูปธรรม แต่พบว่าการสร้างอาชีพเสริมรายได้ ขณะนั้นคือ การทำดอกไม้จันทน์ สามารถทำได้ทันที ไม่ได้จูงใจด้วยทรัพย์สินอื่นใดให้เข้ามาเป็นสมาชิกพรรค \n\nโดยก่อนประกาศผลการเลือกตั้ง กกต. ได้รับรายงานกรณีมีเหตุอันควรสงสัยว่า นายพีระวิทย์ เรื่องลือดลภาค หัวหน้าพรรค กับพวกซึ่งเป็นผู้สมัคร ส.ส.แบบแบ่ง และสมาชิกพรรคไทรักธรรม  ในพื้นที่จังหวัดพิจิตร รวม 10 ราย กระทำการฝ่าฝืน พระราชบัญญัติประกอบรัฐธรรมนูญ (พ.ร.ป.) ว่าด้วยพรรคการเมือง พ.ศ.2560 มาตรา 30 กรณีเสนอว่าจะให้ หรือสัญญาว่าจะให้เงิน ทรัพย์สิน หรือประโยชน์อื่นใดไม่ว่าโดยทางตรงหรือทางอ้อม เพื่อจูงใจให้บุคคลหนึ่งบุคคลใดสมัครเข้าเป็นสมาชิกพรรคไทรักธรรม ทำให้กกต.ยื่นร้องขอให้ยุบพรรคต่อศาลรัฐธรรมนูญ เมื่อวันที่ 7 มกราคม พ.ศ. 2565',
      isNCPO: false,
      imageFileName: 'ไทรักธรรม_1',
      links: [
        {
          name: 'นโยบายพรรคไทรักธรรม - line today',
          url: 'https://today.line.me/th/v2/article/YWmgPL?imageSlideIndex=19',
        },
        {
          name: 'กกต. เอาผิด ‘พีระวิทย์’ พร้อมพวก 8 ราย - มติชน',
          url: 'https://www.matichon.co.th/politics/news_2502019',
        },
        {
          name: 'กกต.ยื่นยุบ"ไทรักธรรม"ปมจูงใจสมัครสมาชิก - PPTV online',
          url: 'https://www.pptvhd36.com/news/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87/164059',
        },
      ],
      timelines: [
        {
          label: 'หาเสียงประกาศนโยบาย',
          from: '2019-01',
          to: '2019-03',
        },
        {
          label: 'แต่งตั้งรัฐบาล',
          from: '2019-07-10',
        },
        {
          label: 'แถลงนโยบายต่อรัฐสภา',
          from: '2019-07-25',
        },
      ],
    },
  ];

  const promisesSmall = promises.filter((promise) => promise.id < 3);

  const promisePerPagePropsSmall = {
    topic: PromiseTopic.Culture,
    promises: promisesSmall,
    promisePerPage: 3,
  };
  const promisePerPagePropsFull = {
    topic: PromiseTopic.Culture,
    promises,
    promisePerPage: 3,
  };
  const noPromisePerPageProps = {
    topic: PromiseTopic.Culture,
    promises,
    promisePerPage: 0,
  };

  test('should have default props', () => {
    const wrapper = mount(TopicGroup);

    expect(wrapper.props().topic).toBe('');
    expect(wrapper.props().promises).toEqual([{}]);
    expect(wrapper.props().promisePerPage).toBe(0);
  });

  test('should render topic header box', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsSmall,
    });

    const header = wrapper.find(
      `#topic-${promisePerPagePropsSmall.topic}-header`
    );

    expect(header.classes()).toEqual(['topic-header']);
  });

  test('should render topic header icon', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsSmall,
    });

    const header = wrapper.find(
      `#topic-${promisePerPagePropsSmall.topic}-header`
    );
    const headerImage = header.find('img');

    expect(headerImage.attributes('src')).toEqual(
      `/images/topic/${promisePerPagePropsSmall.topic}.png`
    );
    expect(headerImage.attributes('alt')).toEqual(
      promisePerPagePropsSmall.topic
    );
  });

  test('should render topic header icon from config path', () => {
    const CONFIG_PATH = '/test';
    config.mocks.$config = {
      path: {
        base: '',
        images: CONFIG_PATH,
      },
    };
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsSmall,
    });

    const header = wrapper.find(
      `#topic-${promisePerPagePropsSmall.topic}-header`
    );
    const headerImage = header.find('img');

    expect(headerImage.attributes('src')).toEqual(
      `${CONFIG_PATH}/topic/${promisePerPagePropsSmall.topic}.png`
    );
  });

  test('should render topic header title', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsSmall,
    });

    const header = wrapper.find(
      `#topic-${promisePerPagePropsSmall.topic}-header`
    );
    const p = header.findAll('p');

    expect(p.at(0).text()).toEqual(
      `ประเด็น${promiseTopicTextMap.get(promisePerPagePropsSmall.topic)?.long}`
    );
  });

  test('should render topic header promise count', () => {
    const LENGTH = getPromisesLength(
      filteredPromise(promises as TrackingPromise[], PromiseTopic.Culture)
    );
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsFull,
    });

    const header = wrapper.find(
      `#topic-${promisePerPagePropsFull.topic}-header`
    );
    const p = header.findAll('p');

    expect(p.at(1).text()).toEqual(`${LENGTH} คำสัญญา`);
  });

  test('should render all PromiseCards if the amount of cards are less than the promise per page', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsSmall,
    });

    const promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(promisesSmall.length);
  });

  test('should render all available PromiseCards', () => {
    const wrapper = mount(TopicGroup, {
      propsData: noPromisePerPageProps,
    });

    const promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(promises.length);
  });

  test('should render PromiseCards within the page', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsFull,
    });

    const promiseCards = wrapper.findAllComponents(PromiseCard);

    expect(promiseCards.length).toEqual(promisePerPagePropsFull.promisePerPage);
  });

  test('should render viewAll button', () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsFull,
    });

    const button = wrapper.findComponent(Button);

    expect(button.text()).toEqual('ดูประเด็นนี้ทั้งหมด');
  });

  test('should emit event on viewAll', async () => {
    const wrapper = mount(TopicGroup, {
      propsData: promisePerPagePropsFull,
    });

    const button = wrapper.findComponent(Button);
    await button.trigger('click');

    expect(wrapper.emitted('viewTopic')).toBeTruthy();
  });
});
