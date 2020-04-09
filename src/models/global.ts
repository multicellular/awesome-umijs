import { Effect, Reducer, Subscription } from 'umi';

export interface IUserInfo {
  name?: string;
  id?: number;
}

export interface IGlobalState {
  title: string;
  userInfo: IUserInfo;
}

export interface IGlobalModel {
  namespace?: 'global';
  state: IGlobalState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IGlobalState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const GlobalModel: IGlobalModel = {
  // namespace: 'global',
  state: {
    title: 'loading...',
    userInfo: {},
  },
  effects: {
    *query({ payload = { title: 'hello world' } }, { call, put, select }) {
      const examplePromise = (title: string) => {
        return new Promise((r, j) => {
          setTimeout(() => r(title), 1000);
        });
      };
      const res: string = yield call(examplePromise, payload.title);
      yield put({ type: 'save', payload: { title: res } });
      return res;
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ /*history,*/ dispatch } /*,done*/) {},
  },
};
export default GlobalModel;
