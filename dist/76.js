/*! NutUI v1.2.2 Fri May 11 2018 19:48:33 GMT+0800 (中国标准时间) */
webpackJsonpnutui([76],{1046:function(t,a,s){a=t.exports=s(2)(),a.push([t.i,"",""])},1145:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nut-demoheader",{attrs:{name:t.$route.name}}),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow},on:{"update:visible":function(a){t.maskShow=a}}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow=!0}}},[t._v("基础示例")]),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow2,color:"rgba(255,200,200,.6)"},on:{"update:visible":function(a){t.maskShow2=a}}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow2=!0}}},[t._v("自定义颜色与透明度")]),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow3,closeOnClickModal:!1},on:{"update:visible":function(a){t.maskShow3=a},"open-mask":t.autoClose}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow3=!0}}},[t._v("禁止点击关闭，4秒后自动关闭")]),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow4,fade:!0},on:{"update:visible":function(a){t.maskShow4=a}}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow4=!0}}},[t._v("渐隐渐现")]),t._v(" "),s("nut-mask",{attrs:{visible:t.maskShow5},on:{"update:visible":function(a){t.maskShow5=a},"open-mask":t.maskOpen,"close-mask":t.maskClose}}),t._v(" "),s("a",{staticClass:"button button-primary",attrs:{href:"javascript:;"},on:{click:function(a){t.maskShow5=!0}}},[t._v("事件")])],1)},staticRenderFns:[]}},1238:function(t,a,s){var o=s(1046);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s(3)("0bee77a2",o,!0,{})},804:function(t,a,s){function o(t){s(1238)}var n=s(1)(s(895),s(1145),o,null,null);t.exports=n.exports},895:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{maskShow:!1,maskShow2:!1,maskShow3:!1,maskShow4:!1,maskShow5:!1}},methods:{autoClose:function(){var t=this;setTimeout(function(){t.maskShow3=!1},4e3)},maskOpen:function(){alert("show")},maskClose:function(){alert("hide")}}}}});