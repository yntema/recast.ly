// var VideoList = () => (
//   <div className="video-list media">
//     <VideoListEntry entry={exampleVideoData[0]}/>
//     <VideoListEntry entry={exampleVideoData[1]}/>
//     <VideoListEntry entry={exampleVideoData[2]}/>
//     <VideoListEntry entry={exampleVideoData[3]}/>
//     <VideoListEntry entry={exampleVideoData[4]}/>
//   </div>
// );

class VideoList extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        // this.props.videoList = this.props.videoList || exampleVideoData[0];
        console.log(this.props, "vidoelist")
        return (<div className="video-list media">
                  <VideoListEntry onClickVideoTitle={this.props.onClickVideoTitle} entry={this.props.videoList}/>
                </div>)
    }
}

window.VideoList = VideoList;
