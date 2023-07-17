import React from 'react'
import { LayoutProps } from '../../types/props'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
