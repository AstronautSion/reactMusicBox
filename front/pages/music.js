import React from 'react';
import MusicList from '../components/MusicList';
import { StContainer, StFixedButton, StLoginLayout, StP, StTitle, StTitleCenter, StWrapper } from '../style/components/AppLayout';
import AppLayout from '../components/Layout/AppLayout';
import MusicAddForm from '../components/From/MusicAddForm';
import Popup from '../components/Popup/Popup';
import { useDispatch, useSelector } from 'react-redux';
import { popupOpen } from '../reducers/user';
import MusicModiForm from '../components/From/MusicModiForm';
import LoginForm from '../components/From/LoginForm';

const Music = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.user.isLoggedIn);
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
						{isLoggedIn ?
							<>
							<StTitle>
								MUSIC LIST
								<StP sm light StMargin=".5em 0">[ length: {playList.length} ]</StP>
							</StTitle>
							
							{ isAddMusic && <Popup><MusicAddForm /></Popup>}
							{ playList && playList.map(v => ( <MusicList data={v} key={v.title} />))}
							{ isModiMusic && <Popup> <MusicModiForm /> </Popup>}
							<StFixedButton onClick={onClickAddMusicButton} />
							</>
						:
							<StLoginLayout>
								<StTitleCenter>Please Login</StTitleCenter>
								<LoginForm />
							</StLoginLayout>
						}

					</StContainer>
			</StWrapper>
		</AppLayout>
	);
}
export default Music;