import { mount } from '@vue/test-utils'
import AppHeader from '../AppHeader'

describe('AppHeader', () => {
    it('renders out the header text', () => {
        let wrapper = mount(AppHeader, {
            propsData: {
                text: 'Home'
            }
        })

        expect(wrapper.html()).toContain('Home')
    })
})
