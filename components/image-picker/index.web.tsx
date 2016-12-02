/* tslint:disable:no-bitwise */
import React from 'react';
import classNames from 'classnames';
import WingBlank from '../wing-blank/index.web';
import Flex from '../flex/index.web';
import Toast from '../toast/index.web';
import { ImagePickerPropTypes } from './PropsType';
import TouchableButton from './touchableButton.web';

function noop() { }

export default class ImagePicker extends React.Component<ImagePickerPropTypes, any> {
  static defaultProps = {
    prefixCls: 'am-image-picker',
    files: [],
    onChange: noop,
    onImageClick: noop,
    selectable: true,
  };

  // http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
  getOrientation = (file, callback) => {
    if (!(/iphone|ipad/i).test(navigator.userAgent)) {
      callback('-1');
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        const view = new DataView((e.target as any).result);
        if (view.getUint16(0, false) !== 0xFFD8) {
          return callback(-2);
        }
        let length = view.byteLength;
        let offset = 2;
        while (offset < length) {
          const marker = view.getUint16(offset, false);
          offset += 2;
          if (marker === 0xFFE1) {
            let tmp = view.getUint32(offset += 2, false);
            if (tmp !== 0x45786966) {
              return callback(-1);
            }
            let little = view.getUint16(offset += 6, false) === 0x4949;
            offset += view.getUint32(offset + 4, little);
            let tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
              if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                return callback(view.getUint16(offset + (i * 12) + 8, little));
              }
            }
          } else if ((marker & 0xFF00) !== 0xFF00) {
            break;
          } else {
            offset += view.getUint16(offset, false);
          }
        }
        return callback(-1);
      };
      reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    }
  };

  removeImage = (index) => {
    const newImages: any[] = [];
    const { files = [] } = this.props;
    files.forEach((image, idx) => {
      if (index !== idx) {
        newImages.push(image);
      }
    });
    if (this.props.onChange) {
      this.props.onChange(newImages, 'remove', index);
    }
  };

  addImage = (imgItem) => {
    const { files = [] } = this.props;
    const newImages = files.concat(imgItem);
    if (this.props.onChange) {
      this.props.onChange(newImages, 'add');
    }
  };

  onImageClick = (index) => {
    if (this.props.onImageClick) {
      this.props.onImageClick(index, this.props.files);
    }
  };

  onFileChange = () => {
    const fileSelectorEl = (this.refs as any).fileSelectorInput;
    if (fileSelectorEl.files && fileSelectorEl.files.length) {
      const file = fileSelectorEl.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = (e.target as any).result;
        if (!dataURL) {
          Toast.fail('图片获取失败');
          return;
        }

        let orientation = 1;
        this.getOrientation(file, (res) => {
          // -2: not jpeg , -1: not defined
          if (res > 0) {
            orientation = res;
          }
          this.addImage({
            url: dataURL,
            orientation,
            file,
          });

          fileSelectorEl.value = '';
        });
      };
      reader.readAsDataURL(file);
    }
  };

  render() {
    const { prefixCls, style, className, files = [],
       selectable, onAddImageClick } = this.props;
    const dpr = window.devicePixelRatio || 1;
    const imgItemList: any[] = [];
    const customWidth = ((document.documentElement.clientWidth - 18 * dpr - 6 * dpr * 3) / 4);

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className as string]: className,
    });

    const itemStyle = {
      width: `${customWidth}px`,
      height: `${customWidth}px`,
    };
    files.forEach((image: any, index: number) => {
      imgItemList.push(
        <div key={index} className={`${prefixCls}-item`} style={itemStyle}>
          <div
            className={`${prefixCls}-item-remove`}
            onClick={() => { this.removeImage(index); }}
          />
          <div
            className={`${prefixCls}-item-content`}
            onClick={() => { this.onImageClick(index); }}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        </div>
      );
    });

    return (
      <div className={wrapCls} style={style}>
        <div className={`${prefixCls}-list`}>
          <WingBlank size="md">
            <Flex wrap="wrap">
              {imgItemList}
              {selectable && <TouchableButton
                prefixCls={`${prefixCls}-upload-btn`}
                className={`${prefixCls}-item ${prefixCls}-upload-btn`}
                style={itemStyle}
                onClick={() => {
                  if (onAddImageClick) {
                    onAddImageClick();
                  }
                }}
              >
                {!onAddImageClick ? <input
                  style={itemStyle}
                  ref="fileSelectorInput"
                  type="file"
                  accept="image/jpg,image/jpeg,image/png,image/gif"
                  onChange={() => { this.onFileChange(); }}
                /> : null}
              </TouchableButton>}
            </Flex>
          </WingBlank>
        </div>
      </div>
    );
  }
}
