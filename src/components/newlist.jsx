import React from 'react'

const newlist = () => {
  return (
    <div class="main-container">
    <div class="todo-container">
     

      <div class="todo-list">
        <select name="" id="">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        <div class="todo-list-item">
          <div class="task">
            <input type="checkbox" />
            <p>todo item</p>
          </div>

          <div class="btn-container">
            <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
            <div class="del"><i class="fa-solid fa-trash-can"></i></div>
          </div>
        </div>

        <div class="todo-list-item">
          <div class="task">
            <input type="checkbox" />
            <p>todo item</p>
          </div>

          <div class="btn-container">
            <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
            <div class="del"><i class="fa-solid fa-trash-can"></i></div>
          </div>
        </div>

        <div class="todo-list-item">
          <div class="task">
            <input type="checkbox" />
            <p>todo item</p>
          </div>

          <div class="btn-container">
            <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
            <div class="del"><i class="fa-solid fa-trash-can"></i></div>
          </div>
        </div>

        <div class="todo-list-item">
          <div class="task">
            <input type="checkbox" />
            <p>todo item</p>
          </div>

          <div class="btn-container">
            <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
            <div class="del"><i class="fa-solid fa-trash-can"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default newlist