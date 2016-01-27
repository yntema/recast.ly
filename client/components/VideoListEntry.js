var VideoListEntry = (prop) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={prop.entry.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{prop.entry.snippet.title}</div>
      <div className="video-list-entry-detail">{prop.entry.snippet.description}</div>
    </div>
  </div>
);

window.VideoListEntry = VideoListEntry;
