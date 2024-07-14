import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        setErrors(err.message);
      });
  }, []);
  // add todo function
  const addTodo = (data) => {

    console.log(data);
    axios.post("http://127.0.0.1:8000/todos", data)
    .then(res => setTodos([res.data,...todos]))
    .catch(err => {setErrors(err.message); setTodos(originalTodos)});    
  };

  // delete function
  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
    let originalTodos = [...todos];
    axios.delete("http://127.0.0.1:8000/todos/" + id)
    .catch(err => {setErrors(err.message); setTodos(originalTodos)});

  };

  // update function
  const updateTodo = (e, id, text, todo) => {
    console.log("->",todo)
    e.preventDefault();
    // this line helps to get the current todo based on the ID called todoId in TodoList
    // const todo = todos[id];
    const updatedUser = { ...todo, task: text, status: "Active" };
    // console.log(todo)
    // setTodos(todos.map((t) => {(t.id == id ? updatedUser : t)}));
    let updatedTodo = {...todo, task: text}
    axios.patch("http://127.0.0.1:8000/todos/" + id, updatedTodo)
    .then(()=>{
      axios
      .get("http://127.0.0.1:8000/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        setErrors(err.message);
      });
    })
    .catch(err => {setErrors(err.message); setTodos(originalTodos)}); 
    // .then(res => setTodos([...todos,res.data]))
  };

  const completeTodo = (e, id) => {
    if (e.target.checked) {
      console.log("okay");
      setTodos(
        todos.map((todo) =>
          todo.id == id ? { ...todo, status: "Completed" } : todo
        )
      );
    } else {
      console.log("omo");
      setTodos(
        todos.map((todo) =>
          todo.id == id ? { ...todo, status: "Active" } : todo
        )
      );
    }
  };

  const filterTodo = (cat_value) => {
    // setTodos(todos.filter(todo => todo.status == cat_value))
    setTodos(todos.filter((todo) => todo.status == cat_value));
  };

  return (
    <div className="todo-container">
      {errors && <p>{errors}</p>}
      <Search addTodo={addTodo} />
      <Filter filter_todo={filterTodo} />
      <TodoList
        todos={todos}
        delTodo={delTodo}
        update_todo={updateTodo}
        complete_todo={completeTodo}
        filter_todo={filterTodo}
      />
    </div>
  );
}

export default App;
