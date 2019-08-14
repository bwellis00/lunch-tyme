import React, { Component } from 'react';
import Navigation from './components/Navigation';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import { Provider } from './context';

import './App.css';

class App extends Component {
 
  state = {
    detailViewOpen: false,
    detailInfo: []
  };

  updateDetailView(value){
    this.setState(
      {detailInfo: value}
      );
}

  updateToggle(value){
    this.setState(
      {detailViewOpen: value}
    )
  }

    render() {
        
        return (
          <Provider>
          <div className="container">
            <Navigation detailViewOpen={this.state.detailViewOpen} updateToggle={this.updateToggle.bind(this)}/>
            <ListView updateDetailView={this.updateDetailView.bind(this)} updateToggle={this.updateToggle.bind(this)} />
            <DetailView show={this.state.detailViewOpen} detailInfo={this.state.detailInfo}/>
        </div>
        </Provider>
        )
    }
}

export default App;

