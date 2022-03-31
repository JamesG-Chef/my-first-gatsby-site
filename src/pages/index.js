
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm following the Gatsby tutuorial</p> 
      <StaticImage
        alt="Hellboy"
      src="../images/BadUrlCat.png"/>
    </Layout>
     
    
  );
};

export default IndexPage;