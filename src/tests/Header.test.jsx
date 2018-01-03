import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<Header />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a header', () => {
    const header = wrapper.find('header');

    expect(header.length).toEqual(1);
  });

  it('should render an app name', () => {
    const name = wrapper.find('.app-name');

    expect(name.length).toEqual(1);
  });

  it('should render a sign out link', () => {
    const signOut = wrapper.find('.sign-out');

    expect(signOut.length).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
