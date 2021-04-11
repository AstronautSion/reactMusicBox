import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Seo = () => {
  const router = useRouter();
  const routerPathName = router.pathname;
  const seoData = [{
    router: '/',
    title: 'YT List',
    meta: [
      { name: 'description', content: 'YTLIST Main Page description' },
      { name: 'keywords', content: 'YTLIST,youtube,video' },
      { property: 'og:title', content: 'YTLIST' },
      { property: 'og:url', content: 'YTLIST url' },
      { property: 'og:image', content: 'YTLIST image url' },
      { property: 'og:description', content: 'YTLIST Login Page' },
    ],
  }, {
    router: '/login',
    title: 'YT List Login',
    meta: [
      { name: 'description', content: 'YTLIST Login Page description' },
      { name: 'keywords', content: 'YTLIST,youtube,video' },
      { property: 'og:title', content: 'YTLIST' },
      { property: 'og:url', content: 'YTLIST url' },
      { property: 'og:image', content: 'YTLIST image url' },
      { property: 'og:description', content: 'YTLIST Login Page' },
    ],
  }, {
    router: '/signup',
    title: 'YT List SignUp',
    meta: [
      { name: 'description', content: 'YTLIST SignUp Page description' },
      { name: 'keywords', content: 'YTLIST,youtube,video' },
      { property: 'og:title', content: 'YTLIST' },
      { property: 'og:url', content: 'YTLIST url' },
      { property: 'og:image', content: 'YTLIST image url' },
      { property: 'og:description', content: 'YTLIST SignUp Page' },
    ],
  }, {
    router: '/search/[word]',
    title: `YT Search ${router.query.word} result`,
    meta: [
      { name: 'description', content: 'YTLIST Search Result Page description' },
      { name: 'keywords', content: 'YTLIST,youtube,video' },
      { property: 'og:title', content: 'YTLIST' },
      { property: 'og:url', content: 'YTLIST url' },
      { property: 'og:image', content: 'YTLIST image url' },
      { property: 'og:description', content: 'YTLIST Search Result Page' },
    ],
  }, {
    router: '/watch/[id]',
    title: 'YT Watch Video',
    meta: [
      { name: 'description', content: 'YTLIST Watch Page description' },
      { name: 'keywords', content: 'YTLIST,youtube,video' },
      { property: 'og:title', content: 'YTLIST' },
      { property: 'og:url', content: 'YTLIST url' },
      { property: 'og:image', content: 'YTLIST image url' },
      { property: 'og:description', content: 'YTLIST Watch Page' },
    ],
  }];

  let titleItem = null;
  let metaItems = null;

  (seoData.map((obj) => {
    if (obj.router === routerPathName) {
      titleItem = obj.title;
      metaItems = obj.meta.map((data) => (
        data.name
          ? (<meta name={data.name} content={data.content} key={data.content} />)
          : (<meta property={data.property} content={data.content} key={data.content} />)
      ));
    }
  }));
  
  return (
    <Head>
      <title>{titleItem || 'MyApp'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"/>
      {metaItems}
    </Head>
  );
};
export default Seo;
