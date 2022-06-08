package com.spboot.tx.pojo;

import com.baomidou.mybatisplus.annotation.*;
import com.jntoo.db.*;
import java.io.Serializable;
import java.util.*;

@TableName("tushuxinxi")
public class Tushuxinxi implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String bianhao;

    private String mingcheng;

    private String tupian;

    private Integer fenlei;

    private String zuozhe;

    private String chubanshe;

    private Integer kucun;

    private Double jiage;

    private String miaoshu;

    private String addtime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getGouwucheCount() {
        return DB.name("gouwuche").where("tushuxinxiid", id).count();
    }

    public String getBianhao() {
        return bianhao;
    }

    public void setBianhao(String bianhao) {
        this.bianhao = bianhao == null ? "" : bianhao.trim();
    }

    public String getMingcheng() {
        return mingcheng;
    }

    public void setMingcheng(String mingcheng) {
        this.mingcheng = mingcheng == null ? "" : mingcheng.trim();
    }

    public String getTupian() {
        return tupian;
    }

    public void setTupian(String tupian) {
        this.tupian = tupian == null ? "" : tupian.trim();
    }

    public Integer getFenlei() {
        return fenlei;
    }

    public void setFenlei(Integer fenlei) {
        this.fenlei = fenlei == null ? 0 : fenlei;
    }

    public String getZuozhe() {
        return zuozhe;
    }

    public void setZuozhe(String zuozhe) {
        this.zuozhe = zuozhe == null ? "" : zuozhe.trim();
    }

    public String getChubanshe() {
        return chubanshe;
    }

    public void setChubanshe(String chubanshe) {
        this.chubanshe = chubanshe == null ? "" : chubanshe.trim();
    }

    public Integer getKucun() {
        return kucun;
    }

    public void setKucun(Integer kucun) {
        this.kucun = kucun == null ? 0 : kucun;
    }

    public Double getJiage() {
        return jiage;
    }

    public void setJiage(Double jiage) {
        this.jiage = jiage == null ? 0.0f : jiage;
    }

    public String getMiaoshu() {
        return miaoshu;
    }

    public void setMiaoshu(String miaoshu) {
        this.miaoshu = miaoshu == null ? "" : miaoshu.trim();
    }

    public String getAddtime() {
        return addtime;
    }

    public void setAddtime(String addtime) {
        this.addtime = addtime == null ? "" : addtime.trim();
    }
}
