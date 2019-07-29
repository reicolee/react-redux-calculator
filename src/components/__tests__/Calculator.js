import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { shallow, mount } from 'enzyme';

import Calculator from '../Calculator';
import Display from '../Display';
import StyledButton from '../StyledButton';

import rootReducer from '../../reducers';
import renderer from 'react-test-renderer';

describe('<Calculator /> renders properly', () => {
  let store;
  let elements;
  let wrapper;

  beforeAll(() => {
    store = createStore(rootReducer, applyMiddleware(thunk));
    elements = (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
    wrapper = mount(elements);
  });

  it('match snapshot', () => {
    const component = renderer.create(elements);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a Display Component', () => {
    expect(wrapper.find(Display).length).toBe(1);
  });

  it('renders 20 StyledButton Components', () => {
    expect(wrapper.find(StyledButton).length).toBe(20);
  });
});

describe('Test StyledButton Component', () => {
  it('match snapshot', () => {
    const handleClick = jest.fn();
    const component = renderer.create(
      <StyledButton handleClick={handleClick}>7</StyledButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('simulates click events', () => {
    const handleClick = jest.fn();
    const button = mount(
      <StyledButton handleClick={handleClick}>7</StyledButton>
    );

    button.find('button').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
