import React from 'react';
import MusicLayout from '../components/Layout/MusicLayout';
import MusicList from '../components/MusicList';

import styled from '@emotion/styled';
import MusicAsideMenu from '../components/Layout/MusicAsideMenu';

const StMusicLayout = styled.div`
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background-color:#f50;
	padding-top:50px;
	box-sizing:border-box;
`;

const Music = () => {
	return(
		<MusicLayout>
			<StMusicLayout>
				<MusicAsideMenu />
				<MusicList />
			</StMusicLayout>
		</MusicLayout>
	);
}
export default Music;