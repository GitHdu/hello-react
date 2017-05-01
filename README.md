```
To start the App,use `npm start`

To create a production build, use `npm run build`.
```

## 总结

------------

#### JSX与DOM
1. `JSX` 是 `JavaScript` 语言的一种语法扩展，长得像` HTML`，但并不是 `HTML`。
 因为`DOM` 元素包含的信息其实只有三个：标签名，属性，子元素，所以以下`JSX`
```
render () {
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
```
实际编译成
```
React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { className: 'title' },
          "React 小书"
        )
      )
```
编译完成后，`react-dom` 负责把这个用来描述 `UI` 信息的` JavaScript` 对象变成 `DOM` 元素，并且渲染到页面上。
#### `render()`

> `{}` 里，`JSX` 可以放置任何表达式内容，包括元素变量、表达式和函数等

```
render () {
  const isGoodWord = true
  const goodWord = <strong> is good</strong>
  const badWord = <span> is not good</span>
  return (
    <div>
      <h1>
        React 小书
        {isGoodWord ? goodWord : badWord}
      </h1>
    </div>
  )
}
```
#### 事件监听
- `on*` 的事件监听只能用在普通的 `HTML` 的标签上，而不能用在组件标签上
- 如果想在事件函数当中使用当前的实例，你需要手动地将实例方法 `bind` 到当前实例上再传入给 `React.js`
```
class Title extends Component {
  handleClickOnTitle (e) {
    console.log(this)
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
    )
  }
}
```
或使用箭头函数
```
class Title extends Component {
  handleClickOnTitle = (e)=> {
    console.log(this)
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle}>React 小书</h1>
    )
  }
}
```
#### 组件间数据传递
> **在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 `props` 对象的键值**

1. 父组件传递到子组件
```
//father
<div>
        <LikeButton likedText='已赞' unlikedText='赞' />
</div>
//son
const likedText = this.props.likedText
```
2. 子组件传递到父组件
> 父组件只需要通过 `props` 给子组件 传入一个回调函数，子组件调用 `props` 中的回调函数并且将 `state` 传入该函数即可
```
//son
if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
//father
handleSubmitComment (comment) {
    console.log(comment)	//accept data
  }
<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
```
