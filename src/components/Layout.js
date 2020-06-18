import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { Grommet, Anchor, Box, Text, Nav } from "grommet"
import { materialLight } from "grommet/themes"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <Grommet
      theme={materialLight}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
    <Nav direction="row" background="brand" pad="medium">
      <Anchor hoverIndicator>Home</Anchor>
      <Anchor hoverIndicator>About</Anchor>
      <Anchor hoverIndicator>Blog</Anchor>
    </Nav>
    <Box  animation="fadeIn" direction="row" height="medium">
    
    <Box 
      border={{ color: 'brand', size: 'large' }}
      pad="medium"
      
      background="brand"
      fill="vertical"
      flex="shrink"
      justify="center"
    >
      <Text size="medium" weight="bold">Aruba</Text>
    </Box>
    <Box 
      border={{ color: 'brand', size: 'large' }}
      pad="medium"
      justify="center"
    >
      <Text size="medium" color="brand" weight="bold">Testing</Text>
    </Box>
    </Box>
    <Box>
    
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
      </Box>
    </Grommet>
  )
}

export default TemplateWrapper
