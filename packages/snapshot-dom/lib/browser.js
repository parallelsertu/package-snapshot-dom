"use strict";window.snapshotToJSON=function e(t,o={}){const n={};if("object"==typeof t&&null!==t){t.tagName?n.tagName=t.tagName.toLowerCase():t.nodeName&&(n.nodeName=t.nodeName),t.nodeValue&&(n.nodeValue=t.nodeValue);const a=t.attributes;if(a){const e=a.length;if(e>0){const t={};for(let n=0;n<e;n++){const e=a[n];o.skipEmptyValue&&!e.nodeValue||(t[e.nodeName]=e.nodeValue)}n.attributes=t}}const{childNodes:s}=t;if(s){const t=s.length;if(t>0){const a=new Array(t);for(let n=0;n<t;n++)a[n]=e(s[n],o);n.childNodes=a}}}return n};