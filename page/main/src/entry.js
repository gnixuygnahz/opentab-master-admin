/**
 * Created by anytime on 2017/3/11.
 */
import Vue from 'vue'
import $ from 'jquery'
require('./assets/css/bootstrap.min.css')
require('bootstrap')
require('./assets/css/commen.css')

const gl= require('./app/content/gl.vue')
const jk = require('./app/content/jk.vue')
const cc = require( './app/content/gl.vue')
const fx = require( './app/content/gl.vue')
const zj = require( './app/content/gl.vue')
const sz = require( './app/content/gl.vue')



const routes = {
    'gl': gl,
    'jk': jk,
    'cc': cc,
    'fx': fx,
    'zj': zj,
    'sz': sz,
}

const menu=[
    {
        key:"gl",
        name:"概览",
        img:""
    },{
        key:"jk",
        name:"监控",
        img:""
    },{
        key:"cc",
        name:"存储",
        img:""
    },{
        key:"fx",
        name:"分析",
        img:""
    },{
        key:"zj",
        name:"组件",
        img:""
    },{
        key:"sz",
        name:"设置",
        img:""
    }
]

new Vue({
    el: '#app',
    render (h) {
        const page=this
        return (
            <div>
                <div class="op-header">


                        <div class="pull-left" style={{height:'100%',width:'80px',backgroundColor:'rgb(70, 142, 255)',color:'rgb(255, 255, 255)'}}>
                            <div style={{height:'100%',width:'80px',textAlign:'center',fontSize:'16px',fontWeight:'bold',paddingBottom:'10px',paddingTop:'10px',display: 'block'}}>Z</div>
                        </div>
                        <div class="pull-left op-header-text" style={{color:'#468eff'}}>应用名称</div>

                    <div class="pull-right op-header-text" onClick={window.close}>
                        关闭
                    </div>
                    <div class="pull-right op-header-text">
                        通知
                    </div>
                    <div class="pull-right op-header-text" onClick={function () {
                        const shell = nodeRequire('electron').remote.shell
                        shell.openExternal('http://leanote.com/blog/post/58a86b5aab644109c3000377')
                    }}>
                    帮助
                </div>
                </div>
                <div class="op-body">
                    <div class="pull-left" style={{height:'100%',width:'80px',backgroundColor:'#333650'}}>
                        <ul style={{marginBottom: '0', paddingLeft: 0, listStyle: 'none'}} class="op-menu">
                            <li onClick={()=>this.setPage("gl")} style={{height:'65px',width:'80px',padding:'10px',backgroundColor:this.menuKey==="gl"?'#1f2131':'#333650'}}>
                                            <i>
                                                <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1">
                                                    <title>移动统计</title>
                                                    <desc>Created with Sketch.</desc>
                                                    <defs></defs>
                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g id="Desktop-HD" transform="translate(-21.000000, -322.000000)">
                                                            <g id="Group" transform="translate(0.000000, 60.000000)">
                                                                <g id="文件存储" transform="translate(0.000000, 240.000000)">
                                                                    <g id="移动统计" transform="translate(20.000000, 20.000000)">
                                                                        <rect id="Rectangle-5" fill="#FFFFFF" x="1" y="12" width="4" height="6" rx="1"></rect>
                                                                        <rect id="Rectangle-5" fill="#2EA5FF" x="8" y="2" width="4" height="16" rx="1"></rect>
                                                                        <rect id="Rectangle-5" fill="#FFFFFF" x="15" y="9" width="4" height="9" rx="1"></rect>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </i>
                                     <i style={{display:'block',color:'#FFF',verticalAlign: 'top',textAlign: 'center',fontStyle: 'normal',fontSize:'13px'}}>概览</i>
                             </li>
                            <li  onClick={()=>this.setPage("jk")}  style={{height:'65px',width:'80px',padding:'10px',backgroundColor:this.menuKey==="jk"?'#1f2131':'#333650'}} >
                                <i style={{display:'block',textAlign:'center'}}>
                                    <img src={require("./assets/img/cloud.png")} alt="" />
                                </i>
                                <i style={{display:'block',color:'#FFF',verticalAlign: 'top',textAlign: 'center',fontStyle: 'normal',fontSize:'13px'}}>监控</i>
                            </li>
                            <li  onClick={()=>this.setPage("cc")} style={{height:'65px',width:'80px',padding:'10px',backgroundColor:this.menuKey==="cc"?'#1f2131':'#333650'}}>
                                <i>
                                    <svg width="14px" height="16px" viewBox="0 0 14 16" version="1.1">
                                        <title>Group 5</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs></defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Desktop-HD" transform="translate(-23.000000, -82.000000)">
                                                <g id="Group" transform="translate(0.000000, 60.000000)">
                                                    <g id="文件存储">
                                                        <g id="Group-5" transform="translate(20.000000, 20.000000)">
                                                            <ellipse id="Oval-9" fill="#2EA5FF" cx="10" cy="4" rx="7" ry="2"></ellipse>
                                                            <path d="M17,12 L17,16 C17,17.1045695 13.8659932,18 10,18 C6.13400675,18 3,17.1045695 3,16 L3,12 C3,13.1045695 6.13400675,14 10,14 C13.8659932,14 17,13.1045695 17,12 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                                                            <path d="M17,6 L17,10 C17,11.1045695 13.8659932,12 10,12 C6.13400675,12 3,11.1045695 3,10 L3,6 C3,7.1045695 6.13400675,8 10,8 C13.8659932,8 17,7.1045695 17,6 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </i>
                                <i style={{display:'block',color:'#FFF',verticalAlign: 'top',textAlign: 'center',fontStyle: 'normal',fontSize:'13px'}}>存储</i>
                            </li>
                            <li  onClick={()=>this.setPage("fx")} style={{height:'65px',width:'80px',padding:'10px',backgroundColor:this.menuKey==="fx"?'#1f2131':'#333650'}}>
                                <i>
                                    <svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1">
                                        <title>移动统计</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs></defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Desktop-HD" transform="translate(-21.000000, -322.000000)">
                                                <g id="Group" transform="translate(0.000000, 60.000000)">
                                                    <g id="文件存储" transform="translate(0.000000, 240.000000)">
                                                        <g id="移动统计" transform="translate(20.000000, 20.000000)">
                                                            <rect id="Rectangle-5" fill="#FFFFFF" x="1" y="12" width="4" height="6" rx="1"></rect>
                                                            <rect id="Rectangle-5" fill="#2EA5FF" x="8" y="2" width="4" height="16" rx="1"></rect>
                                                            <rect id="Rectangle-5" fill="#FFFFFF" x="15" y="9" width="4" height="9" rx="1"></rect>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </i>
                                <i style={{display:'block',color:'#FFF',verticalAlign: 'top',textAlign: 'center',fontStyle: 'normal',fontSize:'13px'}}>分析</i>
                            </li>
                            <li  onClick={()=>this.setPage("zj")} style={{height:'65px',width:'80px',padding:'10px',backgroundColor:this.menuKey==="zj"?'#1f2131':'#333650'}}>
                                <i>
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                                        <title>移动统计</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs></defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Desktop-HD" transform="translate(-22.000000, -262.000000)">
                                                <g id="Group" transform="translate(0.000000, 60.000000)">
                                                    <g id="文件存储" transform="translate(20.000000, 200.000000)">
                                                        <g id="移动统计">
                                                            <path d="M7,8 L7,3.00087166 C7,2.44463086 6.55275191,2 6.00104344,2 L4.99895656,2 C4.44266033,2 4,2.4481055 4,3.00087166 L4,8 L7,8 Z M7,16 L7,16.9991283 C7,17.5518945 6.55733967,18 6.00104344,18 L4.99895656,18 C4.44724809,18 4,17.5553691 4,16.9991283 L4,16 L7,16 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                                                            <rect id="Rectangle-7" fill="#23A8FF" x="2" y="10" width="7" height="4" rx="1"></rect>
                                                            <path d="M16,5 L16,3.00087166 C16,2.44463086 15.5527519,2 15.0010434,2 L13.9989566,2 C13.4426603,2 13,2.4481055 13,3.00087166 L13,5 L16,5 Z M16,13 L16,16.9991283 C16,17.5518945 15.5573397,18 15.0010434,18 L13.9989566,18 C13.4472481,18 13,17.5553691 13,16.9991283 L13,13 L16,13 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                                                            <rect id="Rectangle-7" fill="#23A8FF" x="11" y="7" width="7" height="4" rx="1"></rect>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </i>
                                <i style={{display:'block',color:'#FFF',verticalAlign: 'top',textAlign: 'center',fontStyle: 'normal',fontSize:'13px'}}>组件</i>
                            </li>
                            <li  onClick={()=>this.setPage("sz")} style={{height:'65px',width:'80px',padding:'10px',backgroundColor:this.menuKey==="sz"?'#1f2131':'#333650'}}>
                                <i>
                                    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
                                        <title>消息推送</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs></defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Desktop-HD" transform="translate(-21.000000, -381.000000)">
                                                <g id="Group" transform="translate(0.000000, 60.000000)">
                                                    <g id="文件存储" transform="translate(0.000000, 300.000000)">
                                                        <g id="消息推送" transform="translate(20.000000, 20.000000)">
                                                            <circle id="Oval-15" stroke="#FFFFFF" stroke-width="2" cx="10" cy="10" r="6"></circle>
                                                            <path d="M5.10925208,6.52346564 L3.29289322,4.70710678 C2.90236893,4.31658249 2.90236893,3.68341751 3.29289322,3.29289322 C3.68341751,2.90236893 4.31658249,2.90236893 4.70710678,3.29289322 L6.52346564,5.10925208 C5.9769451,5.4984405 5.4984405,5.9769451 5.10925208,6.52346564 Z M14.8907479,6.52346564 L16.7071068,4.70710678 C17.0976311,4.31658249 17.0976311,3.68341751 16.7071068,3.29289322 C16.3165825,2.90236893 15.6834175,2.90236893 15.2928932,3.29289322 L13.4765344,5.10925208 C14.0230549,5.4984405 14.5015595,5.9769451 14.8907479,6.52346564 Z M5.10925208,13.4765344 L3.29289322,15.2928932 C2.90236893,15.6834175 2.90236893,16.3165825 3.29289322,16.7071068 C3.68341751,17.0976311 4.31658249,17.0976311 4.70710678,16.7071068 L6.52346564,14.8907479 C5.9769451,14.5015595 5.4984405,14.0230549 5.10925208,13.4765344 Z M14.8907479,13.4765344 L16.7071068,15.2928932 C17.0976311,15.6834175 17.0976311,16.3165825 16.7071068,16.7071068 C16.3165825,17.0976311 15.6834175,17.0976311 15.2928932,16.7071068 L13.4765344,14.8907479 C14.0230549,14.5015595 14.5015595,14.0230549 14.8907479,13.4765344 Z" id="Combined-Shape" fill="#FFFFFF"></path>
                                                            <rect id="Rectangle-8" fill="#FFFFFF" x="9" y="1" width="2" height="3" rx="1"></rect>
                                                            <rect id="Rectangle-8" fill="#FFFFFF" transform="translate(10.000000, 17.500000) scale(1, -1) translate(-10.000000, -17.500000) " x="9" y="16" width="2" height="3" rx="1"></rect>
                                                            <rect id="Rectangle-8" fill="#FFFFFF" transform="translate(17.500000, 10.000000) scale(1, -1) rotate(90.000000) translate(-17.500000, -10.000000) " x="16.5" y="8.5" width="2" height="3" rx="1"></rect>
                                                            <rect id="Rectangle-8" fill="#FFFFFF" transform="translate(2.500000, 10.000000) scale(-1, -1) rotate(90.000000) translate(-2.500000, -10.000000) " x="1.5" y="8.5" width="2" height="3" rx="1"></rect>
                                                            <circle id="Oval-2" fill="#29A7FF" cx="10" cy="10" r="2"></circle>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </i>
                                <i style={{display:'block',color:'#FFF',verticalAlign: 'top',textAlign: 'center',fontStyle: 'normal',fontSize:'13px'}}>设置</i>
                            </li>

                        </ul>
                    </div>

                    <div class="op-content pull-left">
                        {
                            function () {
                                switch (page.menuKey){
                                    case "gl":
                                        return <gl></gl>
                                    case "jk":
                                        return <jk></jk>
                                    case "cc":
                                        return <cc></cc>
                                    case "fx":
                                        return <fx></fx>
                                    case "zj":
                                        return <zj></zj>
                                    case "sz":
                                        return <sz></sz>
                                }
                                //return h(page.menuKey)
                            }()
                        }
                    </div>
                </div>
            </div>
    )
    },
    data:{
        message:"hello",
        menuKey:"gl",
        menu:menu
    },
    methods:{
        setPage:function (page) {
            this.menuKey=page
        }
    },
    components:{
        'gl': gl,
        'jk': jk,
        'cc': cc,
        'fx': fx,
        'zj': zj,
        'sz': sz,
    }

})