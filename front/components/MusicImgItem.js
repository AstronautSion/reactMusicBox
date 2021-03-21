import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StMusicImgItem = styled.li`
  margin-top:1em;
  width:18.4%;
  padding-right:2%;
  padding-bottom:1em;

  &:nth-of-type(5n){
    padding-right:0;
  }
  .music-imglist__img{
    width:100%;
    padding-top:85%;
    background-color:#111;
    position:relative;
    & > div{
      transition:all .3s;
      opacity:0;
    }
    &:hover > div{
      opacity:1;
    }
  }
  .music-imglist__title{
    font-size:.875rem;
    padding:.5em 0;
    color:#333;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

  }
  .music-imglist__writer{
    font-size:.75rem;
    color:#666;
  }

  @media screen and (max-width: 768px){
    width:23.5%;
    
    &:nth-of-type(5n){
      padding-right:2%;
    }
    &:nth-of-type(4n){
      padding-right:0;
    }
  }

  @media screen and (max-width:600px){
    width:31.999%;
    &:nth-of-type(4n){
      padding-right:2%;
    }
    &:nth-of-type(3n){
      padding-right:0;
    }
  }
`;
const StMusicImgItemFunc = styled.div`
  position:absolute;
  right:1em;
  bottom:.5em;
  @media screen and (max-width: 768px){
    right:.5em;
  }
`;
const StHeaderIcon = styled.div`
  cursor:pointer;
  padding:.5em;
  color:white;
  &.active{
    color:red;
  }
  @media screen and (max-width:768px){
    padding:.25em .5em;
  }
`;
const StEtcIcon = styled.div`
  cursor:pointer;
  padding:.5em;
  color:white;
  @media screen and (max-width:768px){
    padding:.25em .5em;
  }
`;
const StPlayerIcon = styled.div`
  cursor:pointer;
  position:absolute;
  top:50%;
  left:50%;
  width:4rem;
  height:4rem;
  background-color:#f50;
  margin-top:-2.5rem;
  margin-left:-2rem; 
  border-radius:50%;
  text-indent:-9999em;
  overflow:hidden;
  &:after{
    content:'';
    position:absolute;
    top:50%;
    left:50%;
    display:block;
    width:0;
    height:0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 2rem solid #fff;
    margin-top:-1rem;
    margin-left:-.75rem;
  } 
  &:hover{
    background-color:#fd661b;
  }
  @media screen and (max-width: 768px){
    width:3rem;
    height:3rem;
    margin-top:-2rem;
    margin-left:-1.5rem;
    &:after{
      border-top: .5rem solid transparent;
      border-bottom: .5rem solid transparent;
      border-left: 1rem solid #fff;
      margin-top:-.5rem;
      margin-left:-.4rem;
    }
  }

`;

const MusicImgItem = ({data}) => {
  
  const onClickPlay = () => {
    console.log(data.type, data.musicUrl);
  };

  return(
    <StMusicImgItem>
      <div className="music-imglist__img">
        <div>
          <StPlayerIcon onClick={onClickPlay} />
          <StMusicImgItemFunc>
            <StHeaderIcon className="fa fa-heart" />
            <StEtcIcon className="fa fa-ellipsis-v" />
          </StMusicImgItemFunc>
        </div>
      </div>
      <div>
        <p className="music-imglist__title">{data.title}</p>
        <span className="music-imglist__writer">{data.writter}</span>
      </div>
    </StMusicImgItem>
  );
}

MusicImgItem.propTypes = {
  data: PropTypes.array.isRequired,
}

export default MusicImgItem;