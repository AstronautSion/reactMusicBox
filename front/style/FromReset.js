import { createGlobalStyle } from 'styled-components';

const FormReset = createGlobalStyle`
	/* Form reset
	-----------------------------------------------*/
	input,
	label,
	select,
	button,
	textarea{
		margin:0; 
		border:0; 
		padding:0; 
		display:inline-block; 
		vertical-align:middle; 
		white-space:normal; 
		background:none; 
		line-height:1; 
		font-size:1rem;
		font-family: 'Arvo','Noto Sans KR', 'Titillium Web', 'Nanum Gothic', '굴림', sans-serif;
	}
	input:focus,
	textarea:focus{outline:0;}
	input,
	textarea,
	button,
	input[type=reset],
	input[type=button],
	input[type=submit],
	input[type=checkbox],
	input[type=radio],
	select{-webkit-box-sizing:border-box; -moz-box-sizing:border-box; box-sizing:border-box;}
	select[multiple]{ vertical-align:top;}
	::-webkit-file-upload-button{ padding:0; border:0; background:none;}
	
	/* Search Input
	-----------------------------------------------*/
	input[type=search]{-webkit-appearance:textfield; box-sizing:content-box; -webkit-box-sizing:content-box;}
	::-webkit-search-decoration{display:none;}
	
	/* Text Inputs
	-----------------------------------------------*/
	input[type=date],input[type=datetime],input[type=datetime-local],input[type=email],input[type=month],input[type=number],input[type=password],input[type=range],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week]{
		display:block; width:100%; height:2.5rem; padding:0 .75rem;
	}
	
	/* Textarea
	-----------------------------------------------*/
	textarea{vertical-align:top; min-height:5rem; overflow:auto; resize:none;}
	.textarea textarea{width:100%; height:100%; padding:.75rem; box-sizing:border-box; line-height:1.6;}
	.textarea{width:100%; border:1px solid #ddd; box-sizing:border-box;}
	.textarea:after{content:''; display:block; clear:both;}
	
	/* Selects custom
	-----------------------------------------------*/
	.select{width:100%;}
	.select select{display:block; width:100%; height:2.5rem; padding:0 .75rem; border:1px solid #ddd;}
	
	/* form checkbox / radio cusotm
	-----------------------------------------------*/
	.input-form{display:inline-block; position:relative; padding-left:20px; cursor:pointer; font-size:1rem; text-align:left; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; vertical-align:top;}
	.input-form.no-text{padding-left:0;}
	.input-form:hover input[type="radio"] ~ .checkmark,
	.input-form:hover input[type="checkbox"] ~ .checkmark{background-color:#eee;}
	.input-form input[type="radio"]:checked ~ .checkmark,
	.input-form input[type="checkbox"]:checked ~ .checkmark{background-color:#e54737;}
	.input-form input[type="radio"]:checked ~ .checkmark:after,
	.input-form input[type="checkbox"]:checked ~ .checkmark:after{display:block;}
	.input-form input[type="radio"]:disabled ~ .checkmark,
	.input-form input[type="checkbox"]:disabled ~ .checkmark{background-color:#ddd;}
	.input-form input[type="radio"]:disabled ~ .checkmark:after,
	.input-form input[type="checkbox"]:disabled ~ .checkmark:after{display:none;}
	.input-form input[type="radio"]:disabled:checked ~ .checkmark,
	.input-form input[type="checkbox"]:disabled:checked ~ .checkmark{background-color:rgba(213,63,65,.4);}
	.input-form input[type="radio"]:disabled:checked ~ .checkmark:after,
	.input-form input[type="checkbox"]:disabled:checked ~ .checkmark:after{display:block;}
	.input-form input[type="radio"]{position:absolute; opacity:0; cursor:pointer;}
	.input-form input[type="radio"] ~ .checkmark{position: absolute; top:0;left:0; height:17px; width:17px; background-color:#efefef; border-radius:50%;}
	.input-form input[type="radio"] ~ .checkmark:after{content:""; position:absolute; display:none; top:5.4px; left:5.5px; width:5px; height:5px; border-radius:50%; background:white;}
	.input-form input[type="checkbox"]{position: absolute; opacity: 0; cursor: pointer; height: 0; width: 0;}
	.input-form input[type="checkbox"] ~ .checkmark{position:absolute; top:0; left:0; height:17px; width:17px; background-color: #fff; border:1px solid #ddd;}
	.input-form input[type="checkbox"] ~ .checkmark:after{content:""; position:absolute; display:none; left:6px; top:2px; width:4px; height:8px; border:solid white; border-width:0 2px 2px 0; -webkit-transform:rotate(45deg);  -ms-transform:rotate(45deg); transform:rotate(45deg);}
	
	/* switch cusotm
	-----------------------------------------------*/
	.switch{position:relative; display:inline-block; padding-left:35px; margin:4px 0 4px 4px; font-size:1rem;}
	.switch input[type=checkbox]{height:0; width:0; visibility:hidden;}
	.switch label {position:absolute; top:0; left:0; transition:all .3s ease-in-out; cursor:pointer; text-indent:-9999px; width:35px; height:15px; background-color:#ddd; display:block; border-radius:2em;}
	.switch label:after {content:''; position:absolute; top:-2px; left:-2px; width:19px; height:19px; background-color:#fff; border-radius:50%; transition:0.3s; box-shadow:0 0 5px rgba(0, 0, 0, 0.4);}
	.switch input[type=checkbox]:checked+label {transition:all .4s ease-in-out; background-color:#2b46bd;}
	.switch input[type=checkbox]:checked+label:after {left:37px; -webkit-transform:translateX(-100%); transform:translateX(-100%);}
	.switch input[type=checkbox]:disabled+label:after {background-color:#ddd;}
	.switch input[type=checkbox]:disabled+label {background-color:#bbb;}
	
	/* File Uploads
	-----------------------------------------------*/
	input[type=file]{}
	
	/* Buttons
	-----------------------------------------------*/
	button,
	input[type="reset"],
	input[type="button"],
	input[type="submit"]{overflow:visible; width:auto;}
`; 
export default FormReset;