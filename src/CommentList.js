import React, { Component } from 'react';
import Comment from './Comment'

export default class CommentList extends Component{
  static propTypes={
    comments: React.PropTypes.array,
    onDeleteComment: React.PropTypes.func
  }
  static defaultProps = {
    comments: []
  }

  handleDeleteComment(index){
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(index)
    }
  }


  render(){
    var CommentLists=this.props.comments.map((comment,index)=>{
      return (
          <Comment comment={comment} key={index} index={index} onDeleteComment={this.handleDeleteComment.bind(this)}>
          </Comment>
         )
    })
    return (
      <div> {CommentLists} </div>
    )
  }
}