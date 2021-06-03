import React, { Component } from "react"
import "./app.css"
import HabitAddForm from "./components/habitAddForm"
import Habits from "./components/habits"
import Header from "./components/header"

class App extends Component {
  state = {
    activatedCount: 0,
    habitName: "",
    habits: [
      { name: "Reading", count: 0, id: 1 },
      { name: "Coding", count: 0, id: 2 },
      { name: "Running", count: 0, id: 3 },
    ],
  }

  handleActivatedHabitChange = (habits) => {
    let activatedCount = 0
    habits.forEach((item) => {
      if (item.count > 0) {
        activatedCount++
      }
    })
    this.setState({ activatedCount })
  }

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: item.count + 1 }
      }
      return item
    })
    this.handleActivatedHabitChange(habits)
    this.setState({ habits })
  }

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return { ...item, count: count < 0 ? 0 : count }
      }
      return item
    })
    this.handleActivatedHabitChange(habits)
    this.setState({ habits })
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id)
    this.handleActivatedHabitChange(habits)
    this.setState({ habits })
  }

  handleAdd = () => {
    const newHabit = {
      name: this.state.habitName,
      count: 0,
      id: new Date().getTime(),
    }
    const habits = [...this.state.habits, newHabit]
    this.setState({ habits, habitName: "" })
  }

  handleInput = (event) => {
    this.setState({ habitName: event.target.value })
  }

  handleReset = () => {
    this.setState({ habits: [] })
  }

  render() {
    return (
      <div>
        <Header activatedCount={this.state.activatedCount} />
        <HabitAddForm
          onChangeInput={this.handleInput}
          onAddHabit={this.handleAdd}
          habitName={this.state.habitName}
        />
        {/* <div className="input-wrapper">
          <input
            className="input"
            type="text"
            value={this.state.habitName}
            onInput={this.handleInput}
          />
          <button className="input-button" onClick={this.handleAdd}>
            ADD
          </button>
        </div> */}
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <button className="reset-button" onClick={this.handleReset}>
          RESET
        </button>
      </div>
    )
  }
}

export default App
