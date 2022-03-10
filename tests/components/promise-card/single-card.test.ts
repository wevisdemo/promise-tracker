import { mount, config } from '@vue/test-utils';
import WvSharer from '@wevisdemo/ui/components/sharer.vue';
import {
  PromiseTopic,
  PromiseStatus,
  promiseTopicTextMap,
  promiseStatusTextMap,
} from '@/models/promise';
import SingleCard from '@/components/promise-card/single-card.vue';
import StatusLegend from '@/components/explanation/status-legend.vue';
import IconDown from '@/components/promise-card/icon-down.vue';
import IconUp from '@/components/promise-card//icon-up.vue';

describe('Single card', () => {
  const promise = {
    id: 1,
    status: 'nodata',
    title: 'โครงการบ้านล้านหลังประชารัฐ',
    topic: 'equality',
    party: 'พลังประชารัฐ',
  };
  const wrapper = mount(SingleCard, {
    propsData: {
      promise,
    },
  });

  test('should have default props', () => {
    const wrapper = mount(SingleCard);

    expect(wrapper.props().promise).toEqual({});
  });

  test('should render color according to status', () => {
    const statusColor = wrapper.find('#single-card-1-status-color');

    expect(statusColor.classes()).toEqual(
      expect.arrayContaining([`bg-status-${promise.status}`])
    );
  });

  test('should render status icon', () => {
    const status = wrapper.findComponent(StatusLegend);

    expect(status.text()).toEqual(
      promiseStatusTextMap.get(promise.status as PromiseStatus)
    );
  });

  test('should render title', () => {
    const title = wrapper.find('h2');

    expect(title.text()).toEqual(promise.title);
  });

  test('should render topic icon', () => {
    const icon = wrapper.find(`#single-card-${promise.id}-topic-icon`);

    expect(icon.attributes('src')).toEqual(
      `/images/topic/${promise.topic}.png`
    );
    expect(icon.attributes('alt')).toEqual(promise.topic);
  });

  test('should fetch topic icon from config path', () => {
    const CONFIG_PATH = '/test';
    config.mocks.$config = {
      path: {
        base: '',
        images: CONFIG_PATH,
      },
    };
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
      },
    });

    const icon = wrapper.find(`#single-card-${promise.id}-topic-icon`);

    expect(icon.attributes('src')).toEqual(
      `${CONFIG_PATH}/topic/${promise.topic}.png`
    );
  });

  test('should render topic name', () => {
    const topicName = wrapper.find(`#single-card-${promise.id}-topic-name`);

    expect(topicName.text()).toEqual(
      promiseTopicTextMap.get(promise.topic as PromiseTopic)?.short
    );
  });

  test('should render party logo', () => {
    const img = wrapper.find(`#single-card-${promise.id}-party-logo`);

    expect(img.attributes('src')).toEqual(`/images/party/${promise.party}.jpg`);
    expect(img.attributes('alt')).toEqual(promise.party);
  });

  test('should fetch party logo from config path', () => {
    const CONFIG_PATH = '/something';
    config.mocks.$config = {
      path: {
        base: '',
        images: CONFIG_PATH,
      },
    };
    const wrapper = mount(SingleCard, {
      propsData: {
        promise,
      },
    });

    const img = wrapper.find(`#single-card-${promise.id}-party-logo`);

    expect(img.attributes('src')).toEqual(
      `${CONFIG_PATH}/party/${promise.party}.jpg`
    );
  });

  test('should render party name', () => {
    const partyName = wrapper.find(`#single-card-${promise.id}-party-name`);

    expect(partyName.text()).toEqual(promise.party);
  });

  test('should render readmore text', () => {
    const readmore = wrapper.find(`#single-card-${promise.id}-readmore`);

    expect(readmore.text()).toEqual('อ่านเพิ่มเติม');
  });

  test('should render iconDown by default', () => {
    const up = wrapper.findComponent(IconUp);
    const down = wrapper.findComponent(IconDown);

    expect(down.exists()).toBeTruthy();
    expect(up.exists()).toBeFalsy();
  });

  test('should emit event on click', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.emitted('readmore')).toBeTruthy();
  });

  test('should render iconUp after click', () => {
    const up = wrapper.findComponent(IconUp);
    const down = wrapper.findComponent(IconDown);
    const button = wrapper.find('button');
    button.trigger('click');

    expect(up.exists()).toBeTruthy();
    expect(down.exists()).toBeFalsy();
  });

  test('should render sharer', () => {
    const status = wrapper.findComponent(WvSharer);

    expect(status).toBeTruthy();
  });

  //   test('should display thumbnail image', () => {
  //       const thumbnail = wrapper.find(`#single-card-${promise.id}-thumbnail`)

  //       expect(thumbnail.attributes('src')).toEqual()
  //   })
});
