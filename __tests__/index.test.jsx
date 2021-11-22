/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading',  async () => {
    render(<Home />)

    await waitFor(() => screen.getByText('Welcome to Next.js!'))
    console.log(111,waitFor);
  })
})
