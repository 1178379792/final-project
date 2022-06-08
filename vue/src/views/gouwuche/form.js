import store from "@/store";
import router from "@/router";
import { extend } from "@/utils/extend";
import rule from "@/utils/rule";

export function createForm() {
    var $route = router.currentRoute;
    const $store = store;
    var form = {
        bianhao: "",
        mingcheng: "",
        tupian: "",
        fenlei: "",
        kucun: "",
        jiage: "",
        goumaishuliang: "",
        goumairen: store.state.user.session.username,
        tushuxinxiid: 0,
    };

    return form;
}

export function loadInfo(id) {
    return new Promise((resolve, reject) => {
        store
            .dispatch("tushuxinxi/findById", id)
            .then((data) => {
                var obj = createForm();
                var autoText = ["tushuxinxiid", "bianhao", "mingcheng", "tupian", "fenlei", "kucun", "jiage"];
                for (var txt of autoText) {
                    obj[txt] = data[txt];
                }
                obj.tushuxinxiid = id;
                resolve({ form: obj, readMap: data });
            })
            .catch((err) => {
                reject(err);
            });
    });
}

export default {
    createForm,
    loadInfo,
};
