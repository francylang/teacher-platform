import React from 'react';
import ReactDOM from 'react-dom';
import FilterSection from '../components/FilterSection';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<FilterSection />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<FilterSection />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a domain section', () => {
    const optionsContainer = wrapper.find('.domain-section');

    expect(optionsContainer.length).toEqual(1);
  });

  it('should render a button for each standard', () => {
    const btn = wrapper.find('.standard-link');

    expect(btn.length).toEqual(1);
  });

  it('should render text inside each button', () => {
    const text = wrapper.find('.standard-text');

    expect(text.length).toEqual(1);
  });

  it('should render a domain label container', () => {
    const container = wrapper.find('.domain-label-container');

    expect(container.length).toEqual(1);
  });

  it('should render a domain label', () => {
    const domainLabel = wrapper.find('.domain-label');

    expect(domainLabel.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
