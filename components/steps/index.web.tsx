import React from 'react';
import RcSteps from 'rc-steps';
import './style/index.web';
import classNames from 'classnames';

export interface StepsProps {
  prefixCls?: string;
  iconPrefix?: string;
  direction?: string;
  labelPlacement?: string;
  children: any;
  status?: string;
  size?: string;
  current?: number;
}

export default class Steps extends React.Component<StepsProps, any> {
  static Step = (RcSteps as any).Step;

  static defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    direction: 'vertical',
    current: 0,
  };
  stepRefs: any;

  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    if (this.props.direction !== 'horizontal') {
      return;
    }
    // set tail's left position based on main's width for each step dynamically.
    this.stepRefs.forEach(s => {
      if (s.refs.tail) {
        s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
      }
    });
  }
  render() {
    this.stepRefs = [];
    const { children, current, status } = this.props;
    const newChildren = React.Children.map(children, (item: any, index) => {
      let className = item.props.className;
      let classNameTmp = '';
      if (index < children.length - 1 && children[index + 1].props.status === 'error') {
        classNameTmp = 'error-tail';
      }

      let icon = item.props.icon;
      if (!icon) {
        if (index < current) {
          // 对应 state: finish
          icon = 'check-circle-o';
        } else if (index > current) {
          // 对应 state: wait
          icon = 'ellipsis';
          classNameTmp = 'ellipsis-item';
        }
        if (status === 'error' && index === current || item.props.status === 'error') {
          icon = 'cross-circle-o';
        }
      }

      className = classNames(classNameTmp, className);

      return React.cloneElement(item, { icon, className, ref: c => this.stepRefs[index] = c });
    });
    return <RcSteps ref="rcSteps" {...this.props}>{newChildren}</RcSteps>;
  }
}
