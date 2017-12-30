import React, { Component } from 'react';
import { postNewDiscussion } from '../utils/postDiscussion';

class DiscussionForm extends Component {
  constructor() {
    super();
    this.state = {
      showingForm: false,
      title: '',
      body: '',
      posted: false,
    };
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;
  }

  toggleForm() {
    this.setState({ showingForm: !this.state.showingForm });
  }

  renderForm() {
    return (
      <form action="" method="get" className="form">
        <label htmlFor="dicussion-title">
          <input
            id="dicussion-title"
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange.bind(this, 'title')}
          >
          </input>
        </label>
        <label htmlFor="dicussion-body">
          <textarea
            id="dicussion-body"
            type="text"
            name="body"
            placeholder="Detailed question"
          >
          </textarea>
        </label>
        <input
          className="submit-discussion-btn"
          type="submit"
          name="submit"
          onClick={(event) => this.handleSubmit(event)}
        >
        </input>
      </form>
    )
  }

  render() {
    const renderForm = this.state.showingForm
      ? this.renderForm()
      : null;

    return (
      <article className="discussion-form-section">
        <button
          onClick={() => this.toggleForm()}
          className="toggle-discussion-form-btn">
          <h4 className="new-discussion-option">New Discussion</h4>
          <div className="down-arrow"></div>
        </button>
        { renderForm }
      </article>
    )
  }
}

export default DiscussionForm
