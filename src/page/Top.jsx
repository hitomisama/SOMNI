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
      <>
        <div className="top-container">
          {/* 固定文字背景区域 */}
          <div className="scrolling-text-wrapper" ref={textRef}>
            <div className="scrolling-text ttl">
              TECHNOLOGY ART MEDIA TECHNOLOGY ART MEDIA TECHNOLOGY ART MEDIA TECHNOLOGY ART MEDIA
            </div>
          </div>

          {/* 视频和其他内容 */}
          <div className="mv">
            {/* 视频背景 */}
            <VideoPlayer
              ref={videoRef}
              src="/sample.MOV"
              poster="/sample.jpg"
              className="video-player"
            />
          </div>
        </div>

        <div className="about">
          <div className="about_img">
          <img src="/logo_about.png" alt="logo" className="logo" />
          </div>
          <div className="about_container">
          <p className="about_text">呓语是一家用影像说梦话的创意工作室。</p>
          <p className="about_text">我们喜欢从生活的小细节中找灵感，把想象力变成看得见的画面。</p>
          <p className="about_text">梦境、情绪、记忆，这些看不见的东西，都是我们创作的素材。</p>
          <p className="about_text">我们擅长结合手绘和数字技术，让作品更有温度和个性。</p>
          <p className="about_text">戴着睡帽的月亮，是我们创作的象征，也代表着对潜意识的探索。</p>
          <p className="about_text">呓语希望用影像表达每个人心里那句说不出口的话。</p>
          </div>
        </div>
      </>
    );
}

export default Top;