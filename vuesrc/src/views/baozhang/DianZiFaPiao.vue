<template>
  <div>
    <div>
      <Select class="margin10" v-model="addData.invoiceType" placeholder="选择发票种类代码" style="width:200px">
        <Option v-for="item in invoiceTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>

      <Input class="margin10" v-model="addData.invoiceCode" placeholder="输入发票代码" style="width: 200px"/>
      <Input class="margin10" v-model="addData.invoiceNumber" placeholder="输入发票号码" style="width: 200px"/>
      <Input class="margin10" v-model="addData.pageNumber" placeholder="输入发票页码" style="width: 100px"/>
      <DatePicker class="margin10" v-model="addData.invoiceDate" placeholder="输入开票日期" type="date" style="width: 220px"/>
      <Input class="margin10" v-model="addData.invoiceCheckCode" placeholder="输入校验码后六位" style="width: 200px"/>
      <Input class="margin10" v-model="addData.buyEin" placeholder="输入购方税号" style="width: 200px"/>
      <Input class="margin10" v-model="addData.sellEin" placeholder="输入红字信息表号" style="width: 200px"/>

      <Button class="margin10" type="error" @click="clear">清空</Button>
      <Button class="margin10" type="primary" @click="add">添加</Button>
      <Button class="margin10" type="success" @click="submit" :loading="isLoading">提交</Button>
    </div>
    <Table border stripe
           :columns="columns" :data="data1"></Table>
    <Upload
      multiple
      action="http://www.cmossafe.top:8180/chessMaster/multipleFiles"
      :data="userInfo">
      <Button icon="ios-cloud-upload-outline" :style="{margin:'10px'}">上传发票文件</Button>
    </Upload>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  import DataManager from "@/js/baozhang/DataManager";

  export default {
    name: "DianZiFaPiao",
    data() {
      return {
        userInfo:DataManager.getUserInfo(),
        isLoading:false,
        addData: {
          invoiceType: '',
          invoiceCode: '',
          invoiceNumber: '',
          pageNumber: '',
          invoiceDate: '',
          invoiceCheckCode: '',
          buyEin: '',
          sellEin: '',
        },
        invoiceTypeList: [
          {
            value: '04',
            label: '增值税普通发票'
          },
          {
            value: '10',
            label: '增值税电子发票'
          },
          {
            value: '11',
            label: '增值税普通发票（卷式）'
          },
          {
            value: '18',
            label: '增值税电子普通发票（通行费）'
          }
        ],
        columns: [
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
        data1: [
          // {
          //   invoiceType: '10',
          //   invoiceCode: '041001900111',
          //   invoiceNumber: '83985812',
          //   pageNumber: '1',
          //   invoiceDate: '2020/7/11',
          //   invoiceCheckCode: '038677',
          //   buyEin: '91410300317347029Q',
          //   sellEin: '914101000626623415'
          // },
          // {
          //   invoiceType: '10',
          //   invoiceCode: '041001900111',
          //   invoiceNumber: '83985812',
          //   pageNumber: '1',
          //   invoiceDate: '2020/7/11',
          //   invoiceCheckCode: '038677',
          //   buyEin: '91410300317347029Q',
          //   sellEin: '914101000626623415'
          // },
          // {
          //   invoiceType: '10',
          //   invoiceCode: '041001900111',
          //   invoiceNumber: '83985812',
          //   pageNumber: '1',
          //   invoiceDate: '2020/7/11',
          //   invoiceCheckCode: '038677',
          //   buyEin: '91410300317347029Q',
          //   sellEin: '914101000626623415'
          // },
          // {
          //   invoiceType: '10',
          //   invoiceCode: '041001900111',
          //   invoiceNumber: '83985812',
          //   pageNumber: '1',
          //   invoiceDate: '2020/7/11',
          //   invoiceCheckCode: '038677',
          //   buyEin: '91410300317347029Q',
          //   sellEin: '914101000626623415'
          // },
          // {
          //   invoiceType: '10',
          //   invoiceCode: '041001900111',
          //   invoiceNumber: '83985812',
          //   pageNumber: '1',
          //   invoiceDate: '2020/7/11',
          //   invoiceCheckCode: '038677',
          //   buyEin: '91410300317347029Q',
          //   sellEin: '914101000626623415'
          // },
        ]
      }
    },
    methods: {
      clear() {
        console.log('clear');
        this.addData = {
          invoiceType: '',
          invoiceCode: '',
          invoiceNumber: '',
          pageNumber: '',
          invoiceDate: '',
          invoiceCheckCode: '',
          buyEin: '',
          sellEin: '',
        }
      },
      add() {
        console.log('add');
        let copy = {...this.addData};
        copy.invoiceDate = dayjs(copy.invoiceDate).format('YYYY/MM/DD');
        this.data1.push(copy);
      },
      submit() {
        this.isLoading = true;
        DataManager.insertElectronicInvoiceInfo(this.data1)
          .then(r => {
            this.$Notice.open({
              title: '结果',
              desc: '提交成功'
            });
          })
          .catch(e => {
            this.$Notice.open({
              title: '结果',
              desc: '提交失败'
            });
          })
          .finally(() => {
            this.isLoading = false;
          })
      }
    }
  }
</script>

<style scoped>
  .margin10 {
    margin: 5px;
  }
</style>