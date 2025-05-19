
function VideoContent() {
  return (
    <video
      width={ 310 }
      height={ 527 }
      controls
      style={ { objectFit: 'cover', borderRadius: '11px' } }
    >
      <source src="https://files.fullstack.edu.vn/f8-tiktok/videos/3712-666b02d872740.mp4" type="video/mp4" />
      Trình duyệt của bạn không hỗ trợ thẻ video.
    </video>
  )
}

export default VideoContent