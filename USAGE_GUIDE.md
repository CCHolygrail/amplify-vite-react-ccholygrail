# S3VideoPlayer Usage Guide

## Quick Start

Your React app now includes a reusable `S3VideoPlayer` component that can embed videos from Amazon S3 URLs.

## What's Been Added

1. **S3VideoPlayer Component** (`src/components/S3VideoPlayer.tsx`)
   - Reusable React component for S3 video playback
   - HTML5 video element with native controls
   - Support for multiple video formats
   - Responsive design and error handling

2. **Styling** (`src/components/S3VideoPlayer.css`)
   - Basic styling with hover effects
   - Responsive design for mobile devices
   - Loading animations

3. **Integration** (Updated `src/App.tsx`)
   - Component imported and demonstrated
   - Example usage with sample video URL

## How to Use with Your S3 Videos

### Step 1: Upload Video to S3
1. Upload your video file (MP4, WebM, or OGG) to an S3 bucket
2. Make sure the object has public read permissions OR configure CORS

### Step 2: Get the S3 URL
Your S3 URL should look like:
```
https://your-bucket-name.s3.region.amazonaws.com/path/to/video.mp4
```

### Step 3: Use the Component
```tsx
import S3VideoPlayer from './components/S3VideoPlayer';

function MyComponent() {
  return (
    <S3VideoPlayer 
      s3Url="https://your-bucket.s3.amazonaws.com/video.mp4"
      width={600}
      height={400}
    />
  );
}
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `s3Url` | string | required | S3 object URL |
| `width` | string/number | '100%' | Player width |
| `height` | string/number | 'auto' | Player height |
| `autoPlay` | boolean | false | Auto-play video |
| `muted` | boolean | false | Mute by default |
| `loop` | boolean | false | Loop video |
| `className` | string | '' | Additional CSS classes |

## Testing

The app currently uses a sample video URL for demonstration. To test with your own S3 videos:

1. Replace the `exampleS3VideoUrl` in `App.tsx` with your S3 URL
2. Run `npm run dev` to start the development server
3. Open your browser to see the video player

## S3 CORS Configuration (if needed)

If your videos are in a private bucket, add this CORS configuration:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedOrigins": ["http://localhost:3000", "https://yourdomain.com"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]
```

## Features Included

✅ HTML5 video player with native controls (play, pause, volume, fullscreen)  
✅ Multiple video format support (MP4, WebM, OGG)  
✅ Responsive design  
✅ Error handling and fallback messages  
✅ TypeScript support  
✅ Customizable dimensions and options  
✅ CSS styling with hover effects  

## Next Steps

1. Replace the sample URL with your actual S3 video URL
2. Customize the styling in `S3VideoPlayer.css` if needed
3. Add more video players throughout your app as needed
4. Consider adding features like playlists, thumbnails, or custom controls

The component is now ready to use with any public S3 video URL!