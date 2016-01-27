var VideoList = () => (
  <div className="video-list media">
    <VideoListEntry entry={exampleVideoData[0]}/>
    <VideoListEntry entry={exampleVideoData[1]}/>
    <VideoListEntry entry={exampleVideoData[2]}/>
    <VideoListEntry entry={exampleVideoData[3]}/>
    <VideoListEntry entry={exampleVideoData[4]}/>
  </div>
);

window.VideoList = VideoList;
