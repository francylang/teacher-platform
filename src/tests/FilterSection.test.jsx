import React from 'react';
import ReactDOM from 'react-dom';
import FilterSection from '../components/FilterSection';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<FilterSection />', () => {
  let wrapper;
  let mockFn = jest.fn();

  let discussions = [
    {
      id: 1,
      tagTitle: "6.RP.A.1",
      discussions: [
        {
          tagTitle: "6.RP.A.1",
          title: "Unit Rate",
          body: "Didn't kids get this in Grade 5? I'm confused about why it's in the standards.",
        },
      ],
    },
  ];

  let domainArray = ["Ratios & Proportions", "6.RP.A.1", "6.RP.A.2", "6.RP.A.3", "6.RP.A.3.A", "6.RP.A.3.B", "6.RP.A.3.C"];

  let renderFilteredDiscussions = mockFn;
  let renderDiscussions = mockFn;

  beforeEach(() => {
    wrapper = shallow(
      <FilterSection
        renderDiscussions={renderDiscussions}
        renderFilteredDiscussions={renderFilteredDiscussions}
        domain={domainArray}
        discussions={discussions}/>);
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

    expect(btn.length).toEqual(6);
  });

  it('should render text inside each button', () => {
    const text = wrapper.find('.standard-text');

    expect(text.length).toEqual(6);
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
});
