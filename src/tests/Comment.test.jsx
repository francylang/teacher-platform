import React from 'react';
import ReactDOM from 'react-dom';
import Comment from '../components/Comment';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<Comment />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Comment />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a comment section', () => {
    const comment = wrapper.find('.comment-section');

    expect(comment.length).toEqual(1);
  });

  it('should render a comment header', () => {
    const header = wrapper.find('.comments-header');

    expect(header.length).toEqual(1);
  });

  it('should render comments', () => {
    const comment = wrapper.find('.comment');

    expect(comment.length).toBeDefined();
  });

  it('should render a list with comment info', () => {
    const list = wrapper.find('ul');

    expect(list.length).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
