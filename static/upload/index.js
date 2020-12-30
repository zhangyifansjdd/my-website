import Router from 'koa-router';
import {auth, isBind} from '../../middleware/auth';
import *as personCenter from "./personCenter";
import *as sharedResources from './sharedResources';
import *as common from './common';
import *as intimate from './intimate';
import *as bill from './billSum';
import *as recommend from './recommend';
import * as controller from "../personalHome/home.controller";

const router = new Router();
router
    .get('/pointsNew', auth, isBind, personCenter.pointsNew)
    .get('/getCustBaseInfo', auth, isBind, personCenter.getCustBaseInfo)
    .get('/headRefresh', auth, isBind, personCenter.headRefresh)
    .get('/getHevbTotalNum', auth, isBind, personCenter.getHevbTotalNum)
    .get('/getConfigProvince', common.getConfigProvince) //获取配置省份
    .get('/getFlowVoice', isBind, common.getFlowVoice) //流量
    .get('/getFare', isBind, common.getFare) //话费
    .get('/giftStats', auth, personCenter.giftStats) //礼券
    .get('/sharedResources', auth, sharedResources.qrySharedResourcesInf)//共享资源查询;
    .get('/ssoNps', auth, isBind, common.ssoNps) //NPS单点登录加密参数
    .get('/intimate/intimateInfos', auth, isBind, intimate.intimateInfos) //添加亲密请求
    .get('/intimate/fareIntimate', isBind, intimate.fareIntimate) //查询亲密好友话费信息
    .get('/intimate/fareIntimateNew', isBind, intimate.fareIntimateNew) //查询亲密好友话费信息
    .get('/intimate/flowIntimate', isBind, intimate.flowIntimate) //查询亲密好友流量信息
    .get('/intimate/safeWordsCheck', auth, isBind, intimate.safeWordsCheck) //昵称校验
    .get('/intimate/chinaMobileValid', auth, isBind, intimate.chinaMobileValid) //单点登录加密参数
    .get('/intimate/chinaMobileCheck', auth, isBind, intimate.chinaMobileCheck) //单点登录加密参数
    .get('/intimate/getUploadIntimateToken', auth, isBind, intimate.getUploadIntimateToken) //单点登录加密参数
    .get('/bill/billSum', isBind, bill.billSum) //近六个月话费
    .get('/recommend/hevbProductList', auth, isBind, recommend.hevbProductList)//和微币推荐可兑换
    .get('/recommend/getBusiData', auth, isBind, recommend.getBusiData) //一键检测页面2.0接口
    .get('/customer/popup', auth, isBind, common.popup) //两级运营多渠道弹浮窗
    .get('/getNewHebaoAddress', auth, isBind, personCenter.getNewHebaoAddress) //获取和包聚合页地参数
    .get('/getHebaoMoney', auth, isBind, personCenter.getHebaoMoney) //获取和包金额
    .get('/get5GGold', auth, isBind, personCenter.get5GGold) //获取5G金币个数


export default router;
