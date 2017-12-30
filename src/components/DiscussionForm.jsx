import React, { Component } from 'react';
import { postNewDiscussion } from '../utils/postDiscussion';

class DiscussionForm extends Component {
  constructor() {
    super();
    this.state = {
      formShowing: false,
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
    this.setState({ formShowing: !this.state.formShowing });
  }

  renderForm() {
    return (
      <form action="" method="get">
        <label htmlFor="GET-dicussion-title">Quick Description:
          <input
            id="GET-dicussion-title"
            type="text"
            name="title"
            onChange={this.handleChange.bind(this, 'title')}
          />
        </label>
        <label htmlFor="GET-dicussion-body">Detailed Question:
          <input
            id="GET-dicussion-body"
            type="text"
            name="body"
          />
        </label>
        <input
          className="submit-discussion"
          type="submit"
          name="submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
    )
  }

  render() {
    const { formShowing } = this.state;

    const renderForm = formShowing
      ? this.renderForm()
      : null;

    return (
      <article className="discussion-form-section">
        <button
          onClick={() => this.toggleForm()}
          className="add-discussion-btn">
          <p className="new-discussion-option">New Discussion</p>
          <div className="down-arrow"></div>
          { renderForm }
        </button>
      </article>
    )
  }
}

export default DiscussionForm
