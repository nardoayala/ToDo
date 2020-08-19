const updateLocalList = (todoItem, todoArray) => {
  const currentTodoList = JSON.parse(window.localStorage.getItem("todoItems"))
  if (currentTodoList) {
    currentTodoList.push(todoItem)
    window.localStorage.setItem("todoItems", JSON.stringify(currentTodoList))
  } else {
    todoArray.push(todoItem)
    window.localStorage.setItem("todoItems", JSON.stringify(todoArray))
  }
}

export default updateLocalList
