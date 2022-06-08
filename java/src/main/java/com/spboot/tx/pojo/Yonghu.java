package com.spboot.tx.pojo;

import com.baomidou.mybatisplus.annotation.*;
import com.jntoo.db.*;
import java.io.Serializable;
import java.util.*;

@TableName("yonghu")
public class Yonghu implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String zhanghao;

    private String mima;

    private String touxiang;

    private String xingming;

    private String xingbie;

    private String shoujihaoma;

    private String shengri;

    private String suozaichengshi;

    private String gexingqianming;

    private String shouhuodizhi;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getZhanghao() {
        return zhanghao;
    }

    public void setZhanghao(String zhanghao) {
        this.zhanghao = zhanghao == null ? "" : zhanghao.trim();
    }

    public String getMima() {
        return mima;
    }

    public void setMima(String mima) {
        this.mima = mima == null ? "" : mima.trim();
    }

    public String getTouxiang() {
        return touxiang;
    }

    public void setTouxiang(String touxiang) {
        this.touxiang = touxiang == null ? "" : touxiang.trim();
    }

    public String getXingming() {
        return xingming;
    }

    public void setXingming(String xingming) {
        this.xingming = xingming == null ? "" : xingming.trim();
    }

    public String getXingbie() {
        return xingbie;
    }

    public void setXingbie(String xingbie) {
        this.xingbie = xingbie == null ? "" : xingbie.trim();
    }

    public String getShoujihaoma() {
        return shoujihaoma;
    }

    public void setShoujihaoma(String shoujihaoma) {
        this.shoujihaoma = shoujihaoma == null ? "" : shoujihaoma.trim();
    }

    public String getShengri() {
        return shengri;
    }

    public void setShengri(String shengri) {
        this.shengri = shengri == null ? "" : shengri.trim();
    }

    public String getSuozaichengshi() {
        return suozaichengshi;
    }

    public void setSuozaichengshi(String suozaichengshi) {
        this.suozaichengshi = suozaichengshi == null ? "" : suozaichengshi.trim();
    }

    public String getGexingqianming() {
        return gexingqianming;
    }

    public void setGexingqianming(String gexingqianming) {
        this.gexingqianming = gexingqianming == null ? "" : gexingqianming.trim();
    }

    public String getShouhuodizhi() {
        return shouhuodizhi;
    }

    public void setShouhuodizhi(String shouhuodizhi) {
        this.shouhuodizhi = shouhuodizhi == null ? "" : shouhuodizhi.trim();
    }
}
