import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie, VictoryBar, VictoryChart } from 'victory';

const data = [
  {week: 1, "discussions/comments": 13000},
  {week: 2, "discussions/comments": 16500},
  {week: 3, "discussions/comments": 14250},
  {week: 4, "discussions/comments": 19000}
];

class Landing extends React.Component {
  render() {
    return (
      <section className="victory-container">
        <div className="activity-chart">
          <h4 className="acitivty-data-title">Your activity</h4>
          <VictoryChart>
            <VictoryBar
              style={{ data: { fill: "#40ECB2" } }}
              data={[
                {week: 1, "discussions/comments": 13000},
                {week: 2, "discussions/comments": 16500},
                {week: 3, "discussions/comments": 14250},
                {week: 4, "discussions/comments": 19000}
              ]}
              x="week"
              y="discussions/comments"

            />
          </VictoryChart>
        </div>
        <div className="icon-data">
          <article className="discussion-data">
            <h4 className="data-title">Your Discussions</h4>
            <div className="discussion-icon"></div>
            <h3 className="data-title">6</h3>
          </article>
          <article className="comment-data">
            <h4 className="data-title">Your Comments</h4>
            <div className="comment-icon"></div>
            <h3 className="data-title">14</h3>
          </article>
        </div>
        <div className="domain-breakdown">
          <h4 className="breakdown-data-title">All Discussions</h4>
          <VictoryPie
            innerRadius={100}
            colorScale={["#40ECB2", "#D155FF", "#5C40EC", "#D0EC40", "#FF7C55"]}
            data={[
              { x: 1, y: 15, label: "NS" },
              { x: 2, y: 9, label: "RP/F" },
              { x: 3, y: 5, label: "EE" },
              { x: 4, y: 3, label: "G " },
              { x: 5, y: 3, label: "SP" },
            ]}
            labelRadius={112}
            style={{ labels: { fill: "white", fontSize: 20 } }}
          />
        </div>
      </section>
    );
  }
}

export default Landing;
