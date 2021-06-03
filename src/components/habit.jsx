import React, { PureComponent } from "react"

class Habit extends PureComponent {
  state = {
    editMode: false,
    name: "",
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit)
  }
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  }
  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  }

  handleToggleEdit = () => {
    this.setState({
      name: this.props.habit.name,
      editMode: !this.state.editMode,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const habit = { ...this.props.habit, name: this.state.name }
    this.props.onEdit(habit)
    this.setState({ editMode: false })
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { name, count } = this.props.habit
    return (
      <li className="habit-wrapper">
        <div className="habit">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase-btn"
            onClick={this.handleIncrement}
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <button
            className="habit-button habit-decrease-btn"
            onClick={this.handleDecrement}
          >
            <i className="fas fa-minus-square"></i>
          </button>
          <button
            className="habit-button habit-edit-btn"
            onClick={this.handleToggleEdit}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="habit-button habit-delete-btn"
            onClick={this.handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
        {this.state.editMode && (
          <form className="habit-edit" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="input"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <button>EDIT</button>
          </form>
        )}
      </li>
    )
  }
}

export default Habit
