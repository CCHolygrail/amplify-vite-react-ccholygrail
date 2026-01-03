import React, { useState } from 'react';
import S3VideoPlayer from './S3VideoPlayer';

const VideoPlayerExamples: React.FC = () => {
  const [customUrl, setCustomUrl] = useState('');
  
  // Example S3 URLs - replace with your actual URLs
  const exampleUrls = [
    'https://your-bucket.s3.amazonaws.com/sample-video-1.mp4',
    'https://your-bucket.s3.amazonaws.com/sample-video-2.mp4',
    'https://your-bucket.s3.amazonaws.com/sample-video-3.webm',
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>S3 Video Player Examples</h2>
      
      {/* Custom URL Input */}
      <section style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h3>Test with Your Own S3 URL</h3>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="url"
            placeholder="Enter your S3 video URL here..."
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          />
        </div>
        {customUrl && (
          <S3VideoPlayer 
            s3Url={customUrl}
            width="100%"
            height={300}
          />
        )}
      </section>

      {/* Different Size Examples */}
      <section style={{ marginBottom: '30px' }}>
        <h3>Different Sizes</h3>
        
        <h4>Small Player (400x225)</h4>
        <S3VideoPlayer 
          s3Url={exampleUrls[0]}
          width={400}
          height={225}
          muted={true}
        />
        
        <h4>Medium Player (600x338)</h4>
        <S3VideoPlayer 
          s3Url={exampleUrls[1]}
          width={600}
          height={338}
        />
        
        <h4>Full Width Player</h4>
        <S3VideoPlayer 
          s3Url={exampleUrls[2]}
          width="100%"
          height={400}
          loop={true}
        />
      </section>

      {/* Usage Instructions */}
      <section style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e8f4fd', borderRadius: '8px' }}>
        <h3>How to Use</h3>
        <ol>
          <li>Upload your video file to an S3 bucket</li>
          <li>Make sure the S3 object has public read permissions or proper CORS configuration</li>
          <li>Copy the S3 object URL (e.g., https://your-bucket.s3.region.amazonaws.com/path/to/video.mp4)</li>
          <li>Use the S3VideoPlayer component with your URL</li>
        </ol>
        
        <h4>Example Code:</h4>
        <pre style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '10px', 
          borderRadius: '4px', 
          overflow: 'auto',
          fontSize: '12px'
        }}>
{`import S3VideoPlayer from './components/S3VideoPlayer';

function MyComponent() {
  const videoUrl = "https://your-bucket.s3.amazonaws.com/video.mp4";
  
  return (
    <S3VideoPlayer 
      s3Url={videoUrl}
      width={600}
      height={400}
      autoPlay={false}
      muted={false}
      loop={false}
    />
  );
}`}
        </pre>
      </section>
    </div>
  );
};

export default VideoPlayerExamples;