import React from 'react'
import './App.css';
import Loading from './components/Loading';
import PersonalDetail from './components/PersonalDetail';

class App extends React.Component {
  render() {
    return (
      <>
        <Loading />
        <PersonalDetail />
      </>
    );
  }
}

export default App;
