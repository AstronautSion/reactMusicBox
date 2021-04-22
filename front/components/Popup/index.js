import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { popupCloseRequestAction } from "../../reducers/user";
import {
  StPopupBtnClose,
  StPopupContents,
  StPopupLayout,
  StPopupLayoutInner,
  StPopupWrapper,
} from "./styles";

const Popup = ({ children }) => {
  const dispatch = useDispatch();
  const onClickClosePopup = useCallback(() => {
    dispatch(popupCloseRequestAction);
  }, []);

  const onClickLayout = useCallback((e) => {
    e.stopPropagation();
    if (e.target.className.includes("popup__overlay")) {
      dispatch(popupCloseRequestAction);
    }
  }, []);

  return (
    <StPopupWrapper>
      <StPopupBtnClose
        onClick={onClickClosePopup}
        className="fa fa-times-circle"
      />
      <StPopupLayout onClick={onClickLayout} className="popup__overlay">
        <StPopupLayoutInner>
          <StPopupContents>{children}</StPopupContents>
        </StPopupLayoutInner>
      </StPopupLayout>
    </StPopupWrapper>
  );
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Popup;
