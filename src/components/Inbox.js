// import React, { useState, useRef } from "react";

// const Inbox = (props) => {
 

//   return (
//     <div>
//       <h3>Inbox</h3>
//       {!newTask && (
//         <button className="new" onClick={} id='add-new'>
//           +Add New
//         </button>
//       )}
//       {newTask && (
//         <form className="newtask-box">
//           <input type="text" id="title" ref={}></input>
//           <div className="buttons">
//             <button className="new" id="add-list" onClick={}>
//               Add Task
//             </button>
//             <button className="new" onClick={}>
//               Cancel
//             </button>
//             <input
//               type="date"
//               ref={}
//               defaultValue="2022-09-27"
//               id="date"
//             ></input>
//           </div>
//         </form>
//       )}
//       <div id="inbox">
//         {props.list.map((list) => {
//           return (
//             <div className="box" key={}>
//               <div className="task">
//                 {} ({})
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Inbox;


import React, { useState, useRef } from "react";

const Inbox = (props) => {
  const [newTask,setNewTask] = useState(false)
  const createNewTaskRef = useRef();
  const addDateRef = useRef()
  const showAddTaskHandler = () => {
    console.log("add new Task")
    setNewTask(!newTask)

  }
  const addTaskHandler = (event) => {
    event.preventDefault();
    const titlee = createNewTaskRef.current.value;
    const datee = addDateRef.current.value;
    console.log(datee, titlee)
    props.append([...props.list, {title:titlee, date:new Date(datee)}])
    createNewTaskRef.current.value=''
  }

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={showAddTaskHandler} id='add-new'>
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input type="text" id="title" ref={createNewTaskRef} />
          <div className="buttons">
            <button className="new" id="add-list" onClick={addTaskHandler}>
              Add Task
            </button>
            <button className="new" onClick={() => {}}>
              Cancel
            </button>
            <input
              type="date"
              ref={addDateRef}
              defaultValue="2022-09-27"
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {props.list.map((list,index) => {
          return (
            <div className="box" key={index}>
              <div className="task">
                {list.title} {"("+list.date.toLocaleDateString()+")"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
