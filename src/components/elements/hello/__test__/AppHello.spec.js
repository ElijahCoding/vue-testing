import { mount } from '@vue/test-utils'
import AppHello from '../AppHello'

describe('test', () => {
    it('works', () => {
        let wrapper = mount(AppHello)

        expect(wrapper.html()).toContain('Hello')
    })
})
