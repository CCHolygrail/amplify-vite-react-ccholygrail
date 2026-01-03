# S3VideoPlayer Component

A reusable React component for embedding videos from Amazon S3 using the HTML5 `<video>` element.

## Features

- ✅ HTML5 video player with native controls
- ✅ Support for multiple video formats (MP4, WebM, OGG)
- ✅ Responsive design
- ✅ Fallback message for unsupported browsers
- ✅ Customizable dimensions and styling
- ✅ Auto-play, mute, and loop options
- ✅ Error handling
- ✅ TypeScript support

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `s3Url` | `string` | **required** | The S3 object URL pointing to your video file |
| `width` | `string \| number` | `'100%'` | Video player width |
| `height` | `string \| number` | `'auto'` | Video player height |
| `className` | `string` | `''` | Additional CSS class names |
| `autoPlay` | `boolean` | `false` | Whether to auto-play the video |
| `muted` | `boolean` | `false` | Whether to mute the video by default |
| `loop` | `boolean` | `false` | Whether to loop the video |

## Usage Examples

### Basic Usage
```tsx
import S3VideoPlayer from './components/S3VideoPlayer';

function App() {
  return (
    <S3VideoPlayer 
      s3Url="https://your-bucket.s3.amazonaws.com/video.mp4"
    />
  );
}
```

### With Custom Dimensions
```tsx
<S3VideoPlayer 
  s3Url="https://your-bucket.s3.amazonaws.com/video.mp4"
  width={800}
  height={450}
/>
```

### With Auto-play and Loop
```tsx
<S3VideoPlayer 
  s3Url="https://your-bucket.s3.amazonaws.com/video.mp4"
  autoPlay={true}
  muted={true}
  loop={true}
/>
```

### Responsive Full-width
```tsx
<S3VideoPlayer 
  s3Url="https://your-bucket.s3.amazonaws.com/video.mp4"
  width="100%"
  height={400}
/>
```

## S3 Setup Requirements

1. **Upload your video** to an S3 bucket
2. **Set proper permissions** - either:
   - Make the object publicly readable, OR
   - Configure CORS on your S3 bucket to allow your domain
3. **Get the S3 object URL** in format: `https://bucket-name.s3.region.amazonaws.com/path/to/video.mp4`

### Example CORS Configuration for S3
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedOrigins": ["https://yourdomain.com", "http://localhost:3000"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]
```

## Browser Support

The component supports all modern browsers that support HTML5 video:
- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Edge 12+
- Opera 10.5+

For unsupported browsers, a fallback message with download link is displayed.

## Styling

The component includes basic CSS styling with:
- Rounded corners
- Box shadow
- Hover effects
- Responsive behavior
- Loading animation

You can override styles by:
1. Adding custom `className` prop
2. Modifying `S3VideoPlayer.css`
3. Using CSS modules or styled-components

## Error Handling

The component handles video loading errors gracefully:
- Logs errors to console
- Shows fallback content for unsupported browsers
- Provides download link as backup option