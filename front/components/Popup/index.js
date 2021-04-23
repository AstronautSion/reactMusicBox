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

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <StPopupWrapper onClick={onClickClosePopup}>
      <StPopupLayout className="popup__overlay">
        <StPopupLayoutInner onClick={stopPropagation}>
          <StPopupBtnClose
            onClick={onClickClosePopup}
            className="fa fa-times-circle"
          />
          <StPopupContents>{children}</StPopupContents>
        </StPopupLayoutInner>
      </StPopupLayout>
    </StPopupWrapper>
  );
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(Popup);
