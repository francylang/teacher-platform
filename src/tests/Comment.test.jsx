import React from 'react';
import ReactDOM from 'react-dom';
import COmment from '../components/COmment';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<COmment />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<COmment />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a card section', () => {
    const card = wrapper.find('.card-section');

    expect(card.length).toEqual(1);
  });

  it('should render a card section title', () => {
    const title = wrapper.find('.current-feed-title');

    expect(title.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
