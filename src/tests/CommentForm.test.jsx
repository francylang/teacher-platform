import React from 'react';
import ReactDOM from 'react-dom';
import CommentForm from '../components/CommentForm';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<CommentForm />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CommentForm />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a comment form container', () => {
    const comment = wrapper.find('.comment-form-containter');

    expect(comment.length).toEqual(1);
  });

  it('should render an aside to hold comment form directions', () => {
    const aside = wrapper.find('.comment-form-directions');

    expect(aside.length).toEqual(1);
  });

  it('should render a header for the form', () => {
    const header = wrapper.find('.comment-form-header');

    expect(header.length).toEqual(1);
  });

  it('should render directions for the form', () => {
    const directions = wrapper.find('.directions-text');

    expect(directions.length).toEqual(1);
  });

  it('should render a form', () => {
    const form = wrapper.find('.comment-form');

    expect(form.length).toEqual(1);
  });

  it('should render an input', () => {
    const input = wrapper.find('#get-comment');

    expect(input.length).toEqual(1);
  });

  it('should render a submit button', () => {
    const submit = wrapper.find('.submit-comment');

    expect(submit.length).toEqual(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
