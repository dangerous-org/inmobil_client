import { test } from 'vitest'
import { JSDOM } from 'jsdom'
import SignInPage from "../pages/Auth/SignIn-Page";

test('verifica que "Welcome To Inmobil" se renderiza en SignInPage', async () => {

  global.document = dom.window.document
  global.window = dom.window

  render(<SignInPage />)


  const textElement = screen.getByText(/Welcome To Inmobil/i)


  expect(textElement).toBeInTheDocument()
})
