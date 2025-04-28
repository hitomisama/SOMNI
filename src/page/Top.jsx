import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";



function Top() {
    
return(
    <>
        <div className="ttl">TECHNOLOGY ART MEDIA</div>
        <VideoPlayer
            src="https://www.bilibili.com/opus/412118424337929280"
            // title="SOMIN 宣传片"
            // description="这是我们最新的品牌视频"
            poster="https://your-oss/cover.jpg"
        />
    </>
)
}

export default Top