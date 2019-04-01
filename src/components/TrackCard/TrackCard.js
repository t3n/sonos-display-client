import React from 'react';
import styled from 'styled-components';

import TrackCardTitle from './TrackCardTitle';
import { useRotation } from '../../hooks/rotate';

const TrackCard = ({ title, artist, albumArtURI, className }) => {
  const { rotateX, rotateY } = useRotation();

  return (
    <div
      className={className}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
    >
      <img src={albumArtURI} alt="" />
      <TrackCardTitle title={title} artist={artist} />
    </div>
  );
};

const StyledTrackCard = styled(TrackCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 820px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondary};
  animation: rotation 10s linear infinite;
  padding: 40px 20px;

  img {
    width: 280px;
    height: 280px;
    background-color: #f4f4f4;
  }
`;

export default StyledTrackCard;
