package com.spboot.tx.pojo;

import com.baomidou.mybatisplus.annotation.*;
import com.jntoo.db.*;
import java.io.Serializable;
import java.util.*;

@TableName("dingdan")
public class Dingdan implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.AUTO)
    private Integer id;

    private String dingdanbianhao;

    private String dingdanxinxi;

    private Double dingdanjine;

    private String dingdanzhuangtai;

    private String xingming;

    private String lianxidianhua;

    private String shouhuodizhi;

    private String xiadanren;
    private String iszf;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDingdanbianhao() {
        return dingdanbianhao;
    }

    public void setDingdanbianhao(String dingdanbianhao) {
        this.dingdanbianhao = dingdanbianhao == null ? "" : dingdanbianhao.trim();
    }

    public String getDingdanxinxi() {
        return dingdanxinxi;
    }

    public void setDingdanxinxi(String dingdanxinxi) {
        this.dingdanxinxi = dingdanxinxi == null ? "" : dingdanxinxi.trim();
    }

    public List<Dingdandingdanxinxi> getDingdanxinxiList() {
        return DB.name(Dingdandingdanxinxi.class).where("dingdanid", id).order("id asc").select();
    }

    public Double getDingdanjine() {
        return dingdanjine;
    }

    public void setDingdanjine(Double dingdanjine) {
        this.dingdanjine = dingdanjine == null ? 0.0f : dingdanjine;
    }

    public String getDingdanzhuangtai() {
        return dingdanzhuangtai;
    }

    public void setDingdanzhuangtai(String dingdanzhuangtai) {
        this.dingdanzhuangtai = dingdanzhuangtai == null ? "" : dingdanzhuangtai.trim();
    }

    public String getXingming() {
        return xingming;
    }

    public void setXingming(String xingming) {
        this.xingming = xingming == null ? "" : xingming.trim();
    }

    public String getLianxidianhua() {
        return lianxidianhua;
    }

    public void setLianxidianhua(String lianxidianhua) {
        this.lianxidianhua = lianxidianhua == null ? "" : lianxidianhua.trim();
    }

    public String getShouhuodizhi() {
        return shouhuodizhi;
    }

    public void setShouhuodizhi(String shouhuodizhi) {
        this.shouhuodizhi = shouhuodizhi == null ? "" : shouhuodizhi.trim();
    }

    public String getXiadanren() {
        return xiadanren;
    }

    public void setXiadanren(String xiadanren) {
        this.xiadanren = xiadanren == null ? "" : xiadanren.trim();
    }

    public String getIszf() {
        return iszf;
    }

    public void setIszf(String iszf) {
        this.iszf = iszf == null ? "" : iszf.trim();
    }
}
