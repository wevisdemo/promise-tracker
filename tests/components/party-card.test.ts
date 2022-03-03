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

  test('should show party name', async () => {
    const PARTY_NAME = 'รวมพลังประชาชาติไทย';
    await wrapper.setProps({ partyName: PARTY_NAME });

    const partyCard = wrapper.get('.h11');

    expect(partyCard.text()).toBe(PARTY_NAME);
  });

  test('should link to the given url', async () => {
    const URL_TEXT = '/explore?party-name=รวมพลังประชาชาติไทย';
    await wrapper.setProps({ partyLink: URL_TEXT });

    const routerLink = wrapper.get('nuxtlink-stub');

    expect(routerLink.attributes().to).toBe(URL_TEXT);
  });
});
