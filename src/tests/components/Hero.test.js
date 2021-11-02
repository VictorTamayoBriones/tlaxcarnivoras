import React from 'react';
import { shallow } from 'enzyme'
import Hero from '../../components/Hero/index';

describe('Test over the component <Hero/>', () => {
    
    test('should show correctly the component', () => {
        
        const wrapper = shallow( <Hero/> )
        expect( wrapper ).toMatchSnapshot();

    })

})
