import React, { FC, useState } from 'react';
import { Button } from 'antd';
import { ConnectProps, Loading, connect, IGlobalState, Dispatch } from 'umi';

import styles from './index.less';
import { BaseApi } from '@/apis';

interface IProps extends ConnectProps {
  global: IGlobalState;
  loading: boolean;
  dispatch: Dispatch;
}
const Login: FC<IProps> = ({ global, loading, dispatch, history }) => {
  const { title } = global;
  const change = () => {
    // 测试接口
    BaseApi.getBanners();
    // 测试dva promise loading
    dispatch({
      type: 'global/query',
      payload: {
        title: 'hello world',
      },
    }).then((res: any) => {
      console.log(111, res);
    });
    // 测试dva 跨组件通信
    dispatch({
      type: 'global/login',
      payload: { userInfo: { id: 1000 } },
    });
  };
  const goHome = () => {
    history.push('/');
  };
  return (
    <div className={styles.page}>
      <h1>{'isLoading:' + loading}</h1>
      <Button onClick={change}>test</Button>
      <h1 className={styles.title}>{title}</h1>
      <Button onClick={goHome}>home</Button>
    </div>
  );
};

export default connect(
  ({ global, loading }: { global: IGlobalState; loading: Loading }) => ({
    global,
    loading: loading.effects['global/query'] || false,
  }),
)(Login);
