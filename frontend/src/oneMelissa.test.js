// ===[ Importing Dependencies ]================================
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'




// ===[ Testing <HomeComp/> ]===============================
import MyConp from './myapp/03-LookBook'

describe('skajdfhksjdhf  inf dude ---', () => {
    Enzyme.configure({ adapter: new Adapter() })

    it('this test if the component ', () => {
        const Wrapper = Enzyme.shallow(<MyConp/>)
        expect.anything(Wrapper)
    })
})