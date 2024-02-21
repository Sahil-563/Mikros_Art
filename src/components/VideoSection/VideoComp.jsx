import React from "react";
import "./VideoCompStyles.css";
import video1 from "./videos/art_guru_gurpreet_20231002_reel_3204264671391530012_1_3204264671391530012.mp4";
import video2 from "./videos/art_guru_gurpreet_20210211_reel_2506889497875523312_1_2506889497875523312.mp4";
import video3 from "./videos/art_guru_gurpreet_20210502_reel_2564770154617835538_1_2564770154617835538.mp4";
import video4 from "./videos/art_guru_gurpreet_20230120_reel_3019417369575056748_1_3019417369575056748.mp4";
import video5 from "./videos/art_guru_gurpreet_20230506_reel_3096822053587456120_1_3096822053587456120.mp4";
import video6 from "./videos/art_guru_gurpreet_20230117_reel_3017712167457388896_1_3017712167457388896.mp4";
function VideoComp() {
  return (
    <div className="video-grid">
      {/* Video 1 */}
      <div className="video-wrapper">
        <video className="video" loop autoPlay muted>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video 2 */}
      <div className="video-wrapper">
        <video className="video" loop autoPlay muted>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video 3 */}
      <div className="video-wrapper">
        <video className="video" loop autoPlay muted>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video 4 */}
      <div className="video-wrapper">
        <video className="video" loop autoPlay muted>
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video 5 */}
      <div className="video-wrapper">
        <video className="video" loop autoPlay muted>
          <source src={video5} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-wrapper">
        <video className="video" loop autoPlay muted>
          <source src={video6} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoComp;
