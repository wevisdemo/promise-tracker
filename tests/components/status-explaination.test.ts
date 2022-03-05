import { mount } from '@vue/test-utils';
import ProcessFlowchart from '@/components/process-flowchart.vue';
import StatusExplaination from '@/components/status-explaination.vue';

test('renders flowchart component', () => {
  const wrapper = mount(StatusExplaination);
  const flowchart = wrapper.getComponent(ProcessFlowchart);
  expect(flowchart).toBeTruthy();
});
