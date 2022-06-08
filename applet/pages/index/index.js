// index.js
// 获取应用实例
import DB from "../../request/db";
const app = getApp();
const utils = require("../../utils/util");

Page({
    mixins: [require("../../utils/myMixin")],
    data: {
        tushuxinxiKeyword: "",
    },
    onLoad(option) {
        wx.setNavigationBarTitle({
            title: "主页",
        });
        if (!utils.empty(option)) {
            this.setData(option);
        }
        if (!app.session("username")) {
            wx.reLaunch({
                url: "/pages/login/login",
            });
            return;
        }
        this.setData({
            userInfo: app.globalData.userInfo,
            user: app.globalData.user,
            session: app.globalData.userInfo,
        });
        DB.name("lunbotu")
            .order("id desc")
            .limit(5)
            .select()
            .then((res) => {
                this.setData({ bhtList: res.data });
            });
        DB.name("tushuxinxi")
            .limit("8")
            .order("jiage desc")
            .select()
            .then((res) => {
                const st = app.include("/request/module/tushuxinxi");
                var lists = res.data;
                st.formatDataList(lists);

                this.setData({
                    tushuxinxilist1: lists,
                });
            });
    },
    onShow() {},

    onSearchtushuxinxi() {
        wx.navigateTo({
            url: "/pages/tushuxinxi/list?search.keyword=" + this.data.tushuxinxiKeyword,
        });
    },
});
