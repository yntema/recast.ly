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
      currentlyPlaying: '4ZAEBxGipoA',
      videoList: exampleVideoData
    }
    this.onClickVideoTitle = this.onClickVideoTitle.bind(this)
  }
  
  onClickVideoTitle (videoId) {
    this.setState({currentlyPlaying: videoId})
    console.log(videoId, this.state)
  }

  render(){
    return (<div>
              <Nav />
              <div className="col-md-7">
                <VideoPlayer video={this.state.currentlyPlaying}/>
              </div>
              <div className="col-md-5">
                <VideoList onClickVideoTitle={this.onClickVideoTitle} videolist={this.state.videoList}/>
              </div>
            </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
