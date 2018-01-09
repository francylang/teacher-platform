import React from 'react';
import ReactDOM from 'react-dom';
import FilterForm from '../components/FilterForm';
import { shallow } from 'enzyme';
import testSetup from './testSetup';

describe('<FilterForm />', () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<FilterForm />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a default state', () => {
    expect(wrapper.state().showingMath6).toEqual(true);
    expect(wrapper.state().showingMath7).toEqual(false);
    expect(wrapper.state().showingMath8).toEqual(false);
  });

  it('should render a filter-section', () => {
    const section = wrapper.find('.filter-section');

    expect(section.length).toEqual(1);
  });

  it('should render a button container', () => {
    const btnContainer = wrapper.find('.grade-btn-container');

    expect(btnContainer.length).toEqual(1);
  });

  it('should render 3 grade buttons', () => {
    const gradeBtn = wrapper.find('.grade-btn');

    expect(gradeBtn.length).toEqual(3);
  });

  it('should render 1 selected grade button', () => {
    const selected = wrapper.find('.grade-selected');

    expect(selected.length).toEqual(1);
  });

  it('should render an options container', () => {
    const optionsContainer = wrapper.find('.options-container');

    expect(optionsContainer.length).toEqual(1);
  });

  it('should render 3 options', () => {
    const options = wrapper.find('.options');

    expect(options.length).toEqual(3);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
