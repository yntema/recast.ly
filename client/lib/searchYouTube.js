var searchYouTube = (options, callback) => {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,

    success (data) {
      callback(data);
    },
    error (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('Failed to fetch from Youtube API endpoint');
    }
  });

};

window.searchYouTube = searchYouTube;
