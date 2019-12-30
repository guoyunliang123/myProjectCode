<template>
    <div class="data">
        <el-container>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="padding-left: 20px">
                <el-breadcrumb-item class="sidebar">数据字典</el-breadcrumb-item>
                <el-breadcrumb-item class="sidebar">在线库</el-breadcrumb-item>
                <el-breadcrumb-item class="sidebar">详情页</el-breadcrumb-item>
            </el-breadcrumb>
            <el-header>表名：<span class="table-name">order_info</span></el-header>
            <el-container class="sidebar">
                <el-aside width="200px" style="line-height: 30px">
                    <h1>基本信息</h1>
                    <p>表名称：order_info</p>
                    <p>注释：order_info</p>
                    <p>所属库：loc_order</p>
                    <p>所属集群：LOC</p>
                    <p>负责人：XXX</p>
                    <h1>更新信息</h1>
                    <p>创建时间：2018-02-05 13:22:33</p>
                    <p>最后更新：2018-02-05 13:22:33</p>
                </el-aside>
                <el-main style="padding: 0 20px 20px 20px;">
                    <el-menu class="el-menu-vertical-demo" mode="horizontal">
                        <el-menu-item index="1">字段信息</el-menu-item>
                        <el-menu-item index="2" disabled>变更记录</el-menu-item>
                    </el-menu>
                    <el-table :data="tableData" border style="width: 100% height: 100px">
                        <el-table-column prop="fieldName" label="" width="180" :render-header="renderHeader">
                        </el-table-column>
                        <el-table-column prop="annotation" label="" width="180" :render-header="renderHeader1">
                        </el-table-column>
                        <el-table-column prop="dataType" label="数据类型">
                        </el-table-column>
                        <el-table-column prop="default" label="默认值">
                        </el-table-column>
                        <el-table-column prop="judge" label="是否key值">
                        </el-table-column>
                        <el-table-column prop="example" label="样例">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        methods: {
            renderHeader() {
                return ( <div><span>字段名</span> <el-input v-model="input" placeholder="请输入内容" style="width: 125px; top: 15px; right: 10px "></el-input></div>)
            },
            renderHeader1() {
                return ( <div><span>注释</span> <el-input v-model="input" placeholder="请输入内容" style="width: 125px; top: 15px; right: 30px height: 0px;"></el-input></div>)
            }
        },
        data() {
            return {
                tableData: [{
                    fieldName: '2016-05-02',
                    annotation: '王小虎',
                    dataType: '上海市',
                    default: '0',
                    judge: '是',
                    example: '11'
                }, {
                    fieldName: '2016-05-04',
                    annotation: '王小虎',
                    dataType: '上海市',
                    default: '0',
                    judge: '是',
                    example: '11'
                }, {
                    fieldName: '2016-05-01',
                    annotation: '王小虎',
                    dataType: '上海市',
                    default: '0',
                    judge: '是',
                    example: '11'
                }, {
                    fieldName: '2016-05-03',
                    annotation: '王小虎',
                    dataType: '上海市',
                    default: '0',
                    judge: '是',
                    example: '11'
                }, {
                    fieldName: '2016-05-03',
                    annotation: '王小虎',
                    dataType: '上海市',
                    default: '0',
                    judge: '是',
                    example: '11'
                }, {
                    fieldName: '2016-05-03',
                    annotation: '王小虎',
                    dataType: '上海市',
                    default: '0',
                    judge: '是',
                    example: '11'
                }, {
                    fieldName: '2016-05-03',
                    annotation: '王小虎',
                    dataType: '上海市',
                    default: '0',
                    judge: '是',
                    example: '11'
                }]
            }
        }
    }
</script>

<style scoped>
    .el-header,
    .el-footer {
        /* background-color: #B3C0D1; */
        color: #333;
        /* text-align: center; */
        line-height: 60px;
        border-bottom: 1px solid #000;
    }
    
    .el-aside {
        /* background-color: #D3DCE6; */
        color: #333;
        height: 550px;
        border-right: 1px solid #000;
    }
    
    .el-main {
        /* background-color: #E9EEF3; */
        color: #333;
    }
    
    body>.el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    
    .sidebar h1 {
        border-left: 5px solid #999;
        color: #999;
        padding: 5px;
        font-size: 12px;
    }
    
    .sidebar p {
        font-size: 12px;
        color: #999;
    }
    
    .data .sidebar {
        font-size: 12px;
        color: #999;
    }
    
    .table-name {
        font-size: 12px;
    }
    
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 0;
    }
</style>
