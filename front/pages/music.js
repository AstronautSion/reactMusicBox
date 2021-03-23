import React from 'react';

import MusicList from '../components/MusicList';

import { StContainer, StWrapper } from '../style/components/AppLayout';
import AppLayout from '../components/Layout/AppLayout';
import MusicAddForm from '../components/From/MusicAddForm';


const Music = () => {
	return(
		<AppLayout>
			<StWrapper>
					<StContainer>
						<MusicAddForm />
						<MusicList />
					</StContainer>
			</StWrapper>
		</AppLayout>
	);
}
export default Music;