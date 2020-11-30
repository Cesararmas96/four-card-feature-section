import React from 'react'
import styled from 'styled-components';

const Card = styled.div `
	margin: 10px;
	box-shadow: 2px 3px 20px 0px #00000045;
	border-radius: 8px;
  overflow: hidden;
  max-width: 288px;
  height: 190px;

  @media (min-width: 900px){

		&:nth-child(1){
			grid-row: 2;

		}

		&:nth-child(2){
			grid-column: 2;
		
		}

		&:nth-child(3){
			grid-row: 3;
			grid-column: 2;
		}

		&:nth-child(4){
			grid-row: 2;
			grid-column: 3;
		}

	}
`;

const Title = styled.div`
  font-family: "Poppins-SemiBold";
	color: #4c4e61;
	font-size: 16px;


`;

const Description = styled.div`
	color: #a3a5ae;
	font-size: 12px;

`;

const BorderTop = styled.div`
	background-color: ${props => props.color};
	width: 100%;
	height: 3px;
`;

const Content = styled.div`
	padding: 20px 26px;
	height: 100%;

`;

const Image = styled.img`
	width: 18%;
	top: 30%;
	float: right;
	position: relative;


`;


const CardFeature = ({ title, description, color, icon }) => {
    return (
      <Card>
      	<BorderTop color={color}></BorderTop>
      	<Content>
					<Title>{title}</Title>	
					<Description>
						{description}
					</Description>

					<Image src={icon} alt="icon"/>
      	</Content>
		</Card>
    )
}

export default CardFeature;