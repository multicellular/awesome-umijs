import request from './request';

export interface GtResponse {
  success: boolean;
  user_id: string;
  gt: string;
  challenge: string;
}

// 极验行为验证
export function getGeeTest(): Promise<GtResponse> {
  // or return request<GtResponse>({
  return request({
    url: `/geetest`,
    method: 'get',
    unSignature: true,
  });
}

// 验证google两步验证的6位验证码
export function checkOtp(
  data: { otp: string },
  tokens: { token: string; expire_at: string },
) {
  return request<void>({
    url: `/members/otp`,
    method: 'post',
    data,
    tokens,
  });
}

// 获取用户信息
export function getMe() {
  return request({
    url: `/members/me`,
    method: 'get',
  });
}

// 获取Banner图
export function getBanners(params: { platform: string } = { platform: 'pc' }) {
  return request({
    url: `/banner/list`,
    method: 'get',
    unSignature: true,
    params,
  });
}

// 获取市场数据
export function getTickers() {
  return request({
    url: `/tickers`,
    method: 'get',
    unSignature: true,
  });
}

// 获取公告数据
export function getNotice() {
  return request({
    url: `/notice`,
    method: 'get',
    unSignature: true,
  });
}

export interface QuotesReqParams {
  symbols: string;
  currency: string;
  source: string;
}

// 获取币价
export function getQuotes(params: QuotesReqParams) {
  return request({
    url: `https://api.bitip.in/api/quotes`,
    method: 'get',
    params,
    unSignature: true,
  });
}

export interface TickerReqParams {
  market: string;
  period: number;
  timestamp: number;
}
// 指定时间和市场的K线数据
export function getTickerK(params: TickerReqParams) {
  return request({
    url: `/k`,
    method: 'get',
    params,
    unSignature: true,
  });
}

// 市场的K线数据
export function getKChart(params: { market: string }) {
  return request({
    url: `/chart`,
    method: 'get',
    params,
    unSignature: true,
  });
}

// 成交历史数据
export function getTrades(params: { market: string; limit: string }) {
  return request({
    url: `/trades`,
    method: 'get',
    params,
    unSignature: true,
  });
}

// 挂单深度数据
export function getDepth(params: { market: string; limit: string }) {
  return request({
    url: `/depth`,
    method: 'get',
    params,
    unSignature: true,
  });
}

// // 鉴权登录
// export function authorize({ mini_app_id, mini_app_token }) {
//     return request({
//         url: `/app_login/authorize`,
//         method: 'get',
//         params: { mini_app_id, mini_app_token }
//     });
// }

// // 邀请关系
// export function change_invite({ ref_code }) {
//     return request({
//         url: `/members/change_invite`,
//         method: 'post',
//         signature: true,
//         data: { ref_code }
//     });
// }
