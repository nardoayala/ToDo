import "../css/main.min.css"
import Form from "../components/Form"
import Todolist from "../components/Todolist"
import renderTodoList from "../utils/renderTodoList"

const render = () => {
  const app = document.getElementById("app")

  app.innerHTML = Form()
  app.innerHTML += Todolist()
  renderTodoList()
}

export default render
