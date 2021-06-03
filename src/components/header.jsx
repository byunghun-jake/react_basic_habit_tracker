import React, { Component } from "react"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <i className="fas fa-quote-left header-icon"></i>
        <span className="header-name">Habit Tracker</span>
        <span className="header-count">{this.props.activatedCount}</span>
      </header>
    )
  }
}

export default Header
