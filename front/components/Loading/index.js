import React from "react";
import PropTypes from "prop-types";
import { StLoading } from "./styles";

const Loading = ({ center }) => (
  <StLoading center={center}>
    <div />
    <div />
    <div />
    <div />
  </StLoading>
);

Loading.propTypes = {
  center: PropTypes.bool.isRequired,
};

export default Loading;
