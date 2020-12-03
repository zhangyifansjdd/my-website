<template>
  <div>
    <Tabs type="card" style="min-height: 500px">
      <TabPane label="个人发票" name="个人发票">
        <Button  v-if="userInfo.master==1" icon="ios-download-outline" type="primary" style="margin: 10px" @click="downGeren">下载excel</Button>
        <br/>
        <Table height="500" stripe :columns="gerenColumns" :data="gerenData"></Table>
      </TabPane>
      <TabPane label="电子发票" name="电子发票">
        <Button v-if="userInfo.master==1" icon="ios-download-outline" type="primary" style="margin: 10px" @click="downDianzi">下载excel</Button>
        <Button v-if="userInfo.master==1" icon="ios-download-outline" type="primary" style="margin: 10px" @click="downDianziPdf">下载电子发票pdf</Button>
        <Table height="500" stripe :columns="dianziColumns" :data="dianziData"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import DataManager from "@/js/baozhang/DataManager";

  export default {
    name: "ChaxunXiazai",
  data(){
      return {
        userInfo:DataManager.getUserInfo(),
        gerenColumns:[
          {
            title: '实际报账人',
            key: 'actualUser'
          },
          {
            title: '报账负责人',
            key: 'headUser'
          },
          {
            title: '发票类型',
            key: 'invoiceType'
          },
          {
            title: '发票号',
            key: 'invoiceNumber'
          },
          {
            title: '开票日期',
            key: 'invoiceDate'
          },
          {
            title: '发票金额',
            key: 'amount'
          },
        ],
        gerenData:[],
        dianziColumns:[
          {
            title: '种类代码',
            key: 'invoiceType',
            width: 60
          },
          {
            title: '代码',
            key: 'invoiceCode',
            width: 150
          },
          {
            title: '号码',
            key: 'invoiceNumber'
          },
          {
            title: '页码',
            key: 'pageNumber',
            width: 60
          },
          {
            title: '开票日期',
            key: 'invoiceDate',
            width: 110
          },
          {
            title: '校验码后六位',
            key: 'invoiceCheckCode'
          },
          {
            title: '购方税号',
            key: 'buyEin',
            width: 200
          },
          {
            title: '红字信息表号',
            key: 'sellEin',
            width: 200
          }
        ],
        dianziData:[]
      }
  },
  methods:{
    downGeren(){
      let url = `http://www.cmossafe.top:8180/chessMaster/exportUserInvoiceExcel?group=${this.userInfo.group}`;
      window.location.href = url;
    },
    downDianzi(){
      let url = `http://www.cmossafe.top:8180/chessMaster/exportElectronicInvoiceExcel?group=${this.userInfo.group}`;
      window.location.href = url;
    },
    downDianziPdf(){
      let url = `http://www.cmossafe.top:8180/chessMaster/downMultipleFiles`;
      window.location.href = url;
    }
  },
    mounted() {
      console.log('ChaxunXiazai');
      DataManager.queryUserInvoiceInfo()
        .then(response => {
          console.log(response);
          this.gerenData=  response;
        })
        .catch(e => {
          console.log(e);
        })

      DataManager.queryElectronicInvoiceInfo()
        .then(response => {
          console.log(response);
          this.dianziData=  response;
        })
        .catch(e => {
          console.log(e);
        })
    }
  }
</script>

<style scoped>

</style>