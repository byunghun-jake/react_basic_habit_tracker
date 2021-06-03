import React, { Component } from "react"
import "./app.css"
import HabitAddForm from "./components/habitAddForm"
import Habits from "./components/habits"
import Header from "./components/header"

class App extends Component {
  state = {
    // activatedCount: 0,
    habitName: "",
    habits: [
      { name: "Reading", count: 0, id: 1 },
      { name: "Coding", count: 0, id: 2 },
      { name: "Running", count: 0, id: 3 },
    ],
  }

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: item.count + 1 }
      }
      return item
    })
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
    this.setState({ habits })
  }

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id)
    this.setState({ habits })
  }

  handleAdd = (name) => {
    const newHabit = {
      name,
      count: 0,
      id: Date.now(),
    }
    const habits = [...this.state.habits, newHabit]
    this.setState({ habits, habitName: "" })
  }

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      // habit.count = 0
      // console.log(...this.state.habits)
      // alert("hi")
      return {
        ...habit,
        count: 0,
      }
    })
    this.setState({ habits })
  }

  render() {
    return (
      <div>
        <Header
          activatedCount={
            this.state.habits.filter((habit) => habit.count > 0).length
          }
        />
        <HabitAddForm
          onAddHabit={this.handleAdd}
          habitName={this.state.habitName}
        />
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
