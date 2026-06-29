import './globals.css'

export const metadata = {
  title: 'ShieldHold - Instagram Creator Management',
  description: 'Professional Instagram account management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
