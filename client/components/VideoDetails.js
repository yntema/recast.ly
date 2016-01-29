class VideoDetails extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {

  return   (<div>
              <h3>{this.props.videoInfo.title}</h3>
              <div className='videoPublished'>{"Published On: "+this.props.videoInfo.publishedAt}</div>
              <div className='videoDescription'>{this.props.videoInfo.description}</div>
              <div className='videoLikes'>
                <span className='glyphicon glyphicon-thumbs-up'></span>
                  {' '+this.props.videoDetails.items[0].statistics.likeCount+' '}
                <span className='glyphicon glyphicon-thumbs-down'></span>
                  {' '+this.props.videoDetails.items[0].statistics.dislikeCount}
              </div>
              <div className='viewCount'>
                <span className='glyphicon glyphicon-signal'></span>
                  {' '+this.props.videoDetails.items[0].statistics.viewCount}
              </div>
            </div>)
  }
}

window.VideoDetails = VideoDetails;