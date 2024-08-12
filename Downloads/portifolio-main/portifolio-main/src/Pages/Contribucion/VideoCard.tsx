import React from "react";
import styled from "styled-components";

interface VideoCardProps {
  videoId: string;
  title: string;
  thumbnail: string;
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  row-gap: 2rem;

  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.img<{ src: string; alt: string }>`
  width: 100%;
  height: auto;
`;

const Title = styled.p`
  padding: 0.5rem;
  margin: 0;
`;

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, thumbnail }) => {
  return (
    <Card>
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Thumbnail src={thumbnail} alt={title} />
        <Title>{title}</Title>
      </a>
    </Card>
  );
};

export default VideoCard;
