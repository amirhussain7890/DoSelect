import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import ApiComponent from '../components/ApiComponent';

jest.mock('axios');

test('fetches and displays data', async () => {
  const data = [{ name: 'Test Item 1' }, { name: 'Test Item 2' }];
  axios.get.mockResolvedValue({ data });

  render(<ApiComponent />);

  expect(screen.getByText('API Data')).toBeInTheDocument();
  const items = await screen.findAllByRole('listitem');
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('Test Item 1');
  expect(items[1]).toHaveTextContent('Test Item 2');
});
