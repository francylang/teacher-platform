import React, { Component } from 'react';

class DiscussionForm extends Component {
  render() {
    return (
      <article>
        <form action="" method="get">
          <label htmlFor="GET-dicussion-title">Quick Description:
            <input id="GET-dicussion-title" type="text" name="title" />
          </label>
          <label htmlFor="GET-dicussion-body">Detailed Question:
            <input id="GET-dicussion-body" type="text" name="body" />
          </label>
          <input className="submit-discussion" type="submit" name="submit" />
        </form>
      </article>
    );
  }
}

export default DiscussionForm;
