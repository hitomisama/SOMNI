import React from "react";
import "../styles/VideoPlayer.css"; // 样式可单独放

function VideoPlayer({ src, title, description, poster }) {
  return (
    <div className="video-wrapper">
      <video
        src={src}
        controls
        className="video-element"
        poster={poster || ""}
      >
        您的浏览器不支持视频播放
      </video>
      {title && <h3 className="video-title">{title}</h3>}
      {description && <p className="video-description">{description}</p>}
    </div>
  );
}

export default VideoPlayer;