import React, { Component } from "react";
import "./App.css";
import EcommerceData from "../src/Assets/ecommerce-data.json";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";
import ParetoChart from "././table/ParetoChart";
import BootTable from "./table/BootTable";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalRevenue: 0,
      totalCategories: 0,
      revenueBestSellers: 0,
      averageRevenue: 0
    };
  }

  componentDidMount = () => {
    let totalRevenue = 0;
    let totalCategories = [];
    let revenueBestSellers = 0;

    EcommerceData.map(item => {
      totalRevenue += parseFloat(item.Revenue);

      if (totalCategories.indexOf(item.CATEEGORY_NAME) === -1) {
        totalCategories.push(item.CATEEGORY_NAME);
      }

      if (item.Segment === "Best Seller") {
        revenueBestSellers += parseFloat(item.Revenue);
      }
    });

    this.setState({
      totalCategories: totalCategories.length,
      totalRevenue: parseFloat(totalRevenue.toFixed(2)),
      revenueBestSellers,
      averageRevenue: parseFloat(
        (parseFloat(totalRevenue) / totalCategories.length).toFixed(2)
      )
    });
  };

  render() {
    // number of segments and segments names - extraction
    let segments = [];

    EcommerceData.map(item => {
      if (segments.indexOf(item.Segment) === -1) {
        segments.push(item.Segment);
      }
    });

    // number of categories per segment
    let segmentData = [];

    segments.map(item => {
      let categories = [];

      EcommerceData.map(catData => {
        if (catData.Segment === item) {
          if (categories.indexOf(catData.CATEEGORY_NAME) === -1) {
            categories.push(catData.CATEEGORY_NAME);
          }
        }
      });

      let singleSegmentValue = {
        segments: item,
        categoryCount: categories.length
      };

      segmentData.push(singleSegmentValue);
    });

    // revenue per segment
    let revenueData = [];

    segments.map(item => {
      let revenuePerSegment = 0;

      EcommerceData.map(catData => {
        if (catData.Segment === item) {
          revenuePerSegment += parseFloat(catData.Revenue);
        }
      });

      let singleSegmentValue = {
        segments: item,
        revenueValue: parseFloat(revenuePerSegment.toFixed(2))
      };

      revenueData.push(singleSegmentValue);
    });

    console.log(revenueData);

    return (
      <div className="superContainer">
        <header>Product Category Segmentation Report</header>
        <div className="data">
          <ul className="ul">
            <li className="li">Total Revenue : ${this.state.totalRevenue}</li>
            <li className="li">
              Total Categories : {this.state.totalCategories}
            </li>
            <li className="li">
              Revenue from Best Sellers : ${this.state.revenueBestSellers}
            </li>
            <li className="li">
              Average Revenue : ${this.state.averageRevenue}
            </li>
          </ul>
        </div>
        <div className="MainContainer">
          <div className="VerticalBar">
            <BarChart
              layout="vertical"
              width={600}
              height={250}
              data={segmentData}
              margin={{ top: 20, right: 10, left: 50, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoryCount" type="number" />
              <YAxis dataKey="segments" type="category" />
              <Tooltip />
              <Legend horizontalAlign="top" height={5} iconType="circle" />
              <Bar dataKey="categoryCount" fill="#8884d8" />
            </BarChart>
          </div>
          <div className="HorizontalBar">
            <ParetoChart />
          </div>
        </div>
        <div className="table-chart">
          <BootTable />
        </div>
      </div>
    );
  }
}

export default App;
