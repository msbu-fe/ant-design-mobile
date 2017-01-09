---
order: 6
title: list demo
---

使用 html 的 `body` 作为滚动容器

````jsx
/* eslint no-dupe-keys: 0 */
import { ListView } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末2',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];

const pageSize = 10;
let page = 1;

const dataSource = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

const Demo = React.createClass({
  getInitialState() {
    this.genData();
    return {
      dataSource: dataSource.cloneWithRows(data),
      isLoading: false,
    };
  },
  genData() {
    // demo中模拟唯一数据  给数据源data 增加一个id属性 用来做唯一性,实际应用中为fetch数据
    for (let i = 0; i < pageSize; i++) {
      data[i].id = `${page} - ${i}`;
    }
  },
  onEndReached() {
    // 触发下一页数据  这里用setTimeout模拟加载效果
    this.setState({ isLoading: true });
    setTimeout(() => {
      page++;
      this.genData();
      this.setState({
        dataSource: dataSource.cloneWithRows(data),
        isLoading: false,
      });
    }, 3000);
  },
  renderRow(rowData, rowID) {
    return (
      <div key={rowID} style={{ padding: '0.08rem 0.16rem', backgroundColor: 'white' }}>
        <h3 style={{ padding: 2, marginBottom: '0.08rem', borderBottom: '1px solid #F6F6F6' }}>
          {rowData.title + rowData.id}
        </h3>
        <div style={{ display: '-webkit-box', display: 'flex' }}>
          <img style={{ height: '1.28rem', marginRight: '0.08rem' }} src={rowData.img} />
          <div style={{ display: 'inline-block' }}>
            <p>{rowData.des}</p>
            <p><span style={{ fontSize: '1.6em', color: '#FF6E27' }}>{rowID}</span>元/任务</p>
          </div>
        </div>
      </div>
    );
  },
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        className="am-list"
        initialListSize={10}
        pageSize={10}
        scrollEventThrottle={20}
        useBodyScroll
        onEndReached={this.onEndReached}
        onEndReachedThreshold={100}
      />
    );
  },
});


ReactDOM.render(<Demo />, mountNode);
````
