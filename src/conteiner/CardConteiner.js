import React from 'react';
import { CardFeature } from '../components';
import iconSupervisor from '../assets/image/icon-supervisor.svg'
import iconKarma from '../assets/image/icon-karma.svg'
import iconTeamBuilder from '../assets/image/icon-team-builder.svg'
import iconCalculator from '../assets/image/icon-calculator.svg'
import styled from 'styled-components';

const CardFeactureConteiner = styled.div`
	margin-bottom: 40px;

	@media (min-width: 900px){
		width: 947px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: repeat(4, 110px);
		grid-auto-flow: column;

	}
`;

const CardConteiner = () => {
    return (
        <CardFeactureConteiner>
			
			<CardFeature
				title="Supervisor"
				description="Monitors activity to identify project roadblocks"
				color="#45d3d3"
				icon={iconSupervisor}
			/>

			<CardFeature
				title="Team Builder"
				description="Scans our talent network to create the optimal team for your project"
				color="#ea5353"
				icon={iconTeamBuilder}
			/>


			<CardFeature
				title="Karma"
				description="Regularly evaluates our talent to ensure quality"
				color="#fcaf4a"
				icon={iconKarma}
			/>
			
			<CardFeature
 				title="Calculator"
 				description="Uses data from past projects to provide better delivery estimates"
 				color="#549ef2"
 				icon={iconCalculator}
 			/>

			

		</CardFeactureConteiner>

    )
}

export default CardConteiner;
