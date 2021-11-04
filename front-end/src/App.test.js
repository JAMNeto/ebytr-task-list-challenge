import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verify the existence of "insert a new task" form', () => {
  render(<App />);
  const newTaskForm = screen.getByTestId('taskForm');
  expect(newTaskForm).toBeInTheDocument();
});
