const routers = [{
    path: '/',
    meta: {
        title: '数据统计'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/charts',
    meta: {
        title: '数据分析'
    },
    component: (resolve) => require(['./views/charts.vue'], resolve)
}];
export default routers;
