import { mount } from '@vue/test-utils';
import ActiveFilters from '@/components/explore/promise-overview/active-filters.vue';
import promises from '@/data/promises-example.json';

test('should render promises count', () => {
  const wrapper = mount(ActiveFilters, { propsData: { promises } });

  const countLabel = wrapper.getComponent({ ref: 'countLabel' });

  expect(countLabel.text()).toBe(`${promises.length} คำสัญญา`);
});
