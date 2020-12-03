import Http from "@/libs/Http";
import Vue from 'vue'

let prex = 'http://www.cmossafe.top:8180/chessMaster/';

let userInfo = {};
Vue.observable(userInfo);

export default {
  getUserInfo() {
    return userInfo;
  },
  async queryUserInfo() {
    let userName = localStorage.getItem('userName');
    console.log('登录userName', userName);
    let response = await Http.post(prex + 'queryUserInfo', {
      userName
    })
    userInfo = response;
    return response;
  },
  async insertUserInvoiceInfo(items) {
    let response = await Http.postBody(prex + 'insertUserInvoiceInfo', {
      ...userInfo,
      items
    })
    if (response.returnCode == 200) {
      return '';
    } else {
      throw ''
    }
  },
  async insertElectronicInvoiceInfo(items) {
    let response = await Http.postBody(prex + 'insertElectronicInvoiceInfo', {
      ...userInfo,
      items
    })
    if (response.returnCode == 200) {
      return '';
    } else {
      throw ''
    }
  },
  
  async queryUserInvoiceInfo(){
    await this.queryUserInfo();
    let interfaceName = userInfo.master==0?'queryUserInvoiceInfoByUserName':'queryUserInvoiceInfoByGroup'
  
    let response = await Http.post(prex + interfaceName, {
      ...userInfo,
    })
    return response;
  },
  async queryElectronicInvoiceInfo(){
    await this.queryUserInfo();
    let interfaceName = userInfo.master==0?'queryElectronicInvoiceInfoByUserName':'queryElectronicInvoiceInfoByGroup'
    let response = await Http.post(prex + interfaceName, {
      ...userInfo,
    })
    return response;
  },
  async queryTemplateInfo(){
    console.log('queryTemplateInfo');
    let response = await Http.post(prex + 'queryTemplateInfo', {
      templateName:'交通补'
    })
    return response;
  },
  
}