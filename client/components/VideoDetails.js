class VideoDetails extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
  return   (<div>
              <h3>{this.props.videoInfo.title}</h3>
              <div>{this.props.videoInfo.description}</div>
            </div>)
  }
}

window.VideoDetails = VideoDetails;