class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentlyPlaying: window.emptyVideoList[0],
      videoList: window.emptyVideoList,
      searchQuery: '',
      lastCalled: undefined,
      currentlyPlayingDetails: window.emptyVideoDetails
    }
  }

  searchAndUpdateState (queryObject, url) {
    url = url || 'https://www.googleapis.com/youtube/v3/search'

    if(this.state.lastCalled && Date.now() - this.state.lastCalled <400) return;

    searchYouTube(queryObject, results => {
      var getFirstOrSecondVideoObject = results.items[0].id.videoId ? results.items[0] : results.items[1]

      this.setState({currentlyPlaying: getFirstOrSecondVideoObject,
                     videoList: results.items,
                     lastCalled: Date.now()})
      var detailsQueryObject = {id: this.state.currentlyPlaying.id.videoId, key:YOUTUBE_API_KEY, part:'statistics'}
      searchYouTube(detailsQueryObject, results => {
        console.log(this.state.currentlyPlaying)
        this.setState({currentlyPlayingDetails: results})
      }, 'https://www.googleapis.com/youtube/v3/videos')
    }, url)

  }

  componentDidMount () {
     this.searchAndUpdateState({q:'Jimmy Fallon', maxResults:5,videoEmbeddable:true, type:'video', key:YOUTUBE_API_KEY, part:'snippet'})
   }


  onClickVideoTitle (videoObj) {
    // console.log(videoObj)
    this.setState({currentlyPlaying: videoObj})
    var detailsQueryObject = {id: this.state.currentlyPlaying.id.videoId, key:YOUTUBE_API_KEY, part:'statistics'}
    searchYouTube(detailsQueryObject, results => {
      console.log(this.state.currentlyPlaying)
      this.setState({currentlyPlayingDetails: results})
    }, 'https://www.googleapis.com/youtube/v3/videos')
  }



  searchOnKeyUp (event) {
    this.setState({searchQuery: event.target.value})
    var newQueryObject = {q:event.target.value, maxResults: 5,videoEmbeddable:true, type:'video', key:YOUTUBE_API_KEY, part:'snippet'}
    this.searchAndUpdateState(newQueryObject)
  }  

  searchOnButtonClick (event) {

  }

  render(){
      
    return (<div>
              <Nav searchOnKeyUp={this.searchOnKeyUp.bind(this)}/>
              <div className="col-md-7">
                <VideoPlayer video={this.state.currentlyPlaying} videoDetails={this.state.currentlyPlayingDetails}/>
              </div>
              <div className="col-md-5">
                <VideoList onClickVideoTitle={this.onClickVideoTitle.bind(this)} videolist={this.state.videoList}/>
              </div>
            </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
