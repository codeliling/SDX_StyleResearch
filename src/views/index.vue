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
        <Page class="page" :total="100" show-elevator show-total></Page>
    </div>
</template>
<script>
export default {
    data () {
        return {
            columns1: [
                {
                    title: '图片',
                    key: 'matchImage'
                },
                {
                    title: '内搭',
                    key: 'innerCloth'
                },
                {
                    title: '外套',
                    key: 'outCLoth'
                },
                {
                    title: '下装',
                    key: 'trouser'
                },
                {
                    title: '推送次数',
                    key: 'pushNum'
                },
                {
                    title: '点赞人数',
                    key: 'likeNum'
                },
                {
                    title: '浏览人数',
                    key: 'browserNum'
                }
            ],
            data1: [
                {
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '',
                    pushNum: '1212',
                    likeNum: '1333',
                    browserNum: '1567',
                }, {
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '2016-10-03',
                    pushNum: '237',
                    likeNum: '32121',
                    browserNum: '345445',
                },  {
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '2016-10-03',
                    pushNum: '2131',
                    likeNum: '435345',
                    browserNum: '345234'
                },{
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '',
                    pushNum: '1212',
                    likeNum: '1333',
                    browserNum: '1567',
                }, {
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '2016-10-03',
                    pushNum: '237',
                    likeNum: '32121',
                    browserNum: '345445',
                },  {
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '2016-10-03',
                    pushNum: '2131',
                    likeNum: '435345',
                    browserNum: '345234'
                },{
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '',
                    pushNum: '1212',
                    likeNum: '1333',
                    browserNum: '1567',
                }, {
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '2016-10-03',
                    pushNum: '237',
                    likeNum: '32121',
                    browserNum: '345445',
                },  {
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '2016-10-03',
                    pushNum: '2131',
                    likeNum: '435345',
                    browserNum: '345234'
                },{
                    matchImage: '',
                    innerCloth: '',
                    outCLoth: '',
                    trouser: '',
                    pushNum: '1212',
                    likeNum: '1333',
                    browserNum: '1567',
                }

            ]
        }
    }
  }
</script>
