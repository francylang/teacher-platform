import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../components/CardContainer';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<CardContainer />', () => {
  let wrapper;
  let mockFn = jest.fn();
  let filteredDiscussions = [
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
  let comments = [
    {
      comments: [
        {
          body: "Yes but it's important",
        },
        {
          body: "Here is a link to the progression docs: LINK",
        },
      ],
    }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <CardContainer
        filteredDiscussions={filteredDiscussions}
        comments={comments}
      />
    );
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a card section', () => {
    const card = wrapper.find('.card-section');

    expect(card.length).toEqual(1);
  });

  it('should render a card section title', () => {
    const title = wrapper.find('.discussions-heading');

    expect(title.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
