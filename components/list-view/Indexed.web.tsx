import React from 'react';
import MListView from 'rmc-list-view';
import tsPropsType from './PropsType';
import handleProps from './handleProps';
const IndexedList = MListView.IndexedList;
import './style/index.web';

export default class MIndexedList extends React.Component<tsPropsType, any> {
  static defaultProps = {
    prefixCls: 'am-indexed-list',
    listPrefixCls: 'am-list',
    listViewPrefixCls: 'am-list-view',
  };
  render() {
    const { restProps, extraProps } = handleProps(this.props, true);
    return (
      <IndexedList
        ref="indexedList"
        sectionHeaderClassName="am-indexed-list-section-header am-list-body"
        sectionBodyClassName="am-indexed-list-section-body am-list-body"
        {...restProps}
        {...extraProps}
      >{this.props.children}</IndexedList>
    );
  }
}
