import React, { Component } from 'react';

import SerchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SerchBar />
      	<WeatherList />
      </div>
    );
  }
}
