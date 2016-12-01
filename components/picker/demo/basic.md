---
order: 0
title: 基本
---

数据级联选择示例. ([rc-form 文档](https://github.com/react-component/form))

````jsx
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

import district from 'site/data/district';
import province from 'site/data/province-lite';

let Test = React.createClass({
  getInitialState() {
    return {
      data: [],
      cols: 1,
    };
  },
  onClick() {
    setTimeout(() => {
      this.setState({
        data: province,
      });
    }, 120);
  },
  onPickerChange(val) {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    if (val[0] === 'zj') {
      d.forEach(i => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
          } else if (val[1] === 'zj-hz') {
            i.children.forEach(j => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
    });
  },
  // setVal() {
  //   this.props.form.setFieldsValue({
  //     district: ['340000', '340800', '340822'],
  //   });
  // },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }}>
        <Picker extra="请选择(可选)" data={district} title="选择地区" {...getFieldProps('district', {
          initialValue: ['340000', '340800', '340824'],
        })}
        >
          <List.Item arrow="horizontal">省市区选择</List.Item>
        </Picker>
        <Picker data={this.state.data} cols={this.state.cols}
          {...getFieldProps('district2')}
          onPickerChange={this.onPickerChange}
        >
          <List.Item arrow="horizontal" onClick={this.onClick}>省市选择(异步加载)</List.Item>
        </Picker>
        <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
          <List.Item arrow="horizontal">选择省份</List.Item>
        </Picker>
      </List>
    </div>);
  },
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````
