webpackJsonp([128,188],{402:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","datePicker\u62bd\u50cf\u51fa\u6765\u7684\u65e5\u5386\u7ec4\u4ef6\uff0c\u76ee\u524d\u53ea\u6709\u4e00\u79cd\u6837\u5f0f"]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Calendar/demo/basic.md",id:"src-components-Calendar-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>calendar</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2017-02-25<span class="token punctuation">"</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>yyyyMMdd<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>calendar</span><span class="token punctuation">></span></span>'}],preview:'<calendar value="2017-02-25" format="yyyyMMdd" @change="onChange"></calendar>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    calendar: atui.Calendar\n  },\n  methods: {\n    onChange (dateStr, date) {\n      console.log(arguments)\n    }\n  }\n})"}}});