<template>
  <div class="layout">
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
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
                size="24"></Icon>
          <Icon @click.native="showLogoutDialog=true" :style="{position:'absolute',right:'40px',top:'20px'}"
                type="md-exit" size="24"></Icon>
          <Modal
            v-model="showLogoutDialog"
            title="退出"
            @on-ok="logout">
            <p>确定退出登录？</p>
          </Modal>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '600px'}">
          <!--          <a href="http://www.cmossafe.top:8180/chessMaster/downSingleFile?fileName=tinified%20(56).zip">下载</a>Content-->
          <FaPiaoXinXi v-show="this.selectedMenu==='发票信息'"/>
          <DianZiFaPiao v-show="this.selectedMenu==='电子发票'"/>
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
  import Http from "@/libs/Http";

  export default {
    components: {ChaxunXiazai, DianZiFaPiao, FaPiaoXinXi},
    data() {
      return {
        isCollapsed: false,
        selectedMenu: '发票信息',
        showLogoutDialog: false
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
      },
      logout() {
        Http.get('/api/logout', {})
          .then(response => {
            if (response.returnCode == 200) {
              this.$Notice.open({
                title: '结果',
                desc: '退出成功'
              });
              localStorage.removeItem('userName');

              setTimeout(() => {
                window.location.href = '/baozhang';
              }, 1000);
            } else {
              this.$Notice.open({
                title: '结果',
                desc: '退出失败'
              });
            }

          })
          .catch(e => {
            console.log(e);
            this.$Notice.open({
              title: '结果',
              desc: '退出失败'
            });
          })
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
        .then(response => {
          console.log(response);
        })
        .catch(e => {
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

