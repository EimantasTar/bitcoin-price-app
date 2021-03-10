import * as React from 'react'
import Header from '../Header';
import { shallow } from 'enzyme';
import { Paths } from '../../utils/constants/Paths';


const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush
    }),
}));

const { CURRENCIES_PATH, ANALYSIS_PATH } = Paths;

describe('Header', () => {
    test('renders', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toBeTruthy();
    });

    test('link to Currencies screen works', () => {
        const wrapper = shallow(<Header />);
        const target = wrapper.find('WithStyles(ForwardRef(Link))').at(0);
        target.simulate('click');
        expect(mockHistoryPush).toHaveBeenCalledTimes(1);
        expect(mockHistoryPush).toHaveBeenCalledWith(CURRENCIES_PATH);
    });

    test('link to Analysis screen works', () => {
        const wrapper = shallow(<Header />);
        const target = wrapper.find('WithStyles(ForwardRef(Link))').at(1);
        target.simulate('click');
        expect(mockHistoryPush).toHaveBeenCalledTimes(1);
        expect(mockHistoryPush).toHaveBeenCalledWith(ANALYSIS_PATH);
    });
});
