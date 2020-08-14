// This component will render a comments section on the app
// There will be an input field where user's can enter a comment
// A remove comment button will also appear under each comment
////////////////////////// Note: The firebase codealong was referenced to create this code ////////////////////////////

import React, { Component } from 'react';
import firebase from './firebase';

class UserComments extends Component {
  constructor() {
    super();

    this.state = {
      commentsArray: [],
      comments: ""
    }
  }

  // The below code was created referencing the firebase codealong from class
  componentDidMount() {
    // Creating a variable that holds a reference to the firebase database referencing the userComments object
    const commentsRef = firebase.database().ref('userComments');

    commentsRef.on('value', (response) => {
      const commentsData = response.val();
      const newCommentsArray = [];
      for (let item in commentsData) {
        const commentsCollection = {
          id: item,
          comment: commentsData[item]
        }
        newCommentsArray.push(commentsCollection);
      }
      this.setState({
        commentsArray: newCommentsArray
      })
    })
  }

  inputComment = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  submitComment = (event) => {
    // Preventing default behaviour of submit button
    event.preventDefault();
    const commentsRef = firebase.database().ref('userComments');
    commentsRef.push(this.state.comments);

    this.setState({
      comments: ""
    })
  }

  removeComment = (commentIndex) => {
    const commentsRef = firebase.database().ref('userComments');
    commentsRef.child(commentIndex).remove();
  }

  render () {
    return (
      <div className="commentsContainer">
        <h2>Comments</h2>

        <form action="submit">
          <label htmlFor="userComment">Leave a comment below!</label><br/>
          <input onChange={this.inputComment} type="textarea" id="userComment" value={this.state.comments}/><br/>
          <button onClick={this.submitComment}>Submit Comment</button>
        </form>

        { this.state.commentsArray.map((comments) => {
            return (
              <div className="eachComment">
                <li key={comments.id}>
                  <p>{comments.comment}</p>
                  <button onClick={ () => this.removeComment(comments.id)}>Remove Comment</button>
                </li>
              </div>
            )
          }) }
      </div>
    )
  }
}

export default UserComments;