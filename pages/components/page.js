import React from 'react';
import PropTypes from 'proptypes';
import Head from 'next/head';

const Page = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet" />
    </Head>
    <style global jsx>{`
      body, html {
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        letter-spacing: -0.05rem;
      }
      a {
        color: #B54A37;
        text-decoration: none;
        font-weight: bold;
        transition: all 0.1s ease-in;
      }
      a:hover, a:active {
        color: #EB3E4A;
        text-decoration: underline;
      }
      p, ul {
        margin: 0.5rem 0;
      }
      li {
        position: relative;
        list-style: none;
      }
      li:before {
        position: absolute;
        left: -1.2rem;
        top: 0;
        content: "*";
      }
      h1 {
        margin: 1rem 0;
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: 0.5rem;
        text-align: center;
      }
      h2 {
        margin: 0.75rem 0;
        font-size: 1em;
      }
    `}</style>
    <style jsx>{`
      div {
        padding: 0 5vw;
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
    `}</style>
    {props.children}
  </div>
);
Page.propTypes = {
  children: PropTypes.node,
};

export default Page;