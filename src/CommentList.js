import React, { Component } from 'react';
import Comment from './Comment'

export default class CommentList extends Component{
  static defaultProps = {
    comments: []
  }
  render(){
    var CommentLists=this.props.comments.map((comment,index)=>{
      return (
          <Comment comment={comment} key={index}>
          </Comment>
         )
    })
    return (
      <div> {CommentLists} </div>
    )
  }
}