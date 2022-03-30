import { act, getAllByTestId, getByTestId, getNodeText, render } from '@testing-library/react';
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

it(`should show home title`, () => {

  const homeTitles = getAllByTestId(container, 'home-title');
  expect(getNodeText(homeTitles[0])).toBe("test home 1");
});

it(`should show home image`, () => {

  const homeImages = getAllByTestId(container, 'home-image');
  expect(homeImages[0]).toBeTruthy();
});

it(`should show home location`, () => {

  const homeLocations = getAllByTestId(container, 'home-location');
  expect(getNodeText(homeLocations[0])).toBe('test location 1');
});

it(`should show home price`, () => {

  const homePrices = getAllByTestId(container, 'home-price');
  expect(getNodeText(homePrices[0])).toBe('$1/night');
});

it(`should show home booking button`, () => {

  const homeBookingBtns = getAllByTestId(container, 'home-booking-btn');
  expect((homeBookingBtns[0])).toBeTruthy();
});