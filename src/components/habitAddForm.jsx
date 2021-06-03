import React, { PureComponent } from "react"

class HabitAddForm extends PureComponent {
  inputRef = React.createRef()
  formRef = React.createRef()
  onSubmit = (event) => {
    event.preventDefault()
    const name = this.inputRef.current.value
    if (!name.trim()) {
      return
    }
    this.props.onAddHabit(name)
    console.log(this.inputRef.current.value)
    // this.inputRef.current.value = ""
    this.formRef.current.reset()
    this.inputRef.current.focus()
  }
  render() {
    return (
      <form className="habit-form" ref={this.formRef} onSubmit={this.onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Habit"
          ref={this.inputRef}
        />
        <button className="input-button">ADD</button>
      </form>
    )
  }
}

export default HabitAddForm
