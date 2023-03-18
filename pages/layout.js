import '../../styles/globals.css'

export const metadata = {
  title: 'AiFy',
  description: 'The next step into the future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
