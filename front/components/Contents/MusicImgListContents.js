import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loadMusicRequestAction } from '../../reducers/music';
import { StContainer, StTitle } from '../../style/components/AppLayout';
import Loading from '../Items/Loading';
import MusicImageCard from '../Items/MusicImageCard';

const StMusicImgList = styled.ul`
  display:flex;
  flex-wrap:wrap;
`;

const MusicImgListContents = () => {
  const dispatch = useDispatch();
  const playList = useSelector((state) => state.music.playList);
  const { hasMoreMusic, loadMusicLoading } = useSelector((state) => state.music);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMoreMusic && !loadMusicLoading) {
          const lastNum = playList.length - 1;
          dispatch(loadMusicRequestAction({
            lastId: playList[lastNum].id,
          }));
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [playList, hasMoreMusic, loadMusicLoading]);

  return (
    <StContainer>
      <div>
        <StTitle>Music List</StTitle>
        {playList && (
          <StMusicImgList>
            {playList.map((v) => (
              <MusicImageCard key={v.id} data={v} />
            ))}
          </StMusicImgList>
        )}
        {loadMusicLoading && <Loading center />}
      </div>
    </StContainer>
  );
};

export default MusicImgListContents;
