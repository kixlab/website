'use client'

import styled from '@emotion/styled'
import { FontVariant, Color, Padding, Radius } from '@/app/theme'

export const URL = styled.a`
  display: flex;
  align-items: center;
  background-color: ${Color.orange100};
  text-decoration: none;
  ${FontVariant.body_sm}
  padding: ${Padding.y} ${Padding.x};
  border-radius: ${Radius.sm};
  width: fit-content;
  color: ${Color.gray900};

  &::before {
    content: '🔗';
    margin-right: 6px;
  }

  &[href&='.pdf']::before {
    content: '📄';
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

  &:hover {
    background-color: ${Color.orange200};
  }

  &:active {
    background-color: ${Color.orange300};
  }
`
