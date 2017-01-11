---
order: 0
title: 图片选择组件
-----------

````jsx
import { ImagePicker } from 'antd-mobile';

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

const ImagePickerExample = React.createClass({
  getInitialState() {
    return { files: data };
  },
  onChange(files, type, index) {
    console.log(files, type, index);
    this.setState({
      files,
    });
  },
  render() {
    const { files } = this.state;
    return (<div className="imagePicker">
      <ImagePicker
        files={files}
        onChange={this.onChange}
        onImageClick={(index, fs) => console.log(index, fs)}
        selectable={files.length < 5}
      />
      {files.length === 0 ? <div className="defaultText"><p>请上传与疾病相关的图片</p><p>最多上传5张图片</p></div> : ''}
    </div>);
  },
});
ReactDOM.render(<ImagePickerExample />, mountNode);
````

````css
  .imagePicker{
    display:flex;
  }
  .imagePicker .defaultText{
    margin-top:7px;
  }

````