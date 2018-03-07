<style scoped>
    .index {
        width: 100%;
        height: auto;
        text-align: center;
    }

    .table{
      width: auto;
      height: auto;
      margin-top: 30px;
      margin-left: 100px;
      margin-right: 100px;
    }

    .page{
      margin-top: 15px;
    }
</style>
<template>
    <div class="index">
        <Table class="table" :columns="columns1" :data="data1"></Table>
        <Page class="page" :total="dataCount" :page-size="pageSize" show-elevator show-total @on-change="pageChange"></Page>
    </div>
</template>
<script>
import util from '../libs/util';
export default {
    data () {
        return {
            columns1: [
                {
                    title: '图片',
                    key: 'matchImage',
                    align: 'center',
                    render: (h, params) => {
                        return  h('img', {
                                attrs: {
                                  src: params.row.modelurl
                                },
                                style: {
                                  width:'70px',
                                  height:'150px'
                                }
                              })
                    }
                },
                {
                    title: '内搭',
                    key: 'innerCloth',
                    align: 'center',
                    render: (h, params) => {
                        return  h('img', {
                                attrs: {
                                  src: params.row.innerClothUrl.productImageUrl
                                },
                                style: {
                                  width:'100px',
                                  height:'100px'
                                }
                              })
                    }
                },
                {
                    title: '外套',
                    key: 'outCLoth',
                    align: 'center',
                    render: (h, params) => {
                        return  h('img', {
                                attrs: {
                                  src: params.row.outClothUrl.productImageUrl
                                },
                                style: {
                                  width:'100px',
                                  height:'100px'
                                }
                              })
                    }
                },
                {
                    title: '下装',
                    key: 'trouser',
                    align: 'center',
                    render: (h, params) => {
                        return  h('img', {
                                attrs: {
                                  src: params.row.trousersClothUrl.productImageUrl
                                },
                                style: {
                                  width:'100px',
                                  height:'100px'
                                }
                              })
                    }
                },
                {
                    title: '推送次数',
                    key: 'userId'
                },
                {
                    title: '点赞人数',
                    key: 'countLike'
                },
                {
                    title: '浏览人数',
                    key: 'matchlistId'
                }
            ],
            data1: [

            ],
            dataCount:0,
            pageSize:10,
            currentPage:0,
        }
    },
    methods: {
      loadData(offset,limit) {
        let that = this;
        let message = this.$Message;
        util.ajax.get('/dggl/feedback/getFeedbackListPage', {
                params:{
                  limit: limit,
                  offset: offset
                }
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(function(response) {
                if (response.data.success == true) {
                  that.data1 = response.data.object.list;
                  that.dataCount = response.data.object.count;
                } else {
                  message.error(response.data.message);
                }
            })
            .catch(function(response) {
                message.error('获取数据操作失败!');
            });
      },
      pageChange(pageNum){
        this.currentPage = pageNum;
        this.loadData(this.pageSize,(pageNum - 1)*this.pageSize);
      }
    },
    created(){
      this.currentPage = 1;
      this.loadData(0,this.pageSize);
    }
  }
</script>
