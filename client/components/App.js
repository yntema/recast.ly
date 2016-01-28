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
      currentlyPlaying: window.emptyVideoList[0],
      videoList: window.emptyVideoList,
      searchQuery: '',
      lastCalled: undefined
    }
  }

  searchAndUpdateState (queryObject) {
    if(this.state.lastCalled && Date.now() - this.state.lastCalled <400) return
    searchYouTube(queryObject, function (results) {
      var getFirstOrSecondVideoObject = results.items[0].id.videoId ? results.items[0] : results.items[1]
      this.setState({currentlyPlaying: getFirstOrSecondVideoObject,
                     videoList: results.items,
                     lastCalled: Date.now()})
    }.bind(this))
  }

  componentDidMount () {
     this.searchAndUpdateState({q:'Jimmy Fallon', max:10, key:YOUTUBE_API_KEY, part:'snippet'})
   }


  onClickVideoTitle (videoObj) {
    this.setState({currentlyPlaying: videoObj})
  }



  searchOnKeyUp (event) {
    this.setState({searchQuery: event.target.value})
    var newQueryObject = {q:event.target.value, max: 10, key:YOUTUBE_API_KEY, part:'snippet'}
    this.searchAndUpdateState(newQueryObject)
  }  

  searchOnButtonClick (event) {

  }

  render(){
      
    return (<div>
              <Nav searchOnKeyUp={this.searchOnKeyUp.bind(this)}/>
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
