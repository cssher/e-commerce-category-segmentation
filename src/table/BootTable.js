import BootstrapTable from "react-bootstrap-table-next";
import EcommerceData from "../Assets/ecommerce-data";
import "bootstrap/dist/css/bootstrap.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import React from "react";
import "../App.css";

const categoryName = EcommerceData.map(catName => catName.CATEEGORY_NAME);
const firstDate = EcommerceData.map(first => first.First_Transaction_Date);
const lastDate = EcommerceData.map(last => last.Last_Transaction_Date);
const rev = EcommerceData.map(r => r.Revenue);
const seg = EcommerceData.map(s => s.Segment);

function catFun(catName, date1, date2, rev, seg) {
  this.catName = catName;
  this.date1 = date1;
  this.date2 = date2;
  this.rev = rev;
  this.seg = seg;
}

var rowData = [];

for (var i = 0; i < categoryName.length; i++) {
  rowData[i] = new catFun(
    categoryName[i],
    firstDate[i],
    lastDate[i],
    rev[i],
    seg[i]
  );
}

// const selectOptionsArr = [
//   {
//     value: 0,
//     label: "Best Seller"
//   },
//   {
//     value: 1,
//     label: "Evergreen"
//   },
//   {
//     value: 2,
//     label: "Old Category-No recent demand"
//   },
//   {
//     value: 3,
//     label: "New Category"
//   }
// ];

const columns = [
  {
    dataField: "catName",
    text: "Category Name",
    sort: true,
    headerStyle: {
      backgroundColor: "#c8e6c9"
    }
  },
  {
    dataField: "date1",
    text: "First Transaction Date",
    sort: true,
    headerStyle: {
      backgroundColor: "#c8e6c9"
    }
  },
  {
    dataField: "date2",
    text: "Last Transaction Date",
    sort: true,
    headerStyle: {
      backgroundColor: "#c8e6c9"
    }
  },
  {
    dataField: "rev",
    text: "Revenue",
    sort: true,
    headerStyle: {
      backgroundColor: "#c8e6c9"
    }
  },
  {
    dataField: "seg",
    text: "Segment",
    sort: true,
    filter: textFilter(),
    headerStyle: {
      backgroundColor: "#c8e6c9"
    }
  }
];

const defaultSorted = [
  {
    dataField: "catName",
    order: "desc"
  }
];

const CaptionElement = () => (
  <h4
    style={{
      borderRadius: "0.25em",
      textAlign: "center",
      color: "purple",
      border: "1px solid purple",
      padding: "0.5em",
      margin: "0"
    }}
  >
    Category Details Table
  </h4>
);

const BootTable = function() {
  return (
    <BootstrapTable
      caption={<CaptionElement />}
      keyField="id"
      data={rowData}
      columns={columns}
      defaultSorted={defaultSorted}
      pagination={paginationFactory()}
      filter={filterFactory()}
      striped
      hover
      condensed
      wrapperClasses="boo"
      classes="foo"
      id="bar"
    />
  );
};

export default BootTable;
