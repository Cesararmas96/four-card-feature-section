import React from 'react';
import styled from 'styled-components';

const HeaderConteiner = styled.div`
	text-align: center;
  margin: 40px auto;
  width: 85%;
	color: #4c4e61;


  @media (min-width: 900px){
    max-width: 470px;

  } 


`;

const Title = styled.div`
	font-size: 30px;
  font-family: "Poppins-ExtraLight";
	 @media (min-width: 900px){
		font-size: 31px;
  } 
`;

const SubTitle = styled.div`
  font-family: "Poppins-SemiBold";
	font-size: 30px;


	 @media (min-width: 900px){
		font-size: 31px;
  } 
`;

const Text = styled.div`
	margin-top: 16px;
  font-family: "Poppins-Light";
  color: #a3a5ae;

   @media (min-width: 900px){
		font-size: 15px;
  } 


`;


const Header = () => {
	return (
		<HeaderConteiner>
			<Title>Reliable, efficient delivery</Title>
			<SubTitle>Powered by Technology</SubTitle>

			<Text>Our Artificial Intelligence powered tools use millions of project data points 
		  	to ensure that your project is successful
			</Text>
		</HeaderConteiner>

		)
}

export default Header;