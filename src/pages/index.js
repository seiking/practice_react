import React from "react"
import { Link } from "gatsby"

class IndexPage extends React.Component{
  render() {
    const releasePicture=[
      {image:''},
      {image:''},
      {image:''},
      {image:''},
    ]
    return(
      {releasePicture.map}
      <div>
      <NewsRelease/>
      <Information/>
      </div>
    )
  }
}

class NewsRelease extends React.Component {
  render(){
    return(
      <div>
        <h1>NEWS RELEASE</h1>
        <div className='news-release-picture'>
          <img src={this.props.image}/>

        </div>
      </div>
    )
  }
}
class Information extends React.Component {
  render() {
    return (
      <div>
        <h1>INFORMATION</h1>
        <Link to="/page-2/">輝オート「スタッドレスタイヤ＆アルミフェア」に出展します</Link>
        <br/>
        <Link to="/page-2/">エヌズ・ステージ宇都宮店にてハイラックスを展示します</Link>
        <br/>
        <Link to="/page-2/">「第18回IPFファン感謝デー2019」に出展します</Link>
        <br/>
        <Link  to="/page-2/">「MEDIA」更新しました…2019年10月分</Link>
        <br/>
        <Link to="/page-2/">「GOOD OPEN AIRS 2019 AUTUMN」に出展します</Link>
        <br/>
        <br/>
        <Link to="/page-2/">more</Link>
      </div>
    )
  }
}

export default IndexPage
