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
        <div className="domain-breakdown">
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
        <article className="discussion-data">
          <h3 className="data-title">Discussions</h3>
          <div className="discussion-icon"></div>
        </article>
        <article className="comment-data">
          <h3 className="data-title">Comments</h3>
          <div className="comment-icon"></div>
        </article>
        <div className="activity-chart">
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
      </section>
    );
  }
}

export default Landing;
