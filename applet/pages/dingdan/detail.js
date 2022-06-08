// pages/dingdan/detail.js

const app = getApp();
const DB = require("../../request/db");
const store = require("../../request/module/dingdan");
const utils = require("../../utils/util");
var http = require("../../request/request");

Page({
    /**
     * 页面的初始数据
     */
    data: {
        id: "",

        map: {},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: "订单",
        });

        if (!utils.empty(options)) {
            this.setData(options);
        }

        this.loadDetail();
    },
    loadDetail() {
        if (this.data.loading) return;
        this.setData({
            loading: true,
        });
        store
            .dispatch("findById", this.data.id)
            .then((map) => {
                store.formatData(map); // 数据格式化
                this.setData({
                    loading: false,
                    map: map,
                });
            })
            .catch((err) => {
                this.setData({
                    loading: false,
                });
                wx.showToast({
                    title: err.message,
                    icon: "error",
                    duration: 2000,
                });
            });
    },

    onPaymentOrder(e) {
        wx.showLoading({
            title: "支付中",
            mask: true,
        });
        setTimeout(() => {
            var map = this.data.map;
            const { httpGet } = app.include("/request/request");
            var biao = "dingdan";
            var id = this.data.id;

            httpGet("/payment", { biao, id })
                .then((res) => {
                    wx.hideLoading({});
                    if (res.code == 0) {
                        this.loadDetail();
                        wx.showModal({
                            title: "温馨提示：",
                            content: "支付成功",
                            showCancel: false,
                        });
                    } else {
                        wx.showModal({
                            title: "温馨提示：",
                            content: "支付失败：" + res.msg,
                            showCancel: false,
                        });
                    }
                })
                .catch((e) => {
                    wx.hideLoading({});
                    wx.showModal({
                        title: "温馨提示：",
                        content: "支付失败：" + e.message,
                        showCancel: false,
                    });
                });
        }, 2000);
    },
});
