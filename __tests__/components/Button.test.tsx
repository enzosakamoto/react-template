import React from 'react'

import Button from '../../src/components/Button'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('<Button>', () => {
  it('should render a button', () => {
    const { getByText, getByRole } = render(<Button>Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByText('Click me')).toHaveClass(
      'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-blue-600 hover:bg-blue-700'
    )
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should render a button with a primary color', () => {
    const { getByText } = render(<Button color="primary">Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByText('Click me')).toHaveClass(
      'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-green-600 hover:bg-green-700'
    )
  })

  it('should render a button with a secondary color', () => {
    const { getByText } = render(<Button color="secondary">Click me</Button>)

    expect(getByText('Click me')).toBeInTheDocument()
    expect(getByText('Click me')).toHaveClass(
      'font-medium w-24 py-2 px-4 rounded transition-all duration-500 text-white drop-shadow-md bg-red-600 hover:bg-red-700'
    )
  })
})
