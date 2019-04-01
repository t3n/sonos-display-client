import React, { createRef } from 'react';
import styled from 'styled-components';

import { useScrollTitle } from '../../hooks/scrollTitle';

const TrackCardTitle = ({ title, artist, className }) => {
  const titleContainerRef = createRef();
  const titleRef = createRef();

  const titleOffsetX = useScrollTitle(
    titleContainerRef,
    titleRef,
    title,
    artist
  );

  return (
    <div ref={titleContainerRef} className={className}>
      <h1
        ref={titleRef}
        style={{
          transform: `translateX(${titleOffsetX}px)`
        }}
      >
        {artist} - {title}
      </h1>
    </div>
  );
};

const StyledTrackCardTitle = styled(TrackCardTitle)`
  width: 100%;
  overflow: hidden;
  text-align: center;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 10px;
    height: 100%;
    z-index: 10;
  }

  &:before {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:after {
    right: 0;
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  h1 {
    margin: 0;
    margin-top: 40px;
  }

  h3 {
    margin: 0;
  }

  h1,
  h3 {
    white-space: nowrap;
    display: inline-block;
    text-align: center;
    padding: 0 10px;
  }
`;

export default StyledTrackCardTitle;
