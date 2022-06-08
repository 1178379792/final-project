export default [
    {
        path: "yonghuadd",
        name: "IndexyonghuAdd",
        component: () => import("@/views/yonghu/webadd"),
        meta: { title: "用户添加" },
    },
    {
        path: "tushuxinxi",
        name: "IndextushuxinxiList",
        component: () => import("@/views/tushuxinxi/index"),
        meta: { title: "图书信息列表" },
    },
    {
        path: "tushuxinxidetail",
        name: "IndextushuxinxiDetail",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/tushuxinxi/webdetail"),
        meta: { title: "图书信息详情" },
    },
    {
        path: "gouwucheadd",
        name: "IndexgouwucheAdd",
        component: () => import("@/views/gouwuche/webadd"),
        meta: { title: "购物车添加", authLogin: true, msg: true },
    },
    {
        path: "dingdanadd",
        name: "IndexdingdanAdd",
        component: () => import("@/views/dingdan/webadd"),
        meta: { title: "订单添加", authLogin: true, msg: true },
    },
    {
        path: "dingdandetail",
        name: "IndexdingdanDetail",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/dingdan/webdetail"),
        meta: { title: "订单详情" },
    },
];
