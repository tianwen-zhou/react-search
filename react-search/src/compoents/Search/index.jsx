import React, { Component, createRef } from 'react'

export default class Search extends Component {
  
  constructor(props) {
    super(props);
    // 使用 createRef 创建 ref
    this.keyWord = createRef();
  }

  handleSearch = ()=>{
    const { keyWord } = this;
    const keywordValue = keyWord.current.value.trim(); // 获取输入值并去除多余空格

    if (!keywordValue) {
      alert('Please enter a search term.');
      return;
    }

    this.props.updateState({isFirst: false, isLoad: true})

        // Octokit.js
    // https://github.com/octokit/core.js#readme
    const GITHUB_TOKEN = ''

    // console.log({keyWord})
    fetch(`https://api.github.com/search/users?q=${keyWord.current.value}&page=1&per_page=10`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      }
      })
      .then((response) => {
        // console.log('response.json', response.json().items)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // console.log('data:',data.total_count, data.items)
        this.props.updateState({users: data.items, isLoad: false})
      })
      .catch((error) => {
        this.props.updateState({err: error.message, isLoad: false})
      });
  }
  
  render() {

    // const {state} = this.props

    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={this.keyWord} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.handleSearch}>Search</button>
        </div>
      </section> 
    )
  }
}
