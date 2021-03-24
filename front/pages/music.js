import React from 'react';

import MusicList from '../components/MusicList';

import { StContainer, StFixedButton, StWrapper } from '../style/components/AppLayout';
import AppLayout from '../components/Layout/AppLayout';
import MusicAddForm from '../components/From/MusicAddForm';
import Popup from '../components/Popup/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { popupOpen } from '../reducers/user';
import MusicModiForm from '../components/From/MusicModiForm';


const Music = () => {
	const dispatch = useDispatch();
	const isAddMusic = useSelector(state => state.user.popup.isAddMusic);
	const isModiMusic = useSelector(state => state.user.popup.isModiMusic);
	const playList = useSelector(state => state.music.playList);
	const onClickAddMusicButton = () => {
		dispatch(popupOpen({
			key:'isAddMusic',
			value: null,
		}));
	};
	return(
		<AppLayout>
			<StWrapper>
					<StContainer>
						{ isAddMusic && 
							<Popup>
								<MusicAddForm />
							</Popup>
						}

						{playList && playList.map(v => (
							<MusicList data={v} key={v.title} />
						))}
						
						{isModiMusic && 
							<Popup>
								<MusicModiForm />
							</Popup>
						}

						<StFixedButton onClick={onClickAddMusicButton} />
					</StContainer>
			</StWrapper>
		</AppLayout>
	);
}
export default Music;