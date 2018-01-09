import React from 'react';
import ReactDOM from 'react-dom';
import DiscussionCard from '../components/DiscussionCard';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<DiscussionCard />', () => {
  let wrapper;
  let mockFn = jest.fn();
  let discussion = [{
    id: 1,
    tagTitle: "6.RP.A.1",
    title: "Unit Rate",
    body: "Didn't kids get this in Grade 5? I'm confused about why it's in the standards.",
  }];

  let comments = [
    {
      comments: [
        {
          id: 1,
          comment: "Yes but it's important",
          discussionId: 1,
        },
      ],
    }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <DiscussionCard
        discussion={discussion}
        comments={comments}
      />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a false default state', () => {
    expect(wrapper.state().displayingComment).toEqual(false);
    expect(wrapper.state().displayingCommentForm).toEqual(false);
  });

  it('should render a card', () => {
    const card = wrapper.find('.card');

    expect(card.length).toEqual(1);
  });

  it('should render a top-card section', () => {
    const topCard = wrapper.find('.top-card');

    expect(topCard.length).toEqual(1);
  });

  it('should render a card title container', () => {
    const title = wrapper.find('.card-title-container');

    expect(title.length).toBeDefined();
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
