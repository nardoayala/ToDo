const listControls = () => {
  const deleteButton = document.querySelectorAll(".delete-button")
  const checkButton = document.querySelectorAll(".done-check")
  const editableItems = document.querySelectorAll("[contenteditable='true']")

  deleteButton.forEach((item) => {
    item.addEventListener("click", (event) => {
      const todoItem = event.target.parentNode
      const todoItemIndex = parseInt(todoItem.id) - 1
      const currentTodoList = JSON.parse(
        window.localStorage.getItem("todoItems")
      )
      const todoItems = currentTodoList.filter(
        (item) => currentTodoList.indexOf(item) !== todoItemIndex
      )

      window.localStorage.setItem("todoItems", JSON.stringify(todoItems))
      todoItem.parentNode.removeChild(todoItem)
    })
  })

  checkButton.forEach((item) => {
    item.addEventListener("click", (event) => {
      const todoItem = event.target.parentNode.parentNode
      const todoItemIndex = parseInt(todoItem.id) - 1
      const currentTodoList = JSON.parse(
        window.localStorage.getItem("todoItems")
      )
      const todoItems = currentTodoList.map((item) => {
        if (currentTodoList.indexOf(item) === todoItemIndex) {
          item.checked = !item.checked
        }
        return item
      })
      window.localStorage.setItem("todoItems", JSON.stringify(todoItems))

      const todoItemSpan = todoItem.children[0].children[1]
      todoItemSpan.classList.toggle("done")
    })
  })

  editableItems.forEach((item) =>
    item.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault()
        document.activeElement.blur()
        const itemId = event.target.parentNode.parentNode.id - 1
        const itemValue = event.target.innerText
        const currentTodoList = JSON.parse(
          window.localStorage.getItem("todoItems")
        )
        currentTodoList[itemId].value = itemValue
        window.localStorage.setItem(
          "todoItems",
          JSON.stringify(currentTodoList)
        )
      }
    })
  )
}

export default listControls
