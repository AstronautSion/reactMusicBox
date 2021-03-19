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
        text-align:center;
        font-size:.875rem;

    }
`;

const FollowList = ({header, data}) => {
    return (
        <>
            <StFollowList>
                <strong>{header}</strong>
                <ul>
                    {data.map( v => (
                        <li key="v">
                            <Link href="/"><a>
                                <figure><img src="" /></figure>
                                <span>{v.nickname}</span>
                            </a></Link>
                        </li>
                    ))}
                </ul>
                <div className="followlist__more">more</div>
            </StFollowList>
        </>
    );
}

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}
export default FollowList;