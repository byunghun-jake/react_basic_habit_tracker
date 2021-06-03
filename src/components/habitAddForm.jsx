import React, { Component } from "react"

class HabitAddForm extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <input
          className="input"
          type="text"
          value={this.props.habitName}
          onInput={this.props.onChangeInput}
        />
        <button className="input-button" onClick={this.props.onAddHabit}>
          ADD
        </button>
      </div>
    )
  }
}

export default HabitAddForm
