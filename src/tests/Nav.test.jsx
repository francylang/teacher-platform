import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/Nav';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<Nav />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Nav />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
  
  it('should render a nav', () => {
    const nav = wrapper.find('.nav');

    expect(nav.length).toEqual(1);
  });

  it('should render 3 buttons', () => {
    const button = wrapper.find('button');

    expect(button.length).toEqual(3);
  });

  it('should render 3 h4s', () => {
    const h4 = wrapper.find('h4');

    expect(h4.length).toEqual(3);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
