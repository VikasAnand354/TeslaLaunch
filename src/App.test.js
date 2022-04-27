import React from 'react'
import { act, render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import axiosMock from 'axios'
import App from './App'

jest.mock("axios");

describe('App', () => {
  test('fetches data from api', () => {
    render(<App />);
    const url='https://api.spacexdata.com/v4/launches/past';
    axiosMock.get.mockResolvedValueOnce({ data: { name: "vikas" ,details:"hello there",image:"abc.jpg"}});//this is not working 
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  })
})
