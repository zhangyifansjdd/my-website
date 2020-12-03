<template>
  <div class="layout">
    <button
      style="width: 100px;height: 50px;background: #42b983;border-radius: 50px;position: fixed;bottom: 100px;right: 50px;z-index: 100;outline: none;border: 0;box-shadow: 0px 5px 5px 0px #42b983;"
    >点击自动填写</button>
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu @on-select="onSelect" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="发票信息">
            <Icon type="ios-navigate"></Icon>
            <span>发票信息</span>
          </MenuItem>
          <MenuItem name="电子发票">
            <Icon type="ios-search"></Icon>
            <span>电子发票</span>
          </MenuItem>
          <MenuItem name="查询下载">
            <Icon type="ios-settings"></Icon>
            <span>查询下载</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <!--        <Header :style="{padding: 0}" class="layout-header-bar">-->
        <!--          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>-->
        <!--        </Header>-->
        <Content :style="{margin: '20px', background: '#fff', minHeight: '600px'}">
          <!--          <a href="http://www.cmossafe.top:8180/chessMaster/downSingleFile?fileName=tinified%20(56).zip">下载</a>Content-->
          <FaPiaoXinXi v-if="this.selectedMenu==='发票信息'"/>
          <DianZiFaPiao v-if="this.selectedMenu==='电子发票'"/>
          <ChaxunXiazai v-if="this.selectedMenu==='查询下载'"/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import FaPiaoXinXi from "@/views/baozhang/FaPiaoXinXi";
  import DianZiFaPiao from "@/views/baozhang/DianZiFaPiao";
  import DataManager from "@/js/baozhang/DataManager";
  import ChaxunXiazai from "@/views/baozhang/ChaxunXiazai";

  export default {
    components: {ChaxunXiazai, DianZiFaPiao, FaPiaoXinXi},
    data() {
      return {
        isCollapsed: false,
        selectedMenu: '发票信息'
      }
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse();
      },
      onSelect(name) {
        console.log(name);
        this.selectedMenu = name;
      }
    },
    mounted() {
      DataManager.queryUserInfo()
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        })

      DataManager.queryTemplateInfo()
        .then(response=>{
          console.log(response);
        })
        .catch(e=>{
          console.log(e);
        })
    }
  }
</script>

<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>

