import React from "react";

import ParetoChart from "pareto-chart";

class Example extends React.Component {
  render() {
    return (
      <ParetoChart
        width={600}
        height={350}
        lineLabel="Cumulative percentage"
        data={{
          Categories: {
            "Best Seller": 253499.1,
            Evergreen: 17157.81,
            "New Category": 695.57,
            "Old Category- No recent demand": 14291.87
          }
        }}
      />
    );
  }
}

export default Example;
