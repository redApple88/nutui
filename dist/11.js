/*! NutUI v1.2.2 Fri May 11 2018 19:48:33 GMT+0800 (中国标准时间) */
webpackJsonpnutui([11],{1045:function(t,_,v){_=t.exports=v(2)(),_.push([t.i,"",""])},1144:function(t,_){t.exports={render:function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",[v("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"一种无焦点的消息提示框，显示一段时间后会自行消失，多用于主动操作后的反馈提示。",showQrCode:!0}}),t._v(" "),v("h5",[t._v("基本用法")]),t._v(" "),v("h6",[t._v("传入提示内容文字和显示时长两个参数")]),t._v(" "),v("nut-codebox",{attrs:{code:"this.$toast(msg,during);"}}),t._v(" "),v("h6",[t._v("传入一个参数对象（唯一）")]),t._v(" "),v("nut-codebox",{attrs:{code:"this.$toast(object);"}}),t._v(" "),v("h5",[t._v("示例")]),t._v(" "),v("nut-codebox",{attrs:{code:"export default {\n    methods:{\n      showToast(msg,during){\n            this.$toast(msg,during);\n        },\n      showToast2(){\n          //以对象形式传参支持传入一个id，id相同的Toast共享一个实例对象\n          this.$toast({\n              msg:'我传了一个对象，包括id属性值，显示位置不居中，多行文字居左展示',\n              id:'demo',\n              center:false, //Toast位置不居中（默认居中）\n              textAlignCenter:false,//多行文字居左展示（默认居中）\n              fontSize:0.24, //字号单位rem\n              bgColor:'rgba(0,0,0,.6)', //背景颜色\n              bottom:1 //距窗口底部距离（单位rem），不居中展示时有效\n          });\n      },\n      showToast3(){\n          this.$toast({\n              msg:'我传了一个对象，且id值与上一个示例的id值相同，将与上一个示例共享一个实例',\n              id:'demo'\n          });\n      }\n    }\n}",imgUrl:["../asset/img/demo/toast1.png","../asset/img/demo/toast2.png"]}}),t._v(" "),v("h5",[t._v("Options")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"tbl-wrapper"},[v("table",{staticClass:"u-full-width"},[v("thead",[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("可选值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("msg")]),t._v(" "),v("td",[t._v("提示文字")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("during")]),t._v(" "),v("td",[t._v("展示时长（单位毫秒）")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("3000")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("object.msg")]),t._v(" "),v("td",[t._v("提示文字")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("--")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("object.during")]),t._v(" "),v("td",[t._v("展示时长（单位毫秒）")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("3000")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("object.center")]),t._v(" "),v("td",[t._v("Toast位置是否居中")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("object.bottom")]),t._v(" "),v("td",[t._v("Toast距窗口底部距离（单位rem)")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("object.center为false时生效")])]),t._v(" "),v("tr",[v("td",[t._v("object.textAlignCenter")]),t._v(" "),v("td",[t._v("文字折行时是否居中展示，默认居中")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("值为false时居左")])]),t._v(" "),v("tr",[v("td",[t._v("object.fontSize")]),t._v(" "),v("td",[t._v("文字大小（单位rem)")]),t._v(" "),v("td",[t._v("Number")]),t._v(" "),v("td",[t._v("0.28")]),t._v(" "),v("td",[t._v("--")])]),t._v(" "),v("tr",[v("td",[t._v("object.bgColor")]),t._v(" "),v("td",[t._v("背景颜色")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("'rgba(0, 0, 0, 0.7)'")]),t._v(" "),v("td",[t._v("--")])])])])])}]}},1237:function(t,_,v){var e=v(1045);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);v(3)("1dfa9722",e,!0,{})},870:function(t,_,v){function e(t){v(1237)}var n=v(1)(v(964),v(1144),e,null,null);t.exports=n.exports},964:function(t,_,v){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var e=v(20);!function(t){t&&t.__esModule}(e);_.default={data:function(){return{}},components:{},methods:{}}}});