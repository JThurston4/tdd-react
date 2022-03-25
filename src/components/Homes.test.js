import { act, getAllByTestId, getByTestId, render } from '@testing-library/react';
import React from 'react';
import apiClient from '../services/apiClient';
import Homes from './Homes';

let container = null;

beforeEach(async () => {
  jest.spyOn(apiClient, 'getHomes').mockImplementation(() => {
    return Promise.resolve([
      {
        title: "test home 1",
        image: "listing.jpeg",
        location: "test location 1",
        price: "1"
      },
      {
        title: "test home 2",
        image: "listing.jpeg",
        location: "test location 2",
        price: "2"
      },
      {
        title: "test home 3",
        image: "listing.jpeg",
        location: "test location 3",
        price: "3"
      },
      {
        title: "test home 4",
        image: "listing.jpeg",
        location: "test location 4",
        price: "4"
      }
    ])
  })

  container = render(<Homes />).container;

  await act(async () => {});
})

it(`should show homes`, () => {

  const homes = getAllByTestId(container, 'home');
  expect(homes.length).toBeGreaterThan(0);
});

