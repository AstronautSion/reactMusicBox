
import styled, { css } from 'styled-components';

export const StBtnLoginForm = styled.button`
	font-size:16px;
	line-height:18px;
	padding:10px 15px;
	height:40px;
	cursor:pointer;
	display:block;
	width:100%;
	border-radius:.25em;
	color:#fff;
	border: 0;
	background-color:#5f56e0;
	margin: ${props => 
		props.stMargin || "1em 0 0" 
	};
	${props => props.stGoogle && css`
		color:#222;
		border:1px solid #ccc;
		background-color:#fff;
	`}

	${props => props.stFacebook && css`
		border:1px solid #3578e5;
		background-color:#3578e5;
	`}
`;

export const StLoginFormTitle = styled.h3`
	display:block;
	text-align:center;
	padding:1em 0 1.5em 0;
	font-size:1.65rem;
	font-weight:normal;
	line-height:1.5;
	color: #666;
`;

export const StButtonLonger = styled.button`
  width:100%;
  height:40px;
  line-height:40px;
  margin-top:1em;
  background-color:#5f56e0;
  font-size:.875rem;
  color:#fff;
  text-align:center;
  box-sizing:border-box;
  border-radius:.25em;
`;
 
export const StWarnningText = styled.div`
	font-size:.75rem;
	color:#f50;
	display:block;
	line-height:1.2;
	padding-top:1em;
`;