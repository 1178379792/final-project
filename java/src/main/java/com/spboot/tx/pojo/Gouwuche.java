package com.spboot.tx.pojo;

import com.baomidou.mybatisplus.annotation.*;
import com.jntoo.db.*;
import java.io.Serializable;
import java.util.*;

@TableName("gouwuche")
public class Gouwuche implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.AUTO)
    private Integer id;

    private Integer tushuxinxiid;

    private String bianhao;

    private String mingcheng;

    private String tupian;

    private Integer fenlei;

    private Integer kucun;

    private Double jiage;

    private Integer goumaishuliang;

    private Double xiaoji;

    private String goumairen;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTushuxinxiid() {
        return tushuxinxiid;
    }

    public void setTushuxinxiid(Integer tushuxinxiid) {
        this.tushuxinxiid = tushuxinxiid == null ? 0 : tushuxinxiid;
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

    public Integer getGoumaishuliang() {
        return goumaishuliang;
    }

    public void setGoumaishuliang(Integer goumaishuliang) {
        this.goumaishuliang = goumaishuliang == null ? 0 : goumaishuliang;
    }

    public Double getXiaoji() {
        return xiaoji;
    }

    public void setXiaoji(Double xiaoji) {
        this.xiaoji = xiaoji == null ? 0.0f : xiaoji;
    }

    public String getGoumairen() {
        return goumairen;
    }

    public void setGoumairen(String goumairen) {
        this.goumairen = goumairen == null ? "" : goumairen.trim();
    }
}
