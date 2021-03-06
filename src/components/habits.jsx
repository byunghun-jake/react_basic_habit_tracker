import React, { Component } from "react"
import Habit from "./habit"

class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => {
          return (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
            />
          )
        })}
      </ul>
    )
  }
}

export default Habits
