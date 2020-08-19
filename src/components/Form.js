import "./Form.css"

const Form = () => `

  <div class="small-container">
    <h1 class="todo__title">Things I have to do</h1>
    <form class="todo__form">
      <input id="userInput" class="todo__form__input" type="text" placeholder="Things to do..." />
      <input class="todo__form__add-button" type="submit" value="Add" />
    </form>
    <button id="clearButton" class="todo__clear-button accent-button">Clear all</button>
  </div>

`

export default Form
