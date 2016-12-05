import React from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
import Icon from '../icon';
import NoticeBarProps from './PropsType';
import './style/index.web';

export default class NoticeBar extends React.Component<NoticeBarProps, any> {
  static defaultProps = {
    prefixCls: 'am-notice-bar',
    mode: '',
    onClick() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  onClick = () => {
    const { mode, onClick } = this.props;
    if (onClick) {
      onClick();
    }
    if (mode === 'closable') {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    const [{ mode, type, onClick, children, className, prefixCls }, restProps] = splitObject(this.props,
      ['mode', 'type', 'onClick', 'children', 'className', 'prefixCls']);

    const extraProps: any = {};
    let operationDom: any = null;
    if (mode === 'closable') {
      operationDom = (
        <div className={`${prefixCls}-operation`} onClick={this.onClick}>
          <Icon type="cross" />
        </div>
      );
    } else {
      if (mode === 'link') {
        operationDom = (
          <div className={`${prefixCls}-operation`}>
            <Icon type="right" />
          </div>
        );
      }
      extraProps.onClick = onClick;
    }

    const iconEnum = {
      success: 'check-circle',
      error: 'cross-circle',
      warn: 'exclamation-circle',
      question: 'question-circle',
    };

    const iconDom = type ? <div className={`${prefixCls}-icon`}>
      <Icon type={iconEnum[type] || 'info-circle'} />
    </div> : null;

    const wrapCls = classNames({
      [prefixCls as string]: true,
      [className as string]: !!className,
    });

    return this.state.show ? (
      <div className={wrapCls} {...restProps} {...extraProps}>
        {iconDom}
        <div className={`${prefixCls}-content`}>{children}</div>
        {operationDom}
      </div>
    ) : null;
  }
}
