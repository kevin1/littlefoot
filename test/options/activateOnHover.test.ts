import littlefoot from '../../src'
import { setDocumentBody, waitForChange, getButton } from '../helper'
import { fireEvent } from '@testing-library/dom'

test('activate on hover', async () => {
  setDocumentBody('single.html')
  littlefoot({ activateDelay: 1, activateOnHover: true, hoverDelay: 1 })

  const button = getButton('1')
  fireEvent.mouseOver(button)
  await waitForChange(button)

  expect(button).toHaveClass('is-active')
})
