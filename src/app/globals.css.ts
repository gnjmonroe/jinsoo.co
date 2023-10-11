import { globalStyle, globalFontFace } from '@vanilla-extract/css';
import { gray } from '@radix-ui/colors';

const pretendardVariable = 'Pretendard Variable';

globalFontFace(pretendardVariable, {
  src: 'url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css)',
});

globalStyle('*', {
  color: gray.gray12,

  fontFamily: `${pretendardVariable}, sans-serif`,
  fontWeight: 500,
  lineHeight: 1.4,

  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
});
