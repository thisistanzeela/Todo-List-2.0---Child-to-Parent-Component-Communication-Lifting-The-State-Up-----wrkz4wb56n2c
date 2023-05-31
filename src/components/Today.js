// import React from "react";
// import ListRender from "./ListRender";

// const Today = (props) => {
//   const date = new Date();
  
//   return (
//     <div id="today-list">
//       <ListRender list={} />
//     </div>
//   );
// };

// export default Today;

import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();
  console.log("today date "+date)
  return (
    <div id="today-list">
      <ListRender list={props.list.filter(li => li.date.toLocaleDateString() == date)} />
    </div>
  );
};

export default Today;
