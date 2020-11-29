import React from 'react';
import Helmet from 'react-helmet';
import {Global, css } from '@emotion/core';
import Header from './header';
import Footer from './footer';
import useSeo from '../hooks/use-seo';

const Layout = ({children}) => {

  const seo = useSeo();
  //console.log(seo);

  const { siteName, fallbackSeo: { description, title }} = seo; 
  

  return (
    <>
      <Global 
        styles={css`
        html {
          font-size:62.5%;
          box-sizing: border-box;
        }
        *, *:before, *:after{
          box-sizing: inherit;
        }

        h1,h2,h3 {
          margin: 0;
          line-height: 1.5;
        }
        h1,h2{
          font-family: 'Roboto', serif;
        }
          h3{
            font-family: 'PT Sans', sans-serif;
          }
          ul{
            list-style: none;
            margin: 0;
            padding:0;
          }
          body {
            font-size: 18px;
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
          }
        `}
      />

    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,400;1,300&display=swap" rel="stylesheet" />

    </Helmet>
    <Header />
        { children }
        <Footer 
          title={title}
        />
    </>

  );
};

export default Layout;