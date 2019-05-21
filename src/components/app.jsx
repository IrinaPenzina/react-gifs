import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  render() {
    const gifs = [
      { id: "SZur792USciju" },
      { id: "4NrWuucrAOu0U" },
      { id: "J2q8zK4HgrT5C" },
      { id: "kW12R0mPFuiVG" }
    ];

    return (
      <div>
        <div className="left-scene">
            <SearchBar />
          <div className="selected-gif">
            <Gif id="aQYR1p8saOQla" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
