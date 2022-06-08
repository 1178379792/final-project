import store from "@/store";
import router from "@/router";
import { extend } from "@/utils/extend";
import rule from "@/utils/rule";

export function createForm() {
    var $route = router.currentRoute;
    const $store = store;
    var form = {
        dingdanbianhao: rule.getID(),
        dingdanxinxi: "",
        dingdanjine: $route.query.sum_xiaoji,
        dingdanzhuangtai: "待支付",
        xingming: "",
        lianxidianhua: "",
        shouhuodizhi: "",
        xiadanren: store.state.user.session.username,
        iszf: "否",
    };

    return form;
}

export default {
    createForm,
};
