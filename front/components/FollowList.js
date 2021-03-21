import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Link from 'next/link';

const StFollowList = styled.div`
	padding:1em 0;
	ul {
		display:flex;
		flex-wrap:wrap;
		li {
			width:25%;
			a{
				display:flex;
				align-items:center;
				padding:1em 0;
				text-decoration:none;
				figure {
					display:block;
					margin-right:1em;
					img{
						display:block;
						width:40px;
						height:40px;
						overflow:hidden;
						border-radius:100%;
					}
				}
				span{
					font-size:.875rem;
					font-weight:normal;
				}
			}
		}
	}
	.followlist__more{
		cursor:pointer;
		text-align:center;
		font-size:.75rem;
		border:1px solid #eee;
		padding:.5em 0;
		color:#aaa;
		margin-top:2em;
		&:hover{
			border-color:#aaa;
			color:#333;
		}
	}
`;

const FollowList = ({data}) => {
	return (
		<StFollowList>
			<ul>
				{data.map( v => (
					<li key={v.nickname}>
						<Link href="/"><a>
							<figure><img src="" /></figure>
							<span>{v.nickname}</span>
						</a></Link>
					</li>
				))}
			</ul>
			<div className="followlist__more">more</div>
		</StFollowList>
	);
}

FollowList.propTypes = {
    data: PropTypes.array.isRequired,
}
export default FollowList;