import React from 'react';
import './S3VideoPlayer.css';

interface S3VideoPlayerProps {
  s3Url: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const S3VideoPlayer: React.FC<S3VideoPlayerProps> = ({
  s3Url,
  width = '100%',
  height = 'auto',
  className = '',
  autoPlay = false,
  muted = false,
  loop = false,
}) => {
  const handleVideoError = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video failed to load:', event);
  };

  return (
    <div className={`video-player-container ${className}`}>
      <video
        width={width}
        height={height}
        controls
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        onError={handleVideoError}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <source src={s3Url} type="video/mp4" />
        <source src={s3Url} type="video/webm" />
        <source src={s3Url} type="video/ogg" />
        
        {/* Fallback message for browsers that don't support HTML5 video */}
        <p style={{ 
          padding: '20px', 
          textAlign: 'center', 
          backgroundColor: '#f5f5f5', 
          borderRadius: '8px',
          color: '#666'
        }}>
          Your browser doesn't support HTML5 video. 
          <br />
          <a href={s3Url} target="_blank" rel="noopener noreferrer">
            Click here to download the video file
          </a>
        </p>
      </video>
    </div>
  );
};

export default S3VideoPlayer;