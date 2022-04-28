import React from 'react'
import { render ,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import axiosMock from 'axios'
import App from './App'

jest.mock("axios");


describe('fetchLaunch', () => {
  const url='https://api.spacexdata.com/v4/launches/past';
  test('fetches data from api', () => {
    render(<App />);
    axiosMock.get.mockResolvedValueOnce({ data: { name: "vikas" ,details:"hello there",link:{ patch:{small:'abc.jpg' }}}});
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });

  it('returns api values',async()=>{
    const values = await
  })
 
});



