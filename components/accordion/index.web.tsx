import React from 'react';
import RcCollapse, { Panel } from 'rc-collapse';
import AccordionProps from './PropsType';
import './style/index.web';

export default class Accordion extends React.Component<AccordionProps, any> {
  static Panel = Panel;

  static defaultProps = {
    prefixCls: 'am-accordion',
  };

  render() {
    return <RcCollapse {...this.props} />;
  }
}
