import React, { Component } from 'react'

class CommentInput extends Component {

 // static 开头的类属性，如 defaultProps、propTypes  
  static propTypes = {
    onSubmit: React.PropTypes.func
  }
// 构造函数，constructor
  constructor(){
    super()
    this.state={
      username: '',
      content: ''
    }
  }
// 组件生命周期
  componentWillMount(){
    this._loadUserName()
  }
  componentDidMount(){
    this.textarea.focus()
  }
// _ 开头的私有方法
  _loadUserName(){
    const username=localStorage.getItem('username')
    if(username){
      this.setState({
        username
      })
    }
  }
  _saveUserName(username){
    localStorage.setItem('username',username)
  }
// 事件监听方法，handle*
  handleUserNameChange(e){
    this.setState({
      username:e.target.value
    })
  }
  handleUserNameBlur(e){
    this._saveUserName(e.target.value)
  }
  handleContentChange(e){
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit(){
    if(this.props.onSubmit){
      const {username,content}=this.state
      let createdTime=+new Date()
      this.props.onSubmit({username,content,createdTime})
    }
    this.setState({
      content:''
    })
  }
// render
  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input value={this.state.username} onChange={this.handleUserNameChange.bind(this)} onBlur={this.handleUserNameBlur.bind(this)}/>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} ref={(textarea)=>this.textarea=textarea} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput