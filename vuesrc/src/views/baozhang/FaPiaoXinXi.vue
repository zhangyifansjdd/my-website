<template>
  <div style="min-height: 500px">
    <Input v-model="inputDate" placeholder="输入增加月份" style="width: 300px"/>
    <Button type="primary" @click="addTab" :style="{margin:'10px'}">增加月份</Button>
    <Button :style="{margin:'10px'}" type="success" :loading="isLoading" @click="submit">提交</Button>

    <Tabs type="card" @on-tab-remove="handleTabRemove" style="min-height: 500px">
      <TabPane v-for="(item,index) of tabs"
               :label="item.month" :name="item.month">
        <Input v-model="item.addItem.actualUser" placeholder="实际报账人" style="width: 120px"/>
        <Input v-model="item.addItem.headUser" placeholder="报账负责人" style="width: 120px"/>
        <Select v-model="item.addItem.invoiceType" style="width:120px">
          <Option v-for="item in invoiceTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Input v-model="item.addItem.invoiceNumber" placeholder="发票号" style="width: 200px"/>
        <DatePicker v-model="item.addItem.invoiceDate" format="yyyy/MM/dd" type="date" placeholder="开票日期"
                    style="width: 200px"/>
        <Input v-model="item.addItem.amount" placeholder="发票金额" style="width: 200px"/>
        <Button type="error" @click="clear(item)" :style="{margin:'10px'}">清空</Button>
        <Button type="primary" @click="add(item)" :style="{margin:'10px'}">添加</Button>
        <Table stripe :columns="columns" :data="item.data"></Table>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
  import DataManager from "@/js/baozhang/DataManager";

  export default {
    name: "FaPiaoXinXi",
    data() {
      return {
        userInfo: DataManager.getUserInfo(),
        inputDate: '',
        isLoading: false,
        columns: [
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
        invoiceTypeList: [
          {
            value: '机打-出租车',
            label: '机打-出租车'
          },
          {
            value: '机打-油票',
            label: '机打-油票'
          },
        ],
        tabs: [
          {
            month: '1月',
            addItem: {
              actualUser: localStorage.getItem('userName'),
              headUser: '赵彩迪',
              invoiceType: '',
              invoiceNumber: '',
              vmDate: '',
              invoiceDate: '',
              amount: '',
            },
            data: []
          }
        ]
      }
    },
    methods: {
      handleTabRemove(name) {
        console.log(name);
      },
      addTab() {
        if (!this.inputDate.includes('月')) {
          this.inputDate = this.inputDate + '月';
        }
        this.tabs.push({
          month: this.inputDate,
          addItem: {
            actualUser: localStorage.getItem('userName'),
            headUser: '赵彩迪',
            invoiceType: '',
            invoiceNumber: '',
            vmDate: '',
            invoiceDate: '',
            amount: '',
          },
          data: []
        })
      },
      clear(item) {
        item.addItem = {
          actualUser: localStorage.getItem('userName'),
          headUser: '赵彩迪',
          invoiceType: '',
          invoiceNumber: '',
          vmDate: '',
          invoiceDate: '',
          amount: '',
        }
      },
      add(item) {
        let copy = {...item.addItem};
        copy.invoiceDate = dayjs(copy.invoiceDate).format('YYYYMMDD');
        item.data.push(copy);
      },
      submit() {
        this.isLoading = true;
        DataManager.insertUserInvoiceInfo(this.tabs)
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

</style>