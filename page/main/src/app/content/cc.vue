<template>
    <div style="width: 100%;height: 100%">
        <div class="op-aside pull-left">
            <ul class="nav">
                <li>
                    <a class="nav-header">数据</a>
                    <ul class="nav" style="max-height: 300px;overflow-y: auto;overflow-x: hidden;">
                        <li>
                            <a class="op-classes"> <span class="glyphicon glyphicon-plus-sign"></span> 创建 Class</a>
                            <!-- <a data-toggle="modal"  href  class="lc-inline  pull-right data-import-btn" title="数据导入" data-target="#importData" ><span class="glyphicon glyphicon-import"></span>
                              <span class="visible-lg-inline">导入</span>
                             </a> -->
                        </li>

                        <li v-for="item in classList" :key="item.id" ><a class="op-classes" @click="() => lookClass(item.className)">{{item.className}}</a></li>
                    </ul>
                </li>
                <li>
                    <a class="nav-header">API 统计</a>
                </li>
                <li>
                    <a class="nav-header">离线数据分析</a>
                </li>
            </ul>
        </div>
        <div class="op-main pull-left">
            <div v-if="currentClass===''">
                <div>

                    <div class="callout callout-success callout-has-icon">
                    <i class="icon icon2-question"></i>
                    <div class="callout-content">
                        <h4>如何管理我的数据？</h4>
                        <ul>
                            <li>从左侧选择一个 class 可以查看相关数据</li>
                            <li>您也可以创建新的 class，或导入已有数据</li>
                            <!-- <li>担心数据安全，请访问我们的「<a href="https://leancloud.cn/docs/data_security.html">数据和安全</a>」文档</li> -->
                            <li>通过快捷键更方便进行数据操作
                                <ul>
                                    <li><code>Arrow/Tab</code> 切换单元格</li>
                                    <li><code>Enter</code> 当前单元格名称为 ObjectId 时，打开视图窗口</li>
                                    <li><code>Enter</code> 当前单元格类型为 File 时，打开文件窗口</li>
                                    <li><code>Enter</code> 当前单元格可编辑时，进入编辑模式</li>
                                    <li><code>e</code>当单元格数据较多时，更方便的编辑当前单元格</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                </div>
            </div>
            <div v-show="currentClass!==''">

                <div id="table-root"></div>
            </div>
        </div>


        <!-- newRow -->
        <div class="modal fade" id="newRow" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">添加行</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="newRowData" class="control-label">数据:</label>
                                <textarea class="form-control" id="newRowData" style="height: 300px" v-model="newRowData"></textarea>
                            </div>
                        </form>
                        <button type="button" class="btn btn-primary btn-sm" @click="newRowUseDemo">使用模版</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary" @click="newRowSave">保存</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import $ from 'jquery'

    import 'bootstrap-table/dist/bootstrap-table.css'
    import 'bootstrap-table'



    export default{
        data:function () {
            return {
                currentClass:'',
                classList:{},
                fieldList:{},
                table:{},
                page:1,
                limit:10,
                data:[],
                newRowData:'{}'
            }
        },
        created: function () {
            const page=this
            $.ajax({
                url: window.localStorage.getItem('host')+'/v1/master/allClass',
                type: 'GET',
                headers:{
                    "X-IC-Id":window.localStorage.getItem('appId'),
                    "X-IC-Key":window.localStorage.getItem('masterKey')+",master"
                },
                success: function(result) {

                    page.classList=result.results
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert('err')
                },
            });

            $.ajax({
                url: window.localStorage.getItem('host')+'/v1/master/allField',
                type: 'GET',
                headers:{
                    "X-IC-Id":window.localStorage.getItem('appId'),
                    "X-IC-Key":window.localStorage.getItem('masterKey')+",master"
                },
                success: function(result) {
                    page.fieldList=result.results
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert('err')
                },
            });


            console.log('created')
        },
        watch:{
            currentClass:function () {
                const page=this
                $('#table-root').before(`<div class="table-menu">
                    <div class="btn-group" role="group" aria-label="...">
                        <button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#newRow">添加行</button>
                        <button type="button" class="btn btn-default btn-sm">删除行</button>
                        <button type="button" class="btn btn-default btn-sm">添加列</button>
                        <button type="button" class="btn btn-default btn-sm">查询</button>
                        <button type="button" class="btn btn-default btn-sm">刷新</button>
                        <div class="btn-group" role="group">
                        <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">其他 <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#">删除所以数据</a></li>
                            <li><a href="#">删除Class</a></li>
                            <li><a href="#">索引</a></li>
                            <li><a href="#">权限设置</a></li>
                        </ul>
                        </div>
                    </div>

                    <button type="button" class="btn btn-default btn-sm">编辑单元格</button>
                </div>`)
                $('#table-root').empty()
                $('#table-root').append('<table id="table"></table>')
                this.table=$('#table')


                var col=[{
                    field: 'state',
                    checkbox: true,
                }]

                this.fieldList.forEach(function(value, index, array) {
                    console.log(value)
                    if(value.className===page.currentClass){
                        col=col.concat([{
                            field: value.fieldName,
                            title: value.fieldName
                        }])
                    }
                });

                console.log(col)



                this.table.bootstrapTable({
                    columns: col,
                    data: [],
                    idField:'id',
                    clickToSelect:true,
                    showColumns:true,
                    toolbar:'.table-menu',
                    rowStyle: function (row, index) {
                        return { css:{
                            padding:"2px 4px 2px 4px",
                            fontSize:"12px"
                        }
                        };
                    }

                });

                this.page=1

                var query=[
                    "limit="+this.limit,
                    "skip="+(this.limit*(this.page-1))
                ]

                $.ajax({
                    url: window.localStorage.getItem('host')+'/v1/classes/'+page.currentClass+'?'+query.join('&'),
                    type: 'GET',
                    headers:{
                        "X-IC-Id":window.localStorage.getItem('appId'),
                        "X-IC-Key":window.localStorage.getItem('masterKey')+",master"
                    },
                    success: function(result) {
                        page.data=result.results
                        page.table.bootstrapTable('load',page.data)
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert('err')
                    },
                });
            }
        }
        ,
        methods:{
            lookClass:function (className) {
                this.currentClass=className
            },
            newRowUseDemo:function () {
                var page=this
                var demo={}

                this.fieldList.forEach(function(value, index, array) {
                    console.log(value)
                    if(value.className===page.currentClass&&value.fieldName!=="createdAt"&&value.fieldName!=="updatedAt"){
                        switch (value._type){
                            case "number":
                                demo[value.fieldName]=0
                                break
                            case "string":
                                demo[value.fieldName]=''
                                break
                            case "boolean":
                                demo[value.fieldName]=true
                                break
                            case "date":
                                demo[value.fieldName]='2017-03-13T05:59:35.685Z'
                                break
                            case "object":
                                demo[value.fieldName]={}
                                break
                            case "array":
                                demo[value.fieldName]=[]
                                break
                            case "pointer":
                                demo[value.fieldName]={__type:"Pointer",id:1}
                                break
                            case "relation":
                                demo[value.fieldName]=[]
                                break
                        }
                    }
                });
                page.newRowData=JSON.stringify(demo)
            },
            newRowSave:function () {
                var page = this
                $.ajax({
                    url: window.localStorage.getItem('host')+'/v1/classes/'+page.currentClass,
                    type: 'POST',
                    contentType: "application/json; charset=utf-8",
                    dataType:'json',
                    data:page.newRowData,
                    headers:{
                        "X-IC-Id":window.localStorage.getItem('appId'),
                        "X-IC-Key":window.localStorage.getItem('masterKey')+",master"
                    },
                    success: function(result) {
                        page.refresh()
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert('err')
                    },
                });
            },
            refresh:function () {
                var page=this
                this.page=1

                var query=[
                    "limit="+this.limit,
                    "skip="+(this.limit*(this.page-1))
                ]

                $.ajax({
                    url: window.localStorage.getItem('host')+'/v1/classes/'+page.currentClass+'?'+query.join('&'),
                    type: 'GET',
                    headers:{
                        "X-IC-Id":window.localStorage.getItem('appId'),
                        "X-IC-Key":window.localStorage.getItem('masterKey')+",master"
                    },
                    success: function(result) {
                        page.data=result.results
                        page.table.bootstrapTable('load',page.data)
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert('err')
                    },
                });
            }
        }
    }
</script>

<style>
    @font-face {
        font-family: ui-icon; /*这里是说明调用来的字体名字*/
        src: url('../../assets/fonts/ui-icon.woff2'); /*这里是字体文件路径*/
    }
    .callout-success {
        color: #1aa208;
        background: #f6fff4;
        border-left: 6px solid #23dc0b;
    }
    .callout {
        margin-top: 0;
        margin-bottom: 20px;
        padding: 20px;
    }
    .callout.callout-has-icon .icon {
        float: left;
        font-size: 48px;
    }
    .callout-success .icon {
        color: #22d30a;
    }
    [class^=icon2-], [class*=" icon2-"] {
        font-family: ui-icon;
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        font-weight: 400;
        font-style: normal;
        speak: none;
        text-decoration: inherit;
        text-transform: none;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .callout.callout-has-icon .callout-content {
        margin-left: 60px;
    }
    .callout h4 {
        margin-top: 2px;
        margin-bottom: 8px;
    }
    code {
        padding: 2px 4px;
        font-size: 90%;
        color: #f5a122;
        background-color: #fffaec;
        border-radius: 4px;
    }
    .icon2-question:before {
        content: "\f174";
    }
    .nav {
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
    }
    .op-classes{
        font-weight: 300;
        font-size: 14px;
        color: #9c9eb0;
        cursor: pointer;
    }
    .nav-header{
        color: #000;
        cursor: pointer;
    }
    .table-menu{
        margin-bottom: 12px;
    }
    .bs-checkbox{
        height: 20px;
    }



</style>

