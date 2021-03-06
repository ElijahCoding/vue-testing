import { mount } from '@vue/test-utils'
import AppReveal from '../AppReveal'

describe('AppReveal', () => {
    it('renders the text on click', () => {
        let wrapper = mount(AppReveal, {
            propsData: {
                text: 'Hello'
            }
        })

        wrapper.find('a').trigger('click')

        expect(wrapper.html()).toContain('Hello')
        expect(wrapper.html()).not.toContain('Click here')
        expect(wrapper.find('a').exists()).toBe(false)
    })
})
