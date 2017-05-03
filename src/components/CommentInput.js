import React, { Component } from 'react'

class CommentInput extends Component {

 // static 开头的类属性，如 defaultProps、propTypes
  static propTypes = {
    username: React.PropTypes.any,
    onSubmit: React.PropTypes.func,
    onUserNameInputBlur: React.PropTypes.func
  }
  static defaultProps={
    username:''
  }
// 构造函数，constructor
  constructor(props){
    super(props)
    this.state={
      username: props.username,
      content: ''
    }
  }
// 组件生命周期
  componentDidMount(){
    this.textarea.focus()
  }
// 事件监听方法，handle*
  handleUserNameChange(e){
    this.setState({
      username:e.target.value
    })
  }
  handleUserNameBlur(e){
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(e.target.value)
    }
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
            <input value={this.state.username} onChange={this.handleUserNameChange.bind(this)} onBlur={this.handleUserNameBlur.bind(this)} />
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
