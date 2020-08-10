import React, { Component } from 'react';
import firebase from './firebase'
import './App.css';
import image1 from './assets/Amajor.png'
import image2 from './assets/Bmajor.png'
import image3 from './assets/Cmajor.png'
import image4 from './assets/Dmajor.png'
import image5 from './assets/Emajor.png'
import image6 from './assets/Fmajor.png'
import image7 from './assets/Gmajor.png'
import image8 from './assets/Aminor.png'
import image9 from './assets/Bminor.png'
import image10 from './assets/Cminor.png'
import image11 from './assets/Dminor.png'
import image12 from './assets/Eminor.png'
import image13 from './assets/Fminor.png'
import image14 from './assets/Gminor.png'

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Setting the property showChordImage to false to be used later in conditional rendering
      // This will ensure that no image shows up when the app is loaded
      showAmajChord: false,
      showBmajChord: false,
      showCmajChord: false,
      showDmajChord: false,
      showEmajChord: false,
      showFmajChord: false,
      showGmajChord: false,
      showAminChord: false,
      showBminChord: false,
      showCminChord: false,
      showDminChord: false,
      showEminChord: false,
      showFminChord: false,
      showGminChord: false,
    }
  }

  componentDidMount() {
    // Creating a variable that holds a reference to the firebase database
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      console.log(response.val());
      
      // A variable that will store the new state
      const newState = [];

      // Storing the response value from firebase into a new variable
      const chordsCollection = response.val();

      // The for loop here is used to turn the object chordsCollection into an array
      // 'Key' here is used to represent the index of each entry in the object
      for (let key in chordsCollection) {

        // Using the .push method to push the values from the object chordsCollection into the empty array newState
        newState.push(chordsCollection[key]);
      }

      // then, we call this.setState in order to update our component's state using the local array newState
      this.setState({
        chords: newState
      });

      console.log(newState);
    });
  }

  // Functions to be applied to the buttons that will change the states to be true on button click and then false again on the next click
  toggleAmajChord = () => {
    this.setState({
      showAmajChord: !this.state.showAmajChord
    })
  }

  toggleBmajChord = () => {
    this.setState({
      showBmajChord: !this.state.showBmajChord
    })
  }

  toggleCmajChord = () => {
    this.setState({
      showCmajChord: !this.state.showCmajChord
    })
  }

  toggleDmajChord = () => {
    this.setState({
      showDmajChord: !this.state.showDmajChord
    })
  }

  toggleEmajChord = () => {
    this.setState({
      showEmajChord: !this.state.showEmajChord
    })
  }

  toggleFmajChord = () => {
    this.setState({
      showFmajChord: !this.state.showFmajChord
    })
  }

  toggleGmajChord = () => {
    this.setState({
      showGmajChord: !this.state.showGmajChord
    })
  }

  toggleAminChord = () => {
    this.setState({
      showAminChord: !this.state.showAminChord
    })
  }

  toggleBminChord = () => {
    this.setState({
      showBminChord: !this.state.showBminChord
    })
  }

  toggleCminChord = () => {
    this.setState({
      showCminChord: !this.state.showCminChord
    })
  }

  toggleDminChord = () => {
    this.setState({
      showDminChord: !this.state.showDminChord
    })
  }

  toggleEminChord = () => {
    this.setState({
      showEminChord: !this.state.showEminChord
    })
  }

  toggleFminChord = () => {
    this.setState({
      showFminChord: !this.state.showFminChord
    })
  }

  toggleGminChord = () => {
    this.setState({
      showGminChord: !this.state.showGminChord
    })
  }

  render() {
    return (
      <div className="App" className="wrapper">
        <div className="infoContainer">
          <h1>learn how to play all the major and minor guitar chords</h1>
          <h2>click any button below to see a picture of how to play that chord</h2>
        </div>
        <p>click a button once to see the picture and click it again to remove it from the screen</p>
        <div className="buttons">
          <button onClick={this.toggleAmajChord}>A Major</button>
          <button onClick={this.toggleBmajChord}>B Major</button>
          <button onClick={this.toggleCmajChord}>C Major</button>
          <button onClick={this.toggleDmajChord}>D Major</button>
          <button onClick={this.toggleEmajChord}>E Major</button>
          <button onClick={this.toggleFmajChord}>F Major</button>
          <button onClick={this.toggleGmajChord}>G Major</button>
          <button onClick={this.toggleAminChord}>A minor</button>
          <button onClick={this.toggleBminChord}>B minor</button>
          <button onClick={this.toggleCminChord}>C minor</button>
          <button onClick={this.toggleDminChord}>D minor</button>
          <button onClick={this.toggleEminChord}>E minor</button>
          <button onClick={this.toggleFminChord}>F minor</button>
          <button onClick={this.toggleGminChord}>G minor</button>
        </div>
        <div className="chordImages">
          {/*
          A ternary conditional statement that checks the boolean status of this.state.showChord
          When true, it will add an img tag to the DOM 

          Referenced code from following website: https://www.quora.com/Using-React-what-is-the-best-way-to-show-and-hide-an-image
          Credit goes to users: Tobias Zucali and Robin Wieruch
          */}
          { this.state.showAmajChord ? (<img src={image1} alt="The fingering pattern of the A major Chord"/>) : null }
          { this.state.showBmajChord ? (<img src={image2} alt="The fingering pattern of the B major Chord"/>) : null }
          { this.state.showCmajChord ? (<img src={image3} alt="The fingering pattern of the C major Chord"/>) : null }
          { this.state.showDmajChord ? (<img src={image4} alt="The fingering pattern of the D major Chord"/>) : null }
          { this.state.showEmajChord ? (<img src={image5} alt="The fingering pattern of the E major Chord"/>) : null }
          { this.state.showFmajChord ? (<img src={image6} alt="The fingering pattern of the F major Chord"/>) : null }
          { this.state.showGmajChord ? (<img src={image7} alt="The fingering pattern of the G major Chord"/>) : null }
          { this.state.showAminChord ? (<img src={image8} alt="The fingering pattern of the A minor Chord"/>) : null }
          { this.state.showBminChord ? (<img src={image9} alt="The fingering pattern of the B minor Chord"/>) : null }
          { this.state.showCminChord ? (<img src={image10} alt="The fingering pattern of the C minor Chord"/>) : null }
          { this.state.showDminChord ? (<img src={image11} alt="The fingering pattern of the D minor Chord"/>) : null }
          { this.state.showEminChord ? (<img src={image12} alt="The fingering pattern of the E minor Chord"/>) : null }
          { this.state.showFminChord ? (<img src={image13} alt="The fingering pattern of the F minor Chord"/>) : null }
          { this.state.showGminChord ? (<img src={image14} alt="The fingering pattern of the G minor Chord"/>) : null }
        </div>
        <footer>
        <p><span>&#169;</span> Copyright 2020 Usama Asghar <br/> All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
