import store from "@/store";

export default [
    {
        path: "pay",
        name: "AdminPay",
        component: () => import("@/views/zhifu/zhifu"),
        meta: { authLogin: true },
    },

    {
        path: "admins",
        name: "AdminadminsList",
        component: () => import("@/views/admins/list"),
        meta: { title: "管理员列表", authLogin: true },
    },
    {
        path: "adminsadd",
        name: "AdminadminsAdd",
        component: () => import("@/views/admins/add"),
        meta: { title: "添加管理员", authLogin: true },
    },
    {
        path: "adminsupdt",
        name: "AdminadminsUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/admins/updt"),
        meta: { title: "编辑管理员", authLogin: true },
    },
    {
        path: "adminsupdtself",
        name: "AdminadminsUpdtSelf",
        props: (route) => ({ id: store.state.user.session.id }),
        component: () => import("@/views/admins/updt"),
        meta: { title: "编辑管理员", authLogin: true },
    },
    {
        path: "lunbotu",
        name: "AdminlunbotuList",
        component: () => import("@/views/lunbotu/list"),
        meta: { title: "轮播图列表", authLogin: true },
    },
    {
        path: "lunbotuadd",
        name: "AdminlunbotuAdd",
        component: () => import("@/views/lunbotu/add"),
        meta: { title: "添加轮播图", authLogin: true },
    },
    {
        path: "lunbotuupdt",
        name: "AdminlunbotuUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/lunbotu/updt"),
        meta: { title: "编辑轮播图", authLogin: true },
    },
    {
        path: "wxuser",
        name: "AdminwxuserList",
        component: () => import("@/views/wxuser/list"),
        meta: { title: "微信用户列表", authLogin: true },
    },
    {
        path: "wxuseradd",
        name: "AdminwxuserAdd",
        component: () => import("@/views/wxuser/add"),
        meta: { title: "添加微信用户", authLogin: true },
    },
    {
        path: "wxuserupdt",
        name: "AdminwxuserUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/wxuser/updt"),
        meta: { title: "编辑微信用户", authLogin: true },
    },
    {
        path: "yonghu",
        name: "AdminyonghuList",
        component: () => import("@/views/yonghu/list"),
        meta: { title: "用户列表", authLogin: true },
    },
    {
        path: "yonghuadd",
        name: "AdminyonghuAdd",
        component: () => import("@/views/yonghu/add"),
        meta: { title: "添加用户", authLogin: true },
    },
    {
        path: "yonghuupdt",
        name: "AdminyonghuUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/yonghu/updt"),
        meta: { title: "编辑用户", authLogin: true },
    },
    {
        path: "yonghuupdtself",
        name: "AdminyonghuUpdtSelf",
        props: (route) => ({ id: store.state.user.session.id }),
        component: () => import("@/views/yonghu/updt"),
        meta: { title: "编辑用户", authLogin: true },
    },
    {
        path: "yonghudetail",
        props: (route) => ({ id: route.query.id }),
        name: "AdminyonghuDetail",
        component: () => import("@/views/yonghu/detail"),
        meta: { title: "用户详情", authLogin: true },
    },
    {
        path: "tushufenlei",
        name: "AdmintushufenleiList",
        component: () => import("@/views/tushufenlei/list"),
        meta: { title: "图书分类列表", authLogin: true },
    },
    {
        path: "tushufenleiadd",
        name: "AdmintushufenleiAdd",
        component: () => import("@/views/tushufenlei/add"),
        meta: { title: "添加图书分类", authLogin: true },
    },
    {
        path: "tushufenleiupdt",
        name: "AdmintushufenleiUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/tushufenlei/updt"),
        meta: { title: "编辑图书分类", authLogin: true },
    },
    {
        path: "tushuxinxi",
        name: "AdmintushuxinxiList",
        component: () => import("@/views/tushuxinxi/list"),
        meta: { title: "图书信息列表", authLogin: true },
    },
    {
        path: "tushuxinxiadd",
        name: "AdmintushuxinxiAdd",
        component: () => import("@/views/tushuxinxi/add"),
        meta: { title: "添加图书信息", authLogin: true },
    },
    {
        path: "tushuxinxiupdt",
        name: "AdmintushuxinxiUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/tushuxinxi/updt"),
        meta: { title: "编辑图书信息", authLogin: true },
    },
    {
        path: "tushuxinxidetail",
        props: (route) => ({ id: route.query.id }),
        name: "AdmintushuxinxiDetail",
        component: () => import("@/views/tushuxinxi/detail"),
        meta: { title: "图书信息详情", authLogin: true },
    },
    {
        path: "gouwuche",
        name: "AdmingouwucheList",
        component: () => import("@/views/gouwuche/list"),
        meta: { title: "购物车列表", authLogin: true },
    },
    {
        path: "gouwuche_goumairen",
        name: "AdmingouwucheListgoumairen",
        component: () => import("@/views/gouwuche/list-goumairen"),
        meta: { title: "购物车列表", authLogin: true },
    },
    {
        path: "gouwucheadd",
        name: "AdmingouwucheAdd",
        component: () => import("@/views/gouwuche/add"),
        meta: { title: "添加购物车", authLogin: true },
    },
    {
        path: "gouwucheupdt",
        name: "AdmingouwucheUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/gouwuche/updt"),
        meta: { title: "编辑购物车", authLogin: true },
    },
    {
        path: "gouwuchedetail",
        props: (route) => ({ id: route.query.id }),
        name: "AdmingouwucheDetail",
        component: () => import("@/views/gouwuche/detail"),
        meta: { title: "购物车详情", authLogin: true },
    },
    {
        path: "dingdan",
        name: "AdmindingdanList",
        component: () => import("@/views/dingdan/list"),
        meta: { title: "订单列表", authLogin: true },
    },
    {
        path: "dingdan_xiadanren",
        name: "AdmindingdanListxiadanren",
        component: () => import("@/views/dingdan/list-xiadanren"),
        meta: { title: "订单列表", authLogin: true },
    },
    {
        path: "dingdanadd",
        name: "AdmindingdanAdd",
        component: () => import("@/views/dingdan/add"),
        meta: { title: "添加订单", authLogin: true },
    },
    {
        path: "dingdanupdt",
        name: "AdmindingdanUpdt",
        props: (route) => ({ id: route.query.id }),
        component: () => import("@/views/dingdan/updt"),
        meta: { title: "编辑订单", authLogin: true },
    },
    {
        path: "dingdandetail",
        props: (route) => ({ id: route.query.id }),
        name: "AdmindingdanDetail",
        component: () => import("@/views/dingdan/detail"),
        meta: { title: "订单详情", authLogin: true },
    },
];
