(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["baozhang_login"],{"06b8":function(s,o,t){"use strict";t("0f9f")},"0f9f":function(s,o,t){},bf02:function(s,o,t){"use strict";t.r(o);var e=function(){var s=this,o=s.$createElement,t=s._self._c||o;return t("div",{staticClass:"login"},[t("MyNest"),t("div",{staticClass:"login_block"},[t("Input",{staticStyle:{width:"80%","margin-top":"40px"},attrs:{prefix:"ios-contact",placeholder:"请输入姓名"},model:{value:s.userName,callback:function(o){s.userName=o},expression:"userName"}}),t("br"),t("Input",{staticStyle:{width:"80%","margin-top":"30px"},attrs:{prefix:"md-key",placeholder:"请输入密码",type:"password"},model:{value:s.password,callback:function(o){s.password=o},expression:"password"}}),s.showConfirmPassword?t("Input",{staticStyle:{width:"80%","margin-top":"30px"},attrs:{prefix:"md-key",placeholder:"请确认密码",type:"password"},model:{value:s.confirmPassword,callback:function(o){s.confirmPassword=o},expression:"confirmPassword"}}):s._e(),t("br"),t("Button",{staticStyle:{width:"80%","margin-top":"30px"},attrs:{type:"primary"},on:{click:s.login}},[s._v(s._s(s.showConfirmPassword?"注册并登录":"登录")+" ")]),t("br"),t("button",{staticClass:"register",on:{click:s.goRegister}},[s._v(s._s(s.showConfirmPassword?"只登录":"注册"))])],1)],1)},i=[],r=t("568b"),a=t("2744"),n={name:"login",components:{MyNest:a["a"]},data:function(){return{userName:"",password:"",confirmPassword:"",showConfirmPassword:!1}},methods:{login:function(){var s=this,o="";if(this.showConfirmPassword){if(this.confirmPassword!=this.password)return void this.$Notice.open({title:"结果",desc:"两次输入密码不一致"});o="/api/logon"}else o="/api/login";r["a"].get(o,{userName:this.userName,password:this.password}).then((function(o){if(200==o.returnCode){s.$Notice.open({title:"结果",desc:s.confirmPassword?"注册成功":"登录成功"}),localStorage.setItem("userName",s.userName);var t=o.callbackurl;t&&setTimeout((function(){s.$router.push(t)}),1e3)}else s.$Notice.open({title:"结果",desc:"".concat(s.confirmPassword?"注册":"登录","失败，姓名或密码输入错误")})})).catch((function(o){console.log(o),s.$Notice.open({title:"结果",desc:"".concat(s.confirmPassword?"注册":"登录","失败，姓名或密码输入错误")})}))},goRegister:function(){this.showConfirmPassword=!this.showConfirmPassword}}},c=n,l=(t("06b8"),t("2877")),d=Object(l["a"])(c,e,i,!1,null,"31b7e7ac",null);o["default"]=d.exports}}]);