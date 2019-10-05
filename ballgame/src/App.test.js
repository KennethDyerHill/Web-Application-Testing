import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library-react';
import Display from './components/Display'
import Dashboard from './components/Dashboard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('verify if balls and strikes are present', () => {
  // Arrange
  const container = render(<App />)

  // Act, Assert(if finds elements)
  container.getByText('Balls')
  container.getByText('Strikes')
  // Assert if ^ is truthy
})
