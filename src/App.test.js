import React from 'react';
import '@testing-library/jest-dom';
import {render, waitFor, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';
import TodoForm from '../src/ToDo/TodoForm';

it('renders App without crashing', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Todos App/i)).toBeInTheDocument();
});

it('renders TodoForm without crashing', () => {
  const todo = render(<TodoForm />);
  expect(todo).not.toBe(null);
});

it('able to add a todo task', () => {

  const { getByRole, getByText } = render(<App />);
  userEvent.type(screen.getByRole('textbox'), 'Hello World!');
  expect(getByRole('textbox')).toHaveValue('Hello World!');

  userEvent.type(screen.getByRole('textbox'), '{enter}');
  expect(getByText(/Hello World!/i)).toBeInTheDocument();
  expect(getByRole('button', {name: /Delete/i})).toBeInTheDocument();

});

it('able to delete a todo task', () => {

  const { getByRole, getByText, queryByText, queryByRole } = render(<App />);
  userEvent.type(screen.getByRole('textbox'), 'Hello World!');
  expect(getByRole('textbox')).toHaveValue('Hello World!');

  userEvent.type(screen.getByRole('textbox'), '{enter}');
  expect(getByText(/Hello World!/i)).toBeInTheDocument();
  expect(getByRole('button', {name: /Delete/i})).toBeInTheDocument();

  userEvent.click(getByRole('button', {name: /Delete/i}));

  const task = queryByText(/Hello World!/i);
  expect(task).toBe(null);

  const button = queryByRole('button', {name: /Delete/i});
  expect(button).toBe(null);
});

// default simple non related tests
test('type some text', () => {
  render(<textarea />)
  userEvent.type(screen.getByRole('textbox'), 'Hello,{enter}World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello,\nWorld!')
})
