import React, { Component } from 'react';
import DiscussionCard from './DiscussionCard';
import { fetchDiscussions } from '../utils/getDiscussions';
/*eslint-disable*/
class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      discussions: [],
    };
  };

  componentDidMount() {
    this.getDiscussions();
  };


  async getDiscussions() {
    // try {
    //   const discussions =  fetchDiscussions();
    //   console.log('in component: ', discussions);
    //   this.setState({ discussions })
    // } catch (error) {
    //   console.log({ error });
    // }
    // await fetchDiscussions()
    //   .then((discussions) => {
    //     discussions.forEach(discussion => {
    //       console.log(discussion);
    //       return (`
    //         <article className="card">
    //           <h4>${discussion.title}</h4>
    //           <p>${discussion.body}</p>
    //           <p>${discussion.topicTag}</p>
    //         </article>
    //       `);
    //     })
    //   })
    //   .catch((error) => console.error({ error }));
  };

  render() {
    return (
      <div>
        <h2 className="current-feed-title">Discussions:</h2>
        <DiscussionCard />
      </div>
    );
  }
}

export default CardContainer;
