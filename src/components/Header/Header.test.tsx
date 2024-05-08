import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Header from './index'

describe('Header', () => {
  test('renders title prop as passed in', () => {
    const title = 'test title'
    render(<Header title={title} />)

    const heading = screen.getByRole('heading', { name: title })

    expect(heading).toBeInTheDocument()
  })
})
