---
order: 0
title: form示例
---

````jsx
import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

let BasicInputExample = React.createClass({
  submit() {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  },
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <div>
        <List>
          <div className="inputItem">
            <InputItem
              {...getFieldProps('name', {
                validateTrigger: 'onBlur',
                rules: [{
                  required: true,
                  message: '请填写姓名',
                }, {
                  pattern: /^[\u4e00-\u9fa5·.•]{0,}$/,
                  message: '姓名格式错误',
                }],
              })}
            >姓名</InputItem>
            <span className="error">
              { getFieldError('name') ? getFieldError('name').join(',') : null}
            </span>
          </div>
          <div className="inputItem">
            <InputItem
              {...getFieldProps('phone', {
                validateTrigger: 'onBlur',
                rules: [{
                  required: true,
                  message: '请填写电话号码',
                }, {
                  pattern: /^1[3578]\d{9}$/,
                  message: '电话号码格式错误',
                }],
              })}
            >电话号码</InputItem>
            <span className="error">{ getFieldError('phone') ? getFieldError('phone').join(',') : null}</span>
          </div>
          <div className="inputItem">
            <InputItem
              {...getFieldProps('identification', {
                validateTrigger: 'onBlur',
                rules: [{
                  required: true,
                  message: '请填写身份证',
                }, {
                  pattern: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
                  message: '身份证格式错误',
                }],
              })}
            >身份证</InputItem>
            <span className="error">{ getFieldError('identification') ? getFieldError('identification').join(',') : null}</span>
          </div>
        </List>
        <Button onClick={this.submit}>提交</Button>
      </div>
    );
  },
});
BasicInputExample = createForm()(BasicInputExample);
ReactDOM.render(<BasicInputExample />, mountNode);

````
````css
.inputItem{
    position:relative
}
.inputItem .error{
    color:red;
    position:absolute;
    right:12px;
    top:12px
}
````