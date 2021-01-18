import { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component {
  state = {
    users: []
  }
  getUsers = (users) => {
    this.setState({
      users: users
    })
  }
  render() {
    const { users } = this.state
    return (
      <div className="container">
        <Search getUsers={this.getUsers} />
        <List users={users} />
      </div>
    )
  }
}