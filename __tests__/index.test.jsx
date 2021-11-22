/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /Welcome to Next\.js!/i
    })
    expect(heading).toBeInTheDocument()
  })

  it("getbyText Home", () => {
    const { getByText } = render(<Home />)
    expect(getByText('Get started by editing')).toBeInTheDocument()
  })
})
