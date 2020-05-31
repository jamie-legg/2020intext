import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>The world of today brings with it a lot of uncertainty. This space is dedicated to ideas that can help every mind grow and flourish today.</p>
    </div>
  );
};

export default ExploreContainer;
