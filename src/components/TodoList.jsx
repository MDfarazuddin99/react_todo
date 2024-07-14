import React, { useState, useRef } from "react";
import Filter from "./Filter";
import { AiFillDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { useForm } from "react-hook-form";

const TodoList = ({
  todos,
  delTodo,
  update_todo,
  complete_todo,
  filter_todo,
}) => {
  
  let taskRef = useRef(null);

  let [todoId, setTodoId] = useState(0);
  let [task, setTask] = useState("");

  let [toggle, setToggle] = useState(false);

  let [editTodo, setEditTodo] = useState({});

  const todoItem = (task, id, todo) => {
    console.log('selected todo: ', todo)
    setTodoId(id);
    setTask(task);
    setToggle(true);
    setEditTodo(todo)
    console.log(toggle);
  };
  console.log("ALL TODOS: ",todos)
  return (
    <>
      <div className="todo-list">
        {todos.map((todo, index) => 
        {
          console.log('TODOLIST: ', todos)
          return(
          <div className="todo-list-item" key={index}>
            <div className="task">
              <input
                type="checkbox"
                onChange={(e) => complete_todo(e, todo.id)}
              />
              {/* <p id = "t_task">{todo.task}</p> */}
              <p
                id="t_task"
                className={todo.status == "Completed" ? "strike" : ""}
              >
                {todo.task}
              </p>
            </div>
            <div className="btn-container">
              <div className="edit">
                {" "}
                <TbEdit
                  size={25}
                  onClick={(e) => todoItem(todo.task, todo.id, todo)}
                />{" "}
              </div>
              <div className="del">
                <AiFillDelete size={25} onClick={() => delTodo(todo.id)} />
              </div>
            </div>
          </div>
        )}
        )}
      </div>

      {/* modal section */}

      {toggle && (
        <div className="modal-container">
          <div className="modal">
            <h1>Update Form</h1>

            <form
              action=""
              onSubmit={(e) => {
                update_todo(e, todoId, task, editTodo);
                setToggle(false);
              }}
            >
              <input
                type="text"
                ref={taskRef}
                placeholder="Update Todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
              <button id="add">Add</button>
            </form>

            <div className="btn-container">
              <button
                className="cancel mod-btn"
                onClick={() => setToggle(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;
