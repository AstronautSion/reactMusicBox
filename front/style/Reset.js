import React from 'react';

const Reset = () =>{
	return(
		<style global jsx>{`
			html, body{
				padding:0;
				margin:0;
				font-size: 16px;
				font-family: 'Arvo','Noto Sans KR', 'Titillium Web', 'Nanum Gothic', '굴림', sans-serif;
				background-color:#15161b;
			}
	
			div,
			span,
			object,
			iframe,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p,
			blockquote,
			pre,
			abbr,
			address,
			cite,
			code,
			del,
			dfn,
			em,
			img,
			ins,
			kbd,
			q,
			samp,
			small,
			strong,
			sub,
			sup,
			var,
			b,
			i,
			dl,
			dt,
			dd,
			ol,
			ul,
			li,
			fieldset,
			form,
			label,
			legend,
			table,
			caption,
			tbody,
			tfoot,
			thead,
			tr,
			th,
			td,
			article,
			aside,
			canvas,
			details,
			figcaption,
			figure,
			footer,
			header,
			hgroup,
			menu,
			nav,
			section,
			summary,
			time,
			mark,
			audio,
			video {
				margin: 0;
				padding: 0;
				border: 0;
				outline: 0;
				vertical-align: middle;
				background: transparent;
				line-height: 1;
			}
			
			article,
			aside,
			details,
			figcaption,
			figure,
			footer,
			header,
			hgroup,
			menu,
			nav,
			section,
			small {
				display: block;
			}
			
			blockquote,
			q {
				quotes: none;
			}
			
			mark {
				background-color: #ff9;
				color: #333;
				font-style: italic;
				font-weight: bold;
			}
			
			del {
				text-decoration: line-through;
			}
			
			blockquote:before,
			blockquote:after,
			q:before,
			q:after {
				content: '';
				content: none;
			}
			
			hr {
				display: block;
				height: 1px;
				border: 0;
				border-top: 1px solid #ccc;
				margin: 1em 0;
				padding: 0;
			}
			
			img,
			fieldset {
				border: 0;
				vertical-align: middle;
			}
			
			ul,
			ol {
				list-style: none;
			}
			
			em,
			address {
				font-style: normal;
			}
			
			table {
				border-collapse: collapse;
				border-spacing: 0;
				table-layout: fixed;
			}
			
			a {
				text-decoration: none;
				color: #333;
				vertical-align: middle;
			}
			
			a:hover,
			a:active,
			a:focus {
				text-decoration: underline;
			}
			
			.blind {
				overflow: hidden;
				position: absolute;
				clip: rect(0, 0, 0, 0);
				width: 1px;
				height: 1px;
				margin: -1px;
				border: 0;
				padding: 0;
			}
			
			caption.blind {
				position: static;
			}

		`}</style>
	);
}
export default Reset;