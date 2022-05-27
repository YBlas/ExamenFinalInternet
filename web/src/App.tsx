import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './containers/Layout';
import { Header } from './containers/Header';
import { Options } from './containers/Options';
import { ShowOff } from './containers/ShowOff';
import { BotonOpcion, InputB } from './styles/emotion';
import { Personajes } from './components/Personajes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Indexado } from './components/Indexado';
import { PersonajesAlfabeticos } from './components/PersonajesAlfabeticos';
import { PersonajesName } from './components/PersonajesName';
import { PersonajesFiltro } from './components/PersonajesFiltro';

const App: FC = () => {

  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  const [showPersonajesStandard, setShowPersonajesStandard] = useState<boolean>(false);
  const [showPersonajesAlafabeticos, setShowPersonajesAlfabeticos] = useState<boolean>(false);
  const [showPersonajesNombre, setShowPersonajesNombre] = useState<boolean>(false);
  const [showPersonajesFiltro, setShowPersonajesFiltro] = useState<boolean>(false);
  const [actualPage, setactualPage] = useState<number>(1);
  const [actualName, setactualName] = useState<string>("");
  const [actualSatatus, setactualSatatus] = useState<string>("");
  const [actualGender, setactualGender] = useState<string>("");

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Header>
          <img src={require("./media/background.png")} className="Background"></img>
          <img src={require("./media/foreground.png")} className="Foreground"></img>
          <h1 className='title'>Welcome to the exam!</h1>
        </Header>
        <Options>
          <BotonOpcion onClick={() => {
            setShowPersonajesStandard(true);
            setShowPersonajesAlfabeticos(false);
            setShowPersonajesNombre(false);
            setShowPersonajesFiltro(false);
          }}>Standard</BotonOpcion>
          <BotonOpcion onClick={() => {
            setShowPersonajesStandard(false);
            setShowPersonajesAlfabeticos(true);
            setShowPersonajesNombre(false);
            setShowPersonajesFiltro(false);
          }}>Alfabetico</BotonOpcion>
          <BotonOpcion onClick={() => {
            setShowPersonajesStandard(false);
            setShowPersonajesAlfabeticos(false);
            setShowPersonajesNombre(false);
            setShowPersonajesFiltro(true);
          }}>Filtro Completo</BotonOpcion>
          <BotonOpcion onClick={() => {
            setShowPersonajesStandard(false);
            setShowPersonajesAlfabeticos(false);
            setShowPersonajesNombre(true);
            setShowPersonajesFiltro(false);
          }}>Solo Filtro Nombre</BotonOpcion>
        </Options>
        <ShowOff>
          {showPersonajesStandard && <div>
            <Personajes page={actualPage} />
            <Indexado changePage={setactualPage} page={actualPage}></Indexado>
          </div>}
          {showPersonajesAlafabeticos && <div>
            <PersonajesAlfabeticos page={actualPage} />
            <Indexado changePage={setactualPage} page={actualPage}></Indexado>
          </div>}
          {showPersonajesNombre && <div>
            <InputB onChange={(e) => setactualName(e.target.value)}></InputB>
            <PersonajesName page={actualPage} name={actualName} />
            <Indexado changePage={setactualPage} page={actualPage}></Indexado>
          </div>}
          {showPersonajesFiltro && <div>
            <p>Name</p>
            <InputB onChange={(e) => setactualName(e.target.value)}></InputB>
            <p>Status: unknown, alive, dead</p>
            <InputB onChange={(e) => setactualSatatus(e.target.value)}></InputB>
            <p>Gender: Male, Female</p>
            <InputB onChange={(e) => setactualGender(e.target.value)}></InputB>
            <PersonajesFiltro page={actualPage} name={actualName} status={actualSatatus} gender={actualGender} />
            <Indexado changePage={setactualPage} page={actualPage}></Indexado>
          </div>}
        </ShowOff>
      </Layout>
    </ApolloProvider>
  )
}

export default App;
