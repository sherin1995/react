import React, { Component } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'https://api.github.com'
export default class Search extends Component {

    search = () => {
        const { what: { value } } = this
        if (!value) {
            alert('不能为空')
        } else {
            console.log(value);
            axios({
                url: '/search/users',
                params: {
                    q: value
                }
            })
                .then(
                    res => {
                        console.log(res.data.items);
                        this.props.getUsers(res.data.items)
                    },
                    error => {
                        console.log(error);
                    }
                )
        }

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.what = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
