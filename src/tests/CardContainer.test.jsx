import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../components/CardContainer';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<CardContainer />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CardContainer />);
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
});
