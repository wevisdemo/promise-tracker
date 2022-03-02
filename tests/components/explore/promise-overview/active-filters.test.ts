import { mount } from '@vue/test-utils';
import ActiveFilters from '@/components/explore/promise-overview/active-filters.vue';
import FilterChip from '@/components/explore/promise-overview/filter-chip.vue';
import promises from '@/data/promises-example.json';
import { FilterType, Filter } from '@/models/filter';

test('should render promises count', () => {
  const wrapper = mount(ActiveFilters, { propsData: { promises } });

  const countLabel = wrapper.getComponent({ ref: 'countLabel' });

  expect(countLabel.text()).toBe(`${promises.length} คำสัญญา`);
});

test('should render FilterChip from given filters', () => {
  const filters = [
    {
      type: FilterType.Party,
      value: 'พลังประชารัฐ',
    },
    {
      type: FilterType.Keyword,
      value: 'รถเมล์',
    },
  ];

  const wrapper = mount(ActiveFilters, { propsData: { filters } });

  const filterChips = wrapper.findAllComponents(FilterChip);

  expect(filterChips.length).toBe(filters.length);
  expect(wrapper.text().includes('จากทุกพรรค ในทุกประเด็น')).toBeFalsy();
});

test('should render จากทุกพรรค ในทุกประเด็น text if filters is empty', () => {
  const filters: Filter[] = [];

  const wrapper = mount(ActiveFilters, { propsData: { filters } });

  const filterChips = wrapper.findAllComponents(FilterChip);

  expect(filterChips.length).toBe(filters.length);
  expect(wrapper.text().includes('จากทุกพรรค ในทุกประเด็น')).toBeTruthy();
});
