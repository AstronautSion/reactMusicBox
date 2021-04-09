# FRONT SSR

## `getServerSideProps` 

브라우저에서 실행되는게 아니라 프론트 서버에서 실행됨.

```js
// index.js
import wrapper from '../store/comfigureStore';

export const getServerSideProps = wrapper.getServerSideProps((context) => {
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  // 화면이 나오기전에 dispatch를 해서 데이터를 불러올 수 있다.
  // 이부분에서 실행된 부분은 HIDRATE로 간다.
});
```
하지만 이런식으로 하면 LOAD_MY_INFO_REQUEST가 
SUCCESS 되기전에 끝나기 때문에 다음과 같이 세팅을 더 해줘야함.

```js
import { END } from '@redux-saga';
import wrapper from '../store/comfigureStore';

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END); 
  // END :: HIDRATE처럼 Saga에서 미리 준비되어 있는 액션
  await context.store.sagaTask.toPromise();
});

```
<br>

## SSR 쿠키 공유

```js

// getServerSideProps 에서 아래와 같이 작성해주어야 cookie를 서버로 보낼 수 있다. 
// 서버에서 서버로 쿠키를 보낼때는 사용자가 직접 설정해주어야..
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  // 위의 코드처럼 쿠키를 지웠다가 다시 넣어주는 방식으로 해야지
  // 그렇지 않으면 사용자들이 쿠키를 공유하게 되는 대참사가 벌어진다. (주의)

```
<br>

### `getServerSideProps 결과물`

```js
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});
```
<br>

## `getStaticProps`
`getServerSideProps` 와 사용방법은 비슷하다.<br>
`getStaticProps`는 동적인 데이터를 담지 못한다. 따라서 자주사용하지 않는다고...

```js
export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_REQUREST,
    data: 1,
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});
```
<br>
<br>


## `style-components SSR`

### `babel-plugin-styeld-components` 설치
```
npm i babel-plugin-styled-components
```

### `.babelrc` 
```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      { 
        "ssr": true, // ssr
        "fileName": true, 
        "displayName": true, 
        "pure": true 
      }
    ]
  ]
}
```

### `_document.js`

```js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

```


