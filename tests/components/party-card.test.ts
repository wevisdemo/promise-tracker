import { mount } from '@vue/test-utils';
import PartyCard from '../../components/party-card.vue';

describe('party card', () => {
  let wrapper = mount(PartyCard, {
    stubs: {
      NuxtLink: true,
    },
  });
  beforeEach(() => {
    wrapper = mount(PartyCard, {
      stubs: {
        NuxtLink: true,
      },
    });
  });

  test('should render party name', async () => {
    const PARTY_NAME = 'รวมพลังประชาชาติไทย';
    await wrapper.setProps({ partyName: PARTY_NAME });

    const partyCard = wrapper.get('.h11');

    expect(partyCard.text()).toBe(PARTY_NAME);
  });

  test('should link to the given url', async () => {
    const URL_TEXT = '/explore?party-name=รวมพลังประชาชาติไทย';
    await wrapper.setProps({ buttonUrl: URL_TEXT });

    const routerLink = wrapper.get('nuxtlink-stub');

    expect(routerLink.attributes().to).toBe(URL_TEXT);
  });

  test('should show sum of promises', () => {
    const PROMISES_COUNT = '0 คำสัญญา';

    const partyCard = wrapper.get('.party-promises');

    expect(partyCard.text()).toBe(PROMISES_COUNT);
  });
});
