import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { popupCloseRequestAction } from '../../reducers/user';

export const StPopupWrapper = styled.div`
  transition: all .3s;
  z-index:10000;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  justify-contents:center;
  align-items: center;
  background-color:rgba(0,0,0,.75);
`;
export const StPopupBtnClose = styled.button`
  position:absolute;
  top:1em;
  right:1em;
  font-size:1rem;
  color:#fff;
`;

const StPopupLayout = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  overflow-y:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
`;
const StPopupLayoutInner = styled.div`
  padding-top:30px;
`;
const StPopupContents = styled.div`
  transition: all .3s;
  position:relative;
  background-color:#fff;
  min-width:450px;
  width:95%;
  margin: 0 auto;
  padding:2em;
  box-sizing:border-box;
`;

const Popup = ({ children }) => {
  const dispatch = useDispatch();
  const onClickClosePopup = useCallback(() => {
    dispatch(popupCloseRequestAction);
  }, []);

  return (
    <StPopupWrapper>
      <StPopupBtnClose onClick={onClickClosePopup}>X</StPopupBtnClose>
      <StPopupLayout>
        <StPopupLayoutInner>
          <StPopupContents>
            {children}
          </StPopupContents>
        </StPopupLayoutInner>
      </StPopupLayout>
    </StPopupWrapper>
  );
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Popup;
