import { mount } from '@vue/test-utils';
import PartyCard from '../../components/party-card.vue';

test('should party name', () => {
  const PARTY_NAME = 'รวมพลังประชาชาติไทย';
  const wrapper = mount(PartyCard, { propsData: { partyName: PARTY_NAME } });

  const partyCard = wrapper.get('.h11');

  expect(partyCard.text()).toBe(PARTY_NAME);
});
