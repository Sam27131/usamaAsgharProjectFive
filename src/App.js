///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////Pseudocode//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This app will allow the user to click on buttons to see all the major and minor chords that can be played on a guitar
// There are 7 major and 7 minor chords and so the user can click on 14 buttons in total
// Each button will toggle a corresponding image showing how to play a chord (each button is labeled with a chord name)
// Each button will have its own state defined in this.state; in this case each state will have a value of false and will be toggled to true when the user clicks the button
// Individual functions will be applied to each individual button that will trigger only that button's state to toggle between true and false
// The reason for using boolean states is so ternary conditions can be used
// Essentially the condition will be 'if this.state.{Name of chord} is true ? display image of that chord (<img> tag) : else, display nothing
// There is also a comments section where users can leave a comment that will be stored in the firebase database

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import firebase from './firebase';
import UserComments from './UserComments';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // Setting the states of chord properties to false to be used later in ternary conditional rendering
      // Setting them to false here will ensure that no image shows up when the app is loaded
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
      // Setting the state of 'chords' array to be empty
      // This array will be populated with image URLs pulled from the firebase database
      chords: [],
    }
  }

  componentDidMount() {
    // The firebase database has 2 objects: an imageURLs object and a userComments object
    // The imageURLs object is being referenced below

    // Creating a variable that holds a reference to the firebase database referencing the imageURLs object
    const imageURLsRef = firebase.database().ref('imageURLs');

    imageURLsRef.on('value', (response) => {
      
      // A variable that will store the new state of the empty 'chords' array defined above
      const newState = [];

      // Storing the response value from firebase into a new variable
      const chordsCollection = response.val();

      // The for loop here is used to turn the object chordsCollection into an array
      for (let key in chordsCollection) {

        // Using the .push method to push the values from the object chordsCollection into the empty array newState
        newState.push(chordsCollection[key]);
      }

      // Setting the state of 'chords' array to 'newState' using this.setState
      this.setState({
        chords: newState
      });
    });
  }

  // Below are functions that will be applied to the onClick method on the buttons that will change the states to be true on button click and then false again on the next click
  // Individual toggle functions for each chord are defined so that only the state of the individual button that is clicked on is changed and only that button's image shows
  // For example, setting the state of showAmajChord to !this.state.showAmajChord will change the state from false to true rendering the image on the screen (see ternary condition statements further down the code); the next click will again change the state back to false

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

  // This function will set all the states to false and will be added to a "Clear All Chords" button below
  // The user can click this button to quickly remove all chords off the screen rather than click each individual button to toggle them off
  clearAllChords = () => {
    this.setState({
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
    })
  }

  render() {
    return (
      <div className="App wrapper">
        <div className="infoContainer">
          <h1>learn to play the major and minor guitar chords</h1>
          {/* <h2>click any button below to see a picture of how to play that chord</h2> */}
          <p>click a button once to see the picture and click it again to remove it from the screen</p>
        </div>

        
        <div className="buttons wrapper">
          <div className="major">
            <h2>major chords</h2>
            {/* Applying the unique toggle functions defined above to each respective individual button */}
            <button onClick={this.toggleAmajChord}>A Major</button>
            <button onClick={this.toggleBmajChord}>B Major</button>
            <button onClick={this.toggleCmajChord}>C Major</button>
            <button onClick={this.toggleDmajChord}>D Major</button>
            <button onClick={this.toggleEmajChord}>E Major</button>
            <button onClick={this.toggleFmajChord}>F Major</button>
            <button onClick={this.toggleGmajChord}>G Major</button>
          </div>
          <div className="minor">
            <h2>minor chords</h2>
            <button onClick={this.toggleAminChord}>A minor</button>
            <button onClick={this.toggleBminChord}>B minor</button>
            <button onClick={this.toggleCminChord}>C minor</button>
            <button onClick={this.toggleDminChord}>D minor</button>
            <button onClick={this.toggleEminChord}>E minor</button>
            <button onClick={this.toggleFminChord}>F minor</button>
            <button onClick={this.toggleGminChord}>G minor</button>
          </div>
        </div>
        <button onClick={this.clearAllChords}>Clear All Chords</button>
        <div>

          {/*
          Using ternary conditional statements that check the boolean status of this.state.show***Chord.
          When true, it will add an img tag to the DOM : else, it will remove the image from the DOM

          Referenced code from following website: https://www.quora.com/Using-React-what-is-the-best-way-to-show-and-hide-an-image
          Credit goes to users: Tobias Zucali and Robin Wieruch
          */}

          {/* Note: this.state.chords[0].(chordname) is referencing the firebase database and pulling the stored image URLs that are passed to the src attribute */}
          
          {this.state.showAmajChord ? (<img src={this.state.chords[0]} alt="The fingering pattern of the A major Chord"/>) : null}
          {this.state.showBmajChord ? (<img src={this.state.chords[2]} alt="The fingering pattern of the B major Chord"/>) : null}
          {this.state.showCmajChord ? (<img src={this.state.chords[4]} alt="The fingering pattern of the C major Chord"/>) : null}
          {this.state.showDmajChord ? (<img src={this.state.chords[6]} alt="The fingering pattern of the D major Chord"/>) : null}
          {this.state.showEmajChord ? (<img src={this.state.chords[8]} alt="The fingering pattern of the E major Chord"/>) : null}
          {this.state.showFmajChord ? (<img src={this.state.chords[10]} alt="The fingering pattern of the F major Chord"/>) : null}
          {this.state.showGmajChord ? (<img src={this.state.chords[12]} alt="The fingering pattern of the G major Chord"/>) : null}
          {this.state.showAminChord ? (<img src={this.state.chords[1]} alt="The fingering pattern of the A minor Chord"/>) : null}
          {this.state.showBminChord ? (<img src={this.state.chords[3]} alt="The fingering pattern of the B minor Chord"/>) : null}
          {this.state.showCminChord ? (<img src={this.state.chords[5]} alt="The fingering pattern of the C minor Chord"/>) : null}
          {this.state.showDminChord ? (<img src={this.state.chords[7]} alt="The fingering pattern of the D minor Chord"/>) : null}
          {this.state.showEminChord ? (<img src={this.state.chords[9]} alt="The fingering pattern of the E minor Chord"/>) : null}
          {this.state.showFminChord ? (<img src={this.state.chords[11]} alt="The fingering pattern of the F minor Chord"/>) : null}
          {this.state.showGminChord ? (<img src={this.state.chords[13]} alt="The fingering pattern of the G minor Chord"/>) : null}
        </div>
        {/* Imported UserComments component */}
        <UserComments />
        <footer>
          <p><span>&#169;</span> Copyright 2020 Usama Asghar <br/> All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
