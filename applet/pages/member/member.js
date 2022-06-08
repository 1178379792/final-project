// index.js
// 获取应用实例
import DB from "../../request/db";
const app = getApp();
const utils = require("../../utils/util");
const { formatImageSrc, isArray } = require("../../utils/util");

Page({
    mixins: [require("../../utils/myMixin")],
    data: {},
    onLoad(option) {
        wx.setNavigationBarTitle({
            title: "个人中心",
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

            touxiang:formatImageSrc( app.globalData.user.touxiang),
            session: app.globalData.userInfo,
        });
    },
    onShow() {},

    tuichudenglu(){
        
        app.globalData.userInfo= null;
        wx.removeStorage({
            key: "userInfo",
        });
        app.globalData.user = null;
        wx.removeStorage({
            key: "user",
        });
        app.globalData.token = "";
        wx.removeStorage({
            key: "token",
        });
        wx.removeStorageSync("token");

        wx.navigateTo({
            url: '/pages/index/index'
          });
    },
});
