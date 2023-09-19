import { globalStyle, globalFontFace } from '@vanilla-extract/css';

const pretendardVariable = 'Pretendard Variable';

globalFontFace(pretendardVariable, {
  src: 'url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css)',
});

export const fontSizes = {
  'base+6': '2.027rem',
  'base+5': '1.802rem',
  'base+4': '1.602rem',
  'base+3': '1.424rem',
  'base+2': '1.266rem',
  'base+1': '1.125rem',
  base: '1rem',
  'base-1': '0.889rem',
  'base-2': '0.79rem',
  'base-3': '0.702rem',
};

globalStyle('*', {
  color: '#333',
  fontFamily: `${pretendardVariable}, 'sans-serif'`,
  fontWeight: 500,

  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
});

globalStyle('main', {
  background: 'white',

  width: '100%',
  maxWidth: '65ch',
  height: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  padding: '2.5rem',
});

globalStyle('h1', {
  fontWeight: 600,
});

globalStyle('h2', {
  fontSize: fontSizes['base-2'],

  width: '100%',
  margin: '3rem 0 0.75rem',
  borderTop: '1px solid black',
  paddingTop: 4,
});

globalStyle('a', {
  textDecoration: 'none',
  fontWeight: 700,
});

export default fontSizes;
