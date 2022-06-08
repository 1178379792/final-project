export default [
    {
        label: "账号管理",
        to: "",
        children: [
            {
                label: "管理员账号管理",
                to: "/admin/admins",
            },
            {
                label: "管理员账号添加",
                to: "/admin/adminsadd",
            },
            {
                label: "密码修改",
                to: "/admin/mod",
            },
        ],
    },
    {
        label: "用户管理",
        to: "",
        children: [
            {
                label: "用户添加",
                to: "/admin/yonghuadd",
            },
            {
                label: "用户查询",
                to: "/admin/yonghu",
            },
        ],
    },
    {
        label: "图书分类管理",
        to: "",
        children: [
            {
                label: "图书分类添加",
                to: "/admin/tushufenleiadd",
            },
            {
                label: "图书分类查询",
                to: "/admin/tushufenlei",
            },
        ],
    },
    {
        label: "图书信息管理",
        to: "",
        children: [
            {
                label: "图书信息添加",
                to: "/admin/tushuxinxiadd",
            },
            {
                label: "图书信息查询",
                to: "/admin/tushuxinxi",
            },
        ],
    },
    {
        label: "订单管理",
        to: "",
        children: [
            {
                label: "订单查询",
                to: "/admin/dingdan",
            },
        ],
    },
    {
        label: "系统管理",
        to: "",
        children: [
            {
                label: "轮播图添加",
                to: "/admin/lunbotuadd",
            },
            {
                label: "轮播图查询",
                to: "/admin/lunbotu",
            },
        ],
    },
];
