/**
 * VideoShowcase Component
 *
 * Displays a grid or slider of video items with thumbnails.
 * Clicking a video opens it in a modal or navigates to the video URL.
 * Used for customer stories and "Powered By" sections.
 *
 * @example
 * ```tsx
 * <VideoShowcase
 *   title="Customer Stories"
 *   videos={[
 *     {
 *       id: '1',
 *       title: 'Company X Success Story',
 *       thumbnail: '/img/videos/company-x.jpg',
 *       videoUrl: 'https://youtube.com/watch?v=...',
 *       duration: '5:30'
 *     }
 *   ]}
 * />
 * ```
 */

import React, { useState } from 'react';
import { VideoShowcaseProps, VideoItem } from '@site/src/types/components';
import styles from './VideoShowcase.module.css';

export default function VideoShowcase({
  videos,
  title,
  autoplay = false,
  className = '',
}: VideoShowcaseProps): JSX.Element {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  if (!videos || videos.length === 0) {
    return <div className={styles.error}>No videos available</div>;
  }

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && selectedVideo) {
      handleCloseModal();
    }
  };

  const getEmbedUrl = (url: string): string => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be')
        ? url.split('/').pop()
        : new URL(url).searchParams.get('v');
      return `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`;
    }
    return url;
  };

  return (
    <div className={`${styles.videoShowcase} ${className}`}>
      {title && <h2 className={`${styles.title} h3`}>{title}</h2>}
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div
            key={video.id}
            className={styles.videoCard}
            onClick={() => handleVideoClick(video)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleVideoClick(video);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Play video: ${video.title}`}
          >
            <div className={styles.thumbnail}>
              <img src={video.thumbnail} alt={video.title} />
              <div className={styles.playButton}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="rgba(0,0,0,0.6)" />
                  <path d="M18 14L34 24L18 34V14Z" fill="white" />
                </svg>
              </div>
              {video.duration && <span className={styles.duration}>{video.duration}</span>}
            </div>
            <h3 className={styles.videoTitle}>{video.title}</h3>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className={styles.modal}
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={handleCloseModal}
              aria-label="Close video"
            >
              ×
            </button>
            <h3 id="video-modal-title" className={styles.modalTitle}>
              {selectedVideo.title}
            </h3>
            <div className={styles.videoWrapper}>
              <iframe
                src={getEmbedUrl(selectedVideo.videoUrl)}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
