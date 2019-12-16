// import React from "react";
// import ReactDataGrid from "react-data-grid";
// import EcommerceData from "../Assets/ecommerce-data";
// import "bootstrap/dist/css/bootstrap.css";

// const columns = [
//   { key: "catName", name: "Category Name", sortDescendingFirst: true },
//   { key: "date1", name: "First Transaction Date" },
//   { key: "date2", name: "Last Transaction Date" },
//   { key: "rev", name: "Revenue" },
//   { key: "seg", name: "Segment" }
// ];

// const categoryName = EcommerceData.map(catName => catName.CATEEGORY_NAME);
// const firstDate = EcommerceData.map(first => first.First_Transaction_Date);
// const lastDate = EcommerceData.map(last => last.Last_Transaction_Date);
// const rev = EcommerceData.map(r => r.Revenue);
// const seg = EcommerceData.map(s => s.Segment);

// function catFun(catName, date1, date2, rev, seg) {
//   this.catName = catName;
//   this.date1 = date1;
//   this.date2 = date2;
//   this.rev = rev;
//   this.seg = seg;
// }

// var rowData = [];

// for (var i = 0; i < categoryName.length; i++) {
//   rowData[i] = new catFun(
//     categoryName[i],
//     firstDate[i],
//     lastDate[i],
//     rev[i],
//     seg[i]
//   );
// }

// const Table = function() {
//   return (
//     <ReactDataGrid
//       columns={columns}
//       rowGetter={i => rowData[i]}
//       rowsCount={categoryName.length}
//       minHeight={300}
//     />
//   );
// };

// export default Table;
