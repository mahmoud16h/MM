import React from 'react';
import Header from '../header/';
import Sidebar from '../sidebar/';
import Content from '../content/';

export default class App extends React.Component{
  render(){
    return(
      <div className="app">
        <div className= "header-div">
          <Header/>
        </div>

        <div className= "main-div">
          <Sidebar/>
          <Content/>
        </div>
      </div>
    );
  }
}
