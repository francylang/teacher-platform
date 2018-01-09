import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<App />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a false default state', () => {
    expect(wrapper.state().filteredDiscussions).toEqual([]);
    expect(wrapper.state().showingDiscussions).toEqual(true);
    expect(wrapper.state().showingForm).toEqual(false);
    expect(wrapper.state().showingStandards).toEqual(false);
  });

  it('should render a main section', () => {
    const main = wrapper.find('.main');

    expect(main.length).toEqual(1);
  });

  it('should render a bottom main section', () => {
    const bottomMain = wrapper.find('.bottom-main');

    expect(bottomMain.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
