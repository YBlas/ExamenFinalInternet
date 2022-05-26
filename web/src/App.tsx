import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './containers/Layout';
import { Header } from './containers/Header';
import { Options } from './containers/Options';
import { ShowOff } from './containers/ShowOff';
import { BotonOpcion } from './styles/emotion';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const App:FC=()=>{
  return (
    <Layout>
      <Header>
        <img src={require("./media/background.png")} className="Background"></img>
        <img src={require("./media/foreground.png")} className="Foreground"></img>
        <h1 className='title'>Welcome to the exam!</h1>
      </Header>
      <Options>
        <BotonOpcion>Primero</BotonOpcion>
        <BotonOpcion>Segundo</BotonOpcion>
        <BotonOpcion>Tercero</BotonOpcion>
      </Options>
      <ShowOff>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt accusantium non tenetur veniam voluptate eligendi cumque illum odio voluptas asperiores ducimus recusandae, placeat, nam eaque. Necessitatibus reprehenderit facere ducimus itaque, accusantium natus deserunt beatae tempora voluptas, architecto quia voluptates repudiandae sit, fuga aut temporibus iste nesciunt veniam animi. Enim quaerat explicabo, ipsa inventore, ullam ipsum sunt corrupti dolorem nihil obcaecati, non praesentium. Magnam recusandae repellendus nesciunt debitis eveniet! Tempore sint ipsum, perspiciatis cum voluptatem iure sed repellendus, tempora unde natus voluptates ratione. Harum repudiandae minus voluptates temporibus animi officiis quisquam voluptatem iusto provident. Possimus aliquid inventore sit eveniet repellat cumque.</p>
      </ShowOff>
    </Layout>
  )
}

export default App;
