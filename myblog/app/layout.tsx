import Layout from '../components/layout/layout'
import { LayoutProps } from '../types/props'
import './globals.css'

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default RootLayout
