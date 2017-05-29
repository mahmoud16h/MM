import React from 'react';
import Header from '../header/';
import Sidebar from '../sidebar/';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Sidebar/>
      </div>
      )
  }
}
