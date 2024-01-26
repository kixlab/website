'use client'

import styled from '@emotion/styled'

export const URL = styled.a`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.color.orange200};
  text-decoration: none;
  ${props => props.theme.fontVariant.body_sm}
  padding: ${props => props.theme.button.pad_y} ${props => props.theme.button.pad_x};
  border-radius: ${props => props.theme.radius.sm};
  width: fit-content;
  color: ${props => props.theme.color.gray900};

  &::before {
    content: '🔗';
    margin-right: 6px;
  }

  &[href*='youtube.com']::before {
    display: inline-block;
    content: url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/16px-YouTube_full-color_icon_%282017%29.svg.png');
    width: 16px;
    height: 16px;
  }

  &[href*='dl.acm.org']::before {
    content: url('https://dl.acm.org/pb-assets/head-metadata/favicon-16x16-1574252172003.png');
    display: inline-block;
    width: 16px;
    height: 16px;
  }

  &[href*='arxiv.org']::before {
    content: url('/images/arxiv_logo.svg');
    display: inline-block;
    width: 11px;
    height: 16px;
  }
`
