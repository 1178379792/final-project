import store from "@/store";
import router from "@/router";
import { extend } from "@/utils/extend";
import rule from "@/utils/rule";

export function createForm() {
    var $route = router.currentRoute;
    const $store = store;
    var form = {
        title: "",
        image: "",
        url: "",
    };

    return form;
}

export default {
    createForm,
};
