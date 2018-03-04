<style scoped>

.header {
    width: 100%;
    height: 60px;
    background-color: #495060;
}

#logoStyle {
    width: auto;
    height: 60px;
    margin-left: 30px;
}

#menu{
  width:260px;
  height: 60px;
  display: inline-block;
  float: right;
  right: 10px;
}

.header span{
  width: 300px;
  line-height: 60px;
  color: white;
  font-size: 23px;
  display: inline-block;
  vertical-align: top;
}
</style>

<template>

<div>
    <div class="header">
        <img :src="logoUrl" id="logoStyle" />

        <span>
          圣得西风格意向调研系统
        </span>
        <Menu id="menu" mode="horizontal" theme="dark" active-name="1" @on-select="menuClick">
            <div class="layout-nav">
                <MenuItem name="dataStatistic">
                    <Icon type="ios-navigate"></Icon>
                    数据统计
                </MenuItem>
                <MenuItem name="dataAnalysis">
                    <Icon type="ios-keypad"></Icon>
                    数据分析
                </MenuItem>

            </div>
        </Menu>
    </div>
    <div>
        <router-view></router-view>
    </div>
</div>

</template>

<script>

import logo from './resources/images/sundance_logo.svg'

export default {
    data() {
            return {
                logoUrl: logo
            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
          menuClick(name){
            if (name == 'dataStatistic'){
              this.$router.push('/');
            }
            else if (name == 'dataAnalysis'){
              this.$router.push('/charts');
            }
          }
        }
};

</script>
