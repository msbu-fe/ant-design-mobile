import React from 'react';
import Select from 'antd/lib/select';
import Modal from 'antd/lib/modal';
import { version as packageVersions } from 'antd-mobile/package.json';
import { docVersions } from '../../';

const Option = Select.Option;

function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

docVersions[packageVersions] = packageVersions;

export default class Footer extends React.Component {
  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    if (!isLocalStorageNameSupported()) {
      return;
    }
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    if (localStorage.getItem('infoNewVersionSent') !== 'true' &&
        new Date().getTime() < new Date('2016/05/22').getTime()) {
      this.infoNewVersion();
    }
  }

  infoNewVersion() {
    Modal.info({
      title: 'antd 新版发布！',
      content: (
        <div>
          <img src="https://os.alipayobjects.com/rmsportal/nyqBompsynAQCpJ.svg" alt="Msbu Design" />
          <p>
            您好，<a target="_blank" rel="noopener noreferrer" href="/#/changelog">antd@1.0</a> 已正式发布，欢迎升级。
            如果您还需要使用旧版，请查阅 <a target="_blank" rel="noopener noreferrer" href="http://012x.ant.design">012x.ant.design</a>
            ，也可通过页面右下角的文档版本选择框进行切换。
          </p>
        </div>
      ),
      onOk: () => localStorage.setItem('infoNewVersionSent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

  handleVersionChange = (url) => {
    window.location.href = url;
  }

  render() {
    const options = Object.keys(docVersions).map(version => (
      <Option value={docVersions[version]} key={version}>{version}</Option>
    ));
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>源码</h2>
            <div>
              <a target="_blank " rel="noopener noreferrer" href="http://github.com/msbu-fe/msbu-ui-react">msbu-ui-react</a>
            </div>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/react-component">react-component</a>
            </div>
          </li>
          <li>
            <h2>相关站点</h2>
            <div><a href="https://msbu-fe.github.io/msbu-design/">Msbu Design</a> - Msbu Design</div>
            <div><a href="https://mobile.ant.design/">Ant Design</a> - 强力驱动</div>
          </li>
          <li>
            <h2>联系我们</h2>
            <a target="_blank" rel="noopener noreferrer" href="http://github.com/msbu-ui-react/msbu-ui-react/issues">
              反馈和建议
            </a>
          </li>
          <li>
            <div>©2016 MSBU-FE</div>
            <div>Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
            <div>
              文档版本：
              <Select
                size="small"
                dropdownMatchSelectWidth={false}
                defaultValue={packageVersions}
                onChange={this.handleVersionChange}
              >
                {options}
              </Select>
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}
