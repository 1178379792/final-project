import store from "@/store";
import router from "@/router";
import { extend } from "@/utils/extend";
import rule from "@/utils/rule";

export function createForm() {
    var $route = router.currentRoute;
    const $store = store;
    var form = {
        zhanghao: "",
        mima: "",
        touxiang: "",
        xingming: "",
        xingbie: "",
        shoujihaoma: "",
        shengri: "",
        suozaichengshi: "",
        gexingqianming: "",
        shouhuodizhi: "",
    };

    return form;
}

export default {
    createForm,
};
