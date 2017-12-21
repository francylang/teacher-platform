import React, { Component } from 'react';
import { postNewDiscussion } from '../utils/postDiscussion';

class DiscussionForm extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log('submit');
    // postNewDiscussion(title, body);
    // this.setState({
    //   posted: true,
    // });
  }

  render() {
    return (
      <article>
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
      </article>
    )
  }
}

export default DiscussionForm
