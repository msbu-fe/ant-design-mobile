---
order: 0
title: 基本用法示例
---


````jsx
import { ActionSheet, Button, Toast } from 'antd-mobile';

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

const Test = React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  },
  showActionSheet() {
    const BUTTONS = [{ text: '操作一 - 修改过啦', className: 'custumClassName' }, { text: '操作二' }, { text: '操作三' }, { text: '删除' }, { text: '取消' }];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: '标题',
      // message: '我是描述我是描述',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
      className: 'custumClassName',
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  },
  icons: [
    { iconName: 'mail', title: '发邮件' },
    { iconName: 'message', title: '发短信' },
    { iconName: 'team', title: '发送到群' },
    { iconName: 'download', title: '下载' },
    { iconName: 'delete', title: '删除' },
    { iconName: 'ellipsis', title: '更多' },
  ],
  showShareActionSheet() {
    const icons = [...this.icons];
    icons.length = 4;
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      // title: '标题',
      message: '我是描述我是描述',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? icons[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('1000ms 后关闭');
        setTimeout(resolve, 1000);
      });
    });
  },
  showShareActionSheetMulpitleLine() {
    const icons = [[...this.icons], [...this.icons]];
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      // title: '标题',
      message: '我是描述我是描述',
    },
    (buttonIndex, rowIndex) => {
      this.setState({ clicked2: buttonIndex > -1 ? icons[rowIndex][buttonIndex].title : 'cancel' });
    });
  },
  render() {
    return (<div style={{ margin: '0 15px' }}>
      <div style={{ margin: '15px 0' }}>
        <Button type="ghost" onClick={this.showActionSheet}>默认状态11</Button>
      </div>
      <div style={{ margin: '15px 0' }}>
        <Button type="ghost" onClick={this.showShareActionSheet}>分享功能</Button>
      </div>
      <div style={{ margin: '15px 0' }}>
        <Button type="ghost" onClick={this.showShareActionSheetMulpitleLine}>带多行按钮的分享功能</Button>
      </div>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
