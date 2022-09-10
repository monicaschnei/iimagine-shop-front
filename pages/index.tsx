import type { NextPage } from 'next'
import type { GetServerSideProps } from 'next'
import  Header from "../components/Header";
import Footer from "../components/Footer";
import styled from 'styled-components';
import Banner from '../components/Banner';
import BannerImage from '../public/images/banner.png'
import Products from '../components/Products'

export const getServerSideProps: GetServerSideProps = async () => {
  const api = "https://imagineschoool.herokuapp.com";
  const result = await fetch(`${api}/products`);
  const data = await result.json();
  
  return {
    props: {
        productsApi:data
    }
  }
};


const Home: NextPage = ({productsApi}:any) => {
  return (
    <Main>
      <Banner image={BannerImage} width={1440} heigth={325}/> 
      <Products products={productsApi}/>
    </Main>
  )
}

const Main = styled.main`
    min-height:  60vh;
`;

export default Home
