/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import splitObject from '../_util/splitObject';
import List from '../list/index.web';
const { Item } = List;

export default function handleProps(props, isIndexed) {
  let [{ renderHeader, renderFooter, renderSectionHeader, renderRow }, restProps] =
    splitObject(props, ['renderHeader', 'renderFooter', 'renderSectionHeader', 'renderRow']);
  const listPrefixCls = props.listPrefixCls;

  const extraProps = {
    renderHeader: null as any,
    renderFooter: null as any,
    renderSectionHeader: null as any,
    renderBodyComponent: () => <div className={`${listPrefixCls}-body`} />,
    renderRow,
  };
  if (renderHeader) {
    extraProps.renderHeader =
      () => <div className={`${listPrefixCls}-header`}>{renderHeader() }</div>;
  }
  if (renderFooter) {
    extraProps.renderFooter =
      () => <div className={`${listPrefixCls}-footer`}>{renderFooter() }</div>;
  }
  if (renderSectionHeader) {
    extraProps.renderSectionHeader = isIndexed ?
      (sectionData, sectionID) => (<div>
        <Item>{renderSectionHeader(sectionData, sectionID) }</Item>
      </div>) :
      (sectionData, sectionID) => <Item>{renderSectionHeader(sectionData, sectionID)}</Item>;
  }
  return { restProps, extraProps };
}
