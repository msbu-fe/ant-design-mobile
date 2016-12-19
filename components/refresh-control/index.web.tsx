/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import ListView from 'rmc-list-view';
import Icon from '../icon';
// import tsPropsType from './PropsType';
import assign from 'object-assign';
import './style/index.web';

ListView.RefreshControl.defaultProps = assign({}, ListView.RefreshControl.defaultProps, {
  prefixCls: 'am-refresh-control',
  icon: [
    <div key="0" className="am-refresh-control-pull">
      <Icon type="arrow-down"/><span>下拉</span>
    </div>,
    <div key="1" className="am-refresh-control-release">
      <Icon type="arrow-up"/><span>释放</span>
    </div>,
  ],
  loading: <Icon type="loading" />,
  refreshing: false,
  distanceToRefresh: 50 / 2 * ((window as any).devicePixelRatio || 2),
});

export default ListView.RefreshControl;
