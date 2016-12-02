import React from 'react';
import Item from './ListItem.web';
import classNames from 'classnames';
import { ListProps } from './PropsType';

export default class List extends React.Component<ListProps, any> {
  static Item = Item;

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let {prefixCls, children, className, style, renderHeader, renderFooter} = this.props;
    const wrapCls = classNames({
      [prefixCls as string]: true,
      [className as string]: className,
    });

    return (
      <div className={wrapCls} style={style}>
        {renderHeader ? (<div className={`${prefixCls}-header`}>{renderHeader()}</div>) : null}
        {children ? (<div className={`${prefixCls}-body`}>{children}</div>) : null}
        {renderFooter ? (<div className={`${prefixCls}-footer`}>{renderFooter()}</div>) : null}
      </div>
    );
  }
}
