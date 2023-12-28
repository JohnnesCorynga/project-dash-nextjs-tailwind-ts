import type { Metadata } from 'next'
import { AuthProvider } from  '../context/Auth'
import { Inter, Amiko, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter'
})
const roboto = Roboto({ 
  subsets: ['latin'], 
  display: 'swap',
  weight: ['400','500','700','900'],
  variable: '--font-roboto'
})
const amiko = Amiko({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-amiko'
})
export const metadata: Metadata = {
  title: 'Manager IRPF',
  description: 'Manager users/clients program IRPF',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
        <AuthProvider >
          <body className={`${inter.variable} ${roboto.variable} ${amiko.variable}`}>
            {children}
          </body>
        </AuthProvider>
      </html>
  )
}
