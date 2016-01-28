// var VideoListEntry = (prop) => (
//   <div className="video-list-entry">
//     <div className="media-left media-middle">
//       <img className="media-object" src={prop.entry.snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div onClick={this.onClickedVideoTitle} className="video-list-entry-title">{prop.entry.snippet.title}</div>
//       <div className="video-list-entry-detail">{prop.entry.snippet.description}</div>
//     </div>
//   </div>
// );




class VideoListEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="video-list-entry">
                <div className="media-left media-middle">
                  <img className="media-object" src={this.props.entry.snippet.thumbnails.default.url} alt="" />
                </div>
                <div className="media-body">
                  <div onClick={this.props.onClickVideoTitle.bind(null, this.props.entry.id.videoId)} className="video-list-entry-title">{this.props.entry.snippet.title}</div>
                  <div className="video-list-entry-detail">{this.props.entry.snippet.description}</div>
                </div>
            </div>)
  }

}

window.VideoListEntry = VideoListEntry;
// this.props.entry.snippet.thumbnails.default.url