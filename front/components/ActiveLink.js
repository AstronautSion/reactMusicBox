import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';

const ActiveLink = ({ children, path }) => {
  const router = useRouter();

  return( 
    <li className={router.pathname == path ? 'active' : ''}>
      <Link href={String(path)}><a>{children}</a></Link>
    </li>
  );
}

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}
export default ActiveLink;