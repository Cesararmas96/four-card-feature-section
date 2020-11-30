import React from 'react'
import CardConteiner from './conteiner/CardConteiner'
import Header from './components/Header'
import styled from 'styled-components';

const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fafafa;
`;

const App = () => {
  return (
      <Main>
      	<Header/>
      	<CardConteiner/>
      </Main>

    )
}
export default App;