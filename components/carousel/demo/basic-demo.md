---
order: 2
title: 简单实例
---


````jsx
import { Carousel } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (<div>
      <div style={{ color: '#888', margin: '0.2rem' }}>简单实例</div>
      <Carousel className="my-carousel" autoplay infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log('slide to', index)}
      >
        <div className="item">
          <div className="imgWrap">
            <img src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/dpp/pic/item/e4dde71190ef76c68e1195389a16fdfaae5167e5.jpg" />
          </div>
          <div className="imgWrap">
            <img src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/dpp/pic/item/e4dde71190ef76c68e1195389a16fdfaae5167e5.jpg" />
          </div>
          <div className="imgWrap">
            <img src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/dpp/pic/item/e4dde71190ef76c68e1195389a16fdfaae5167e5.jpg" />
          </div>
        </div>
        <div className="item">
          <div className="imgWrap">
            <img src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/dpp/pic/item/e4dde71190ef76c68e1195389a16fdfaae5167e5.jpg" />
          </div>
          <div className="imgWrap">
            <img src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/dpp/pic/item/e4dde71190ef76c68e1195389a16fdfaae5167e5.jpg" />
          </div>
        </div>
      </Carousel>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````
````css
.my-carousel .slider {
  background: #fff;
}
.my-carousel .item {
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
  display:flex;
}
.my-carousel .item .imgWrap{
  flex:1
}
.my-carousel .item img{
  width:60px;
  height:60px;
}
.my-carousel .v-item {
  height: 0.72rem;
  line-height: 0.72rem;
  padding-left: 0.2rem;
}
````
