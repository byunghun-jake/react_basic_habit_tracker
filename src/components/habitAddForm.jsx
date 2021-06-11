import React, { memo } from "react"

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef()
  const formRef = React.createRef()

  const onSubmit = (event) => {
    event.preventDefault()
    const name = inputRef.current.value
    name.trim() && props.onAddHabit(name)
    formRef.current.reset()
    inputRef.current.focus()
  }
  return (
    <form className="habit-form" ref={formRef} onSubmit={onSubmit}>
      <input className="input" type="text" placeholder="Habit" ref={inputRef} />
      <button className="input-button">ADD</button>
    </form>
  )
})

export default HabitAddForm
