import { mount } from '@vue/test-utils';
import DropdownItem from '@/components/dropdown-select/dropdown-item.vue';

describe('icon image', () => {
  test('should have icon image when url is present', () => {
    const ICON_URL = '/party/พลังประชารัฐ.jpg';
    const wrapper = mount(DropdownItem, {
      propsData: {
        option: {
          label: 'พลังประชารัฐ',
          iconUrl: ICON_URL,
        },
      },
    });

    const img = wrapper.find('img');

    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toContain(ICON_URL);
  });

  test('should NOT have icon image when url is NOT present', () => {
    const wrapper = mount(DropdownItem, {
      propsData: {
        option: {
          label: 'พลังประชารัฐ',
        },
      },
    });

    expect(wrapper.find('img').exists()).toBe(false);
  });
});

describe('header item', () => {
  const HEADER_OPTION = {
    isHeader: true,
    label: 'พรรคร่วมรัฐบาล',
  };

  test('should show header as bold', () => {
    const wrapper = mount(DropdownItem, {
      propsData: {
        option: HEADER_OPTION,
      },
    });

    expect(wrapper.element).toHaveClass('wv-font-semibold');
  });

  test('should NOT emit click event when click', () => {
    const wrapper = mount(DropdownItem, {
      propsData: {
        option: HEADER_OPTION,
      },
    });

    wrapper.find('div').trigger('click');

    expect(wrapper.emitted().click?.length).toBeFalsy();
  });
});

describe('non-header item', () => {
  const OPTION = {
    isHeader: false,
    label: 'ประชาธิปัตย์',
  };

  test('should have cursor as pointer when item is NOT a header', () => {
    const wrapper = mount(DropdownItem, {
      propsData: {
        option: OPTION,
      },
    });

    expect(wrapper.element).toHaveClass('cursor-pointer');
  });

  test('should emit click event when click on element', () => {
    const wrapper = mount(DropdownItem, {
      propsData: {
        option: OPTION,
      },
    });

    wrapper.find('div').trigger('click');

    expect(wrapper.emitted().click![0]).toEqual([OPTION.label]);
  });
});
