"use strict";window.snapshotSortAttributes=function t(r,i){if(Array.isArray(i)&&(Array.isArray(r.childNodes)&&(r.childNodes=r.childNodes.map(r=>t(r,i))),r&&r.attributes))for(const t in r.attributes)i.includes(t)&&(r.attributes[t]="string"==typeof(s=r.attributes[t])?s.trim().replace(/[\s]+/g," ").split(" ").sort().join(" "):s);var s;return r};