class VideoDetails extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
 var humanPublishedAt = moment(this.props.videoInfo.publishedAt).format("dddd, MMMM Do YYYY")
  return   (<div>
              <h3>{this.props.videoInfo.title}</h3>
              <div className='videoPublished'>{"Published On: "+humanPublishedAt}</div>
              <div className='videoDescription'>{this.props.videoInfo.description}</div>
              <div className='videoLikes'>
                <span className='glyphicon glyphicon-thumbs-up'></span>
                  {' '+(this.props.videoDetails.items[0].statistics.likeCount || 0)+' '} 
                <span className='glyphicon glyphicon-thumbs-down'></span>
                  {' '+(this.props.videoDetails.items[0].statistics.dislikeCount || 0)}
              </div>
              <div className='viewCount'>
                <span className='glyphicon glyphicon-signal'></span>
                  {' '+this.props.videoDetails.items[0].statistics.viewCount}
              </div>
            </div>)
  }
}

window.VideoDetails = VideoDetails;