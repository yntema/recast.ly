// var VideoPlayer = (prop) => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.state.currentlyPlaying}`} allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>Video Title</h3>
//       <div>Video Description</div>
//     </div>
//   </div>
// );


class VideoPlayer extends React.Component {
  constructor (props){
    super(props)
  }

  render() {
    var videoSource = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    console.log(this.props.video.id.videoId)

    return (  <div className="video-player">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={videoSource} allowFullScreen></iframe>
                </div>
                <div className="video-player-details">
                  <h3>{this.props.video.snippet.title}</h3>
                  <div>{this.props.video.snippet.description}</div>
                </div>
            </div>)
  }
}

window.VideoPlayer = VideoPlayer;
