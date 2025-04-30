import React, { useEffect, useRef } from "react";
import VideoPlayer from "../components/VideoPlayer";

function Top() {
    const videoRef = useRef(null);
    const textRef = useRef(null);

    // 设置滚动动画
    useEffect(() => {
        const scrollText = () => {
            if (textRef.current) {
                // 重置位置到起始点
                if (textRef.current.scrollLeft >= (textRef.current.scrollWidth - textRef.current.clientWidth)) {
                    textRef.current.scrollLeft = 0;
                } else {
                    // 缓慢滚动
                    textRef.current.scrollLeft += 1;
                }
            }
        };
        
        // 设置滚动定时器
        const scrollInterval = setInterval(scrollText, 30);
        
        return () => {
            clearInterval(scrollInterval);
        };
    }, []);
    
    return (
      <div className="mv">
        {/* 视频背景 */}
        <VideoPlayer
          ref={videoRef}
          src="/sample.MOV"
          poster="/sample.jpg"
          className="video-player"
        />

        {/* 滚动文字容器 */}
        <div className="scrolling-text-wrapper" ref={textRef}>
          <div className="scrolling-text ttl">
            TECHNOLOGY ART MEDIA TECHNOLOGY ART MEDIA TECHNOLOGY ART MEDIA TECHNOLOGY ART MEDIA
          </div>
        </div>
      </div>
    );
}

export default Top;