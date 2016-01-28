// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );




class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentlyPlaying: '',
      videoList: window.emptyVideoList
    }
    console.log(window.emptyVideoList);
    // this.onClickVideoTitle = this.onClickVideoTitle.bind(this)
  }

  componentDidMount () {
     searchYouTube({query:'testquery', max:10, key:YOUTUBE_API_KEY, part:'snippet'}, function (results) {
      this.setState({currentlyPlaying: results.items[0].id.videoId,
                     videoList: results.items})
      console.log(results.items);
     }.bind(this))
   }



  
  onClickVideoTitle (videoId) {
    this.setState({currentlyPlaying: videoId})
  }

  render(){
      
    return (<div>
              <Nav />
              <div className="col-md-7">
                <VideoPlayer video={this.state.currentlyPlaying}/>
              </div>
              <div className="col-md-5">
                <VideoList onClickVideoTitle={this.onClickVideoTitle.bind(this)} videolist={this.state.videoList}/>
              </div>
            </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
