import React, { useCallback, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { StSearch, StSearchFrom } from '../../style/SearchForm';

const SearchForm = () => {
  const router = useRouter();
  const [search, setSearch] = useState(router.query?.word || '');

  const onChangeSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const onSubmitSearch = useCallback((e) => {
    e.preventDefault();
    if (search !== '') {
      Router.push(`/search/${search}`);
    } else {
      Router.push('/');
    }
  }, [search]);

  return (
    <StSearchFrom onSubmit={onSubmitSearch}>
      <StSearch type="search" value={search} onChange={onChangeSearch} placeholder="Search..." />
    </StSearchFrom>
  );
};

export default SearchForm;
