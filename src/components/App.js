import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const KEY = 'AIzaSyAydF2UPyJ2xoTUh3Y77OhtX5bi8GNARVc';

class App extends React.Component {
  state = { videos: [], videoSelected: null };
  componentDidMount() {
    this.onTermSubmit('test');
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        type: 'video',
        part: 'snippet',
        maxResults: 5,
        key: KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      videoSelected: response.data.items[0],
    });
  };

  onVideoSelect = async (video) => {
    this.setState({ videoSelected: video });
  };
  render() {
    return (
      <div style={{ marginTop: 20 }} className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
              <VideoList
                onvideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
