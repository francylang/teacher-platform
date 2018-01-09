import React from 'react';
import ReactDOM from 'react-dom';
import DiscussionCard from '../components/DiscussionCard';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<DiscussionCard />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<DiscussionCard />);
  });

  it.only('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a false default state', () => {
    expect(wrapper.state().displayingComment).toEqual(false);
  });

  it('should render a card', () => {
    const card = wrapper.find('.card');

    expect(card.length).toEqual(1);
  });

  it('should render a top-card section', () => {
    const topCard = wrapper.find('.top-card');

    expect(topCard.length).toEqual(1);
  });

  it('should render a card title', () => {
    const title = wrapper.find('.card-title');

    expect(title.length).toBeDefined();
  });

  it('should render a card body', () => {
    const body = wrapper.find('.card-body');

    expect(body.length).toBeDefined();
  });

  it('should render a button', () => {
    const button = wrapper.find('.show-more-btn');

    expect(button.length).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
