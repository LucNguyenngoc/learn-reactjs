import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Hoa Thịnh Hành",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/2/7/8/4/278427fa3c50a2d46f58b5a7078b6f3d.jpg",
    },
    {
      id: 2,
      name: "Nhạc Việt Nghe Là Ghiền",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg",
    },
    {
      id: 3,
      name: "Trào Lưu Nhạc Hot",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r16x9_jpeg/thumb_video/4/7/7/5/47755662b9802742229217de267b24fe.jpg",
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
