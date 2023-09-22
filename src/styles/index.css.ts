import { style } from '@vanilla-extract/css';
import { fontSizes } from '@/styles/globals.css';
import { gray } from '@radix-ui/colors';

const chipRadius = 6;

const linkBase = style({
  ':hover': {
    textDecoration: 'underline',
  },
});

export const aboutText = style({
  fontWeight: 400,
  fontSize: fontSizes['base+1'],
  lineHeight: 1.4,

  marginBottom: '1.4rem',
});

export const underConstructionTag = style({
  display: 'inline-block',

  width: '100%',

  margin: '0.5rem 0',
});

export const projectItem = style({
  display: 'flex',
  flexDirection: 'column',

  marginTop: '2rem',
});

export const date = style({
  fontSize: fontSizes['base-2'],
  fontWeight: 400,
  lineHeight: 1,

  marginBottom: 6,
});

export const titleGithubBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',

  marginBottom: 4,
});

export const title = style([
  {
    fontSize: fontSizes['base+3'],
    fontWeight: 500,
    lineHeight: 1,

    ':hover': {
      textDecoration: 'underline',
    },
    ':visited': {
      color: gray.gray12,
    },

    selectors: {
      '&:not(a).title:hover': {
        textDecorationColor: 'transparent',
      },
    },
  },
  linkBase,
]);

export const githubChip = style([
  {
    background: gray.gray9,
    color: 'white',

    fontSize: fontSizes['base-2'],
    fontWeight: 500,
    textDecoration: 'none',

    borderRadius: chipRadius,
    padding: '4px 8px',

    ':hover': {
      background: gray.gray10,
      textDecoration: 'none',
    },
  },
  linkBase,
]);

export const description = style({
  fontSize: fontSizes['base+1'],
  fontWeight: 350,
  lineHeight: 1.4,

  marginBottom: 10,
});

export const keywords = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
});

export const keyword = style({
  color: gray.gray11,

  fontSize: fontSizes['base-2'],
  fontWeight: 400,

  width: 'fit-content',
  border: `1px solid ${gray.gray6}`,
  borderRadius: chipRadius,
  padding: '4px 8px',
});

export const contactItem = style({
  fontSize: fontSizes['base+1'],
  fontWeight: 600,

  display: 'block',

  marginBottom: '.875em',
});
