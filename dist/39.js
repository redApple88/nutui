/*! NutUI v1.2.2 Fri May 11 2018 19:48:33 GMT+0800 (中国标准时间) */
webpackJsonpnutui([39],{1052:function(t,e,a){e=t.exports=a(2)(),e.push([t.i,"",""])},1151:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"日期时间格式化组件，用于将时间戳或者已格式化的时间字符串转换成指定格式。",showQrCode:!0}}),t._v(" "),a("h5",[t._v("示例")]),t._v(" "),a("div",[a("nut-formatdatetime",{attrs:{datetime:1280977330748,dateformat:"yyyy-mm-dd hh:ii:ss"}})],1),t._v(" "),a("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),a("br"),t._v(" "),a("div",[a("nut-formatdatetime",{attrs:{datetime:"2015-02-18 15:23:48",dateformat:"mm/dd/yyyy hh:ii:ss"}})],1),t._v(" "),a("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),a("br"),t._v(" "),a("div",[a("nut-formatdatetime",{attrs:{datetime:"1280977330748",dateformat:"yyyy-mm-dd"}})],1),t._v(" "),a("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),a("br"),t._v(" "),a("div",[a("nut-formatdatetime",{attrs:{datetime:"1280977330748",dateformat:"hh:ii"}})],1),t._v(" "),a("nut-codebox",{attrs:{code:t.demo4}}),t._v(" "),a("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tbl-wrapper"},[a("table",{staticClass:"u-full-width"},[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("datetime")]),t._v(" "),a("td",[t._v("原始时间")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("--")])]),t._v(" "),a("tr",[a("td",[t._v("dateformat")]),t._v(" "),a("td",[t._v("输出格式")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("--")])])])])])}]}},1244:function(t,e,a){var d=a(1052);"string"==typeof d&&(d=[[t.i,d,""]]),d.locals&&(t.exports=d.locals);a(3)("72d18545",d,!0,{})},841:function(t,e,a){function d(t){a(1244)}var n=a(1)(a(932),a(1151),d,null,null);t.exports=n.exports},932:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var d=a(20);!function(t){t&&t.__esModule}(d);e.default={data:function(){return{demo1:'<nut-formatdatetime \n:datetime="1280977330748" \ndateformat="yyyy-mm-dd hh:ii:ss"\n></nut-formatdatetime>',demo2:'<nut-formatdatetime \ndatetime="2015-02-18 15:23:48" \ndateformat="mm/dd/yyyy hh:ii:ss"\n></nut-formatdatetime>',demo3:'<nut-formatdatetime \ndatetime="1280977330748" \ndateformat="yyyy-mm-dd"\n></nut-formatdatetime>',demo4:'<nut-formatdatetime \ndatetime="1280977330748" \ndateformat="hh:ii"\n></nut-formatdatetime>'}}}}});