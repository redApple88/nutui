/*! NutUI v1.2.2 Fri May 11 2018 19:48:33 GMT+0800 (中国标准时间) */
webpackJsonpnutui([50],{1031:function(t,e,v){e=t.exports=v(2)(),e.push([t.i,"",""])},1130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",[v("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"返回页面顶部的快捷按钮。",showQrCode:!0}}),t._v(" "),v("h5",[t._v("示例")]),t._v(" "),v("nut-codebox",{attrs:{code:t.demo1,imgUrl:"../asset/img/demo/backtop.png"}}),t._v(" "),v("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"tbl-wrapper"},[v("table",{staticClass:"u-full-width"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("可选值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("bottom")]),t._v(" "),v("td",[t._v("距离窗口底部的距离（单位rem）")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("0.8")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("right")]),t._v(" "),v("td",[t._v("距离窗口右侧的距离（单位rem）")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("0.8")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("screenNum")]),t._v(" "),v("td",{attrs:{width:"30%"}},[t._v("出现该按钮时的滚动距离相对窗口高度的比例。比如，0.5为页面滚动到窗口高度的一半时出现返回按钮。")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("0.5")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("arrowColor")]),t._v(" "),v("td",[t._v("箭头颜色")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("'#000000'")]),t._v(" "),v("td",[t._v("--")])])])])])}]}},1223:function(t,e,v){var _=v(1031);"string"==typeof _&&(_=[[t.i,_,""]]),_.locals&&(t.exports=_.locals);v(3)("6ef67950",_,!0,{})},830:function(t,e,v){function _(t){v(1223)}var r=v(1)(v(921),v(1130),_,null,null);t.exports=r.exports},921:function(t,e,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<nut-gotop \n:bottom="0.8" \n:right="0.3" \n:screenNum="0.5"\n></nut-gotop>'}},methods:{}}}});