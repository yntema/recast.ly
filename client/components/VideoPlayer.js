
class VideoPlayer extends React.Component {
  constructor (props){
    super(props)
  }

  render() {
    var videoSource = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    return (  <div className="video-player">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={videoSource} allowFullScreen></iframe>
                </div>
                <div className="video-player-details">
                  <VideoDetails videoInfo={this.props.video.snippet}/>
                </div>
            </div>)
  }
}

window.VideoPlayer = VideoPlayer;
