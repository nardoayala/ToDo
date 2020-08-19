import listControls from "../utils/listControls"
import { removeSpaces } from "../utils/filters"
import updateLocalList from "../utils/updateLocalList"

const renderTodoList = () => {
  const userInput = document.getElementById("userInput")
  const todoForm = document.querySelector(".todo__form")
  const todoList = document.querySelector(".todo__list")
  const clearButton = document.getElementById("clearButton")
  let todoItems = []

  if (window.localStorage.getItem("todoItems")) {
    todoItems = JSON.parse(window.localStorage.getItem("todoItems"))

    for (let todo of todoItems) {
      const id = todoItems.indexOf(todo) + 1
      todoList.innerHTML += `<li id="${id}" class="todo__list__item">
                                <div>
                                  <input class="done-check" type="checkbox" ${
                                    todo.checked ? "checked = true" : ""
                                  }>
                                  <span contenteditable="true" ${
                                    todo.checked ? "class='done'" : ""
                                  }>${todo.value}</span>
                                </div>
                                <button class="delete-button">Delete</button>
                              </li>`
    }
    listControls()
  }

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    if (userInput.value) {
      let id = 1
      if (window.localStorage.getItem("todoItems")) {
        id = JSON.parse(window.localStorage.getItem("todoItems")).length + 1
      }

      todoList.innerHTML += `<li id="${id}" class="todo__list__item">
                                <div>
                                  <input class="done-check" type="checkbox">
                                  <span contenteditable="true">${removeSpaces(
                                    userInput.value
                                  )}</span>
                                </div>
                                <button class="delete-button">Delete</button>
                              </li>`

      const todoItem = { value: removeSpaces(userInput.value), checked: false }

      updateLocalList(todoItem, todoItems)

      listControls()
      userInput.value = ""
    }
  })

  clearButton.addEventListener("click", (event) => {
    window.localStorage.clear()
    todoItems = []
    todoList.innerHTML = ""
  })
}

export default renderTodoList
