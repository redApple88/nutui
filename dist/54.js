/*! NutUI v1.2.2 Fri May 11 2018 19:48:33 GMT+0800 (中国标准时间) */
webpackJsonpnutui([54],{1019:function(e,r,t){r=e.exports=t(2)(),r.push([e.i,"#previewBox{width:100%}#previewBox img{max-width:60%}",""])},1118:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),t("div",{attrs:{id:"previewBox"},domProps:{innerHTML:e._s(e.preview)}}),e._v(" "),t("div",{attrs:{id:"progressBox"}},[e._v(e._s(e.progress))]),e._v(" "),t("nut-uploader",{attrs:{url:"",preview:!0},on:{start:e.uploadStart,progress:e.uploadProgress,success:e.uploadSuccess,failure:e.uploadFailure,preview:e.uploadPreview,showMsg:e.errTip}})],1)},staticRenderFns:[]}},1211:function(e,r,t){var o=t(1019);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(3)("4e05d0bb",o,!0,{})},826:function(e,r,t){function o(e){t(1211)}var s=t(1)(t(917),t(1118),o,null,null);e.exports=s.exports},917:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={data:function(){return{demo:'<nut-uploader url="" :preview="true" @start="uploadStart" @progress="uploadProgress"\n @success="uploadSuccess" @failure="uploadFailure" @preview="uploadPreview"></nut-uploader>',preview:"",progress:""}},methods:{uploadStart:function(){console.log("start")},uploadProgress:function(e,r,t){this.progress="上传进度："+r/t*100+"%"},uploadPreview:function(e){this.preview='本地预览图：<img src="'+e+'" alt=""/>'},uploadSuccess:function(e,r){alert("上传成功！")},uploadFailure:function(e,r){alert("上传失败！")},errTip:function(e){alert(e)}}}}});