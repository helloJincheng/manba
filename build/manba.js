!function(t,e){var r="function"==typeof define,a="undefined"!=typeof module&&module.exports;r?define(e):a?module.exports=e():this.manba=e()}(0,function(){"use strict";var a={l:"YYYY-MM-DD",ll:"YYYY年MM月DD日",k:"YYYY-MM-DD hh:mm",kk:"YYYY年MM月DD日 hh点mm分",kkk:"YYYY年MM月DD日 hh点mm分 q",f:"YYYY-MM-DD hh:mm:ss",ff:"YYYY年MM月DD日 hh点mm分ss秒",fff:"YYYY年MM月DD日 hh点mm分ss秒 星期w",n:"MM-DD",nn:"MM月DD日"},i=0,o=36e5,s=864e5,e=new Date(1970,0,1,0,0,0).getTime(),n=["日","一","二","三","四","五","六"],u=["上午","下午"];function c(t,e){return d.initmanba(this,t,e),this}c.prototype.format=function(t){var e=this.isValid();if(!0!==e)return e;var r=a[t=t||"l"]||t;return d.format(this._date,r)},c.prototype.UTCformat=function(t){var e=this.isValid();if(!0!==e)return e;var r=a[t=t||"l"]||t;return d.UTCformat(this._date,r)},c.prototype.toString=function(){var t=this.isValid();return!0!==t?t:this._date.toString()},c.prototype.toISOString=function(t){var e=this.isValid();if(!0!==e)return e;var r=0,a=0<=(r=void 0!==t?60*t:-this._date.getTimezoneOffset())?"+":"-";return console.log(d.pad(r/60)),l(this.time()+60*r*1e3).UTCformat("yyyy-MM-ddThh:mm:ss")+a+d.pad(r/60)+":"+d.pad(r%60)},c.prototype.toLocalString=function(){var t=this.isValid();if(!0!==t)return t;var e=-this._date.getTimezoneOffset(),r=0<=e?"+":"-";return this.format("yyyy-MM-ddThh:mm:ss")+r+d.pad(e/60)+":"+d.pad(e%60)},c.prototype.distance=function(t,e,r){var a=this.isValid();if(!0!==a)return a;var n=this;if(e=e||l.DAY,!0!==(a=(t=l(t)).isValid()))return a;switch(e){case l.MINUTE:return Math.floor((n.time()-t.time())/60/1e3);case l.HOUR:return d.getHours(n._date)-d.getHours(t._date);case l.DAY:return d.getDays(n._date)-d.getDays(t._date);case l.WEEK:return(d.getDays(n.startOf(l.WEEK,r)._date)-d.getDays(t.startOf(l.WEEK,r)._date))/7;case l.MONTH:return d.getMonths(n._date)-d.getMonths(t._date);case l.YEAR:return n._date.getYear()-t._date.getYear()}return 0},c.prototype.getWeekOfYear=function(t){t=(t||0)-0,(isNaN(t)||6<t)&&(t=0);this.year();var e=this.startOf(l.YEAR),r=7-e.day()+t,a=(this.startOf(l.DAY).time()-e.time())/864e5+1;return Math.ceil((a-r)/7)+1},c.prototype.getWeekOfMonth=function(t){t=(t||0)-0,(isNaN(t)||6<t)&&(t=0);var e=this.day(),r=this.date();return Math.ceil((r-e-1)/7)+(t<=e?1:0)},c.prototype.isLeapYear=function(){var t=this.isValid();return!0!==t?t:d.isLeapYear(this.year())},c.prototype.isThisYear=function(){var t=this.isValid();return!0!==t?t:d.timestamp(this._date)},c.prototype.isBefore=function(){var t=this.isValid();return!0!==t?t:d.timestamp(this._date)},c.prototype.isAfter=function(){var t=this.isValid();return!0!==t?t:d.timestamp(this._date)},c.prototype.month=function(t){var e=this.isValid();if(!0!==e)return e;return null==t?this._date.getMonth()+1:(t=parseInt(t),t=this._date.setMonth(t-1),this)},c.prototype.add=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=this;switch(t=parseInt(t),e=e||l.DAY){case l.DAY:a.time(a.time()+t*s);break;case l.MONTH:var n=a.date(),i=a.month()+t;a.month(i),a.date()!=n&&(a.add(-1,l.MONTH),a.date(a.endOf(l.MONTH).date()));break;case l.QUARTER:a.month(a.month()+3*t);break;case l.YEAR:a.year(a.year()+t);break;case l.WEEK:a.time(a.time()+6048e5*t);break;case l.HOUR:a.time(a.time()+t*o);break;case l.MINUTE:a.time(a.time()+6e4*t);break;case l.SECOND:a.time(a.time()+1e3*t);break;case l.TIME:a.time(a.time()+t)}return a},c.prototype.clone=function(){return new c(this)},c.prototype.endOf=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=new c(this);return t=t||l.DAY,(a=a.startOf(t,e)).add(1,t),a.add(-1,l.SECOND),a},c.prototype.startOf=function(t,e){var r=this.isValid();if(!0!==r)return r;var a=new c(this);switch(t=t||l.DAY){case l.DAY:a.milliseconds(0),a.seconds(0),a.minutes(0),a.hours(0);break;case l.MONTH:a.date(1),a=a.startOf(l.DAY);break;case l.QUARTER:(a=a.startOf(l.MONTH)).add(-(a.month()-1)%3,l.MONTH);break;case l.WEEK:a=a.startOf(l.DAY);var n=(e=e||l.SUNDAY)==l.SUNDAY?0:1;0==a.day()&&1==n&&(n=-6),a.add(-a.day()+n,l.DAY);break;case l.YEAR:(a=a.startOf(l.DAY)).month(1),a.date(1);break;case l.HOUR:a.time(Math.floor(a.time()/o)*o)}return a},c.prototype.isValid=function(){return!!d.isDate(this._date)||"Invalid Date"};var d={initmanba:function(t,e,r){var a=new Date,n=a;null!=e&&(d.isNumber(e)?a.setTime(e):d.isArray(e)?(d.padMonth(e),a=d.initDateWithArray(e)):d.isDate(e)?a=e:d.isString(e)?a=d.parse(e,r):e instanceof c&&(a=new Date(e.time()))),n===(t._date=a)&&0!=i&&t.add(i,l.TIME)},initDateWithArray:function(t){return 1<t.length?new Date((new(Function.prototype.bind.apply(Date,[0].concat(t)))).setFullYear(t[0])):new Date},pad:function(t,e){e=e||2;var r="0";return(t=String(Math.abs(t)||0)).length>=e?t:(e-=t.length,(r+=r.repeat(e)).slice(0,e)+String(t))},parse:function(u,t){if(d.isString(t)){var c={Y:0,M:1,D:0,H:0,m:0,S:0};return t.replace(/([^YyMDdHhmsS]*?)(([YyMDdHhmsS])\3*)([^YyMDdHhmsS]*?)/g,function(t,e,r,a,n,i,o){var s=parseInt(u.substr(i+e.length,r.length),10);return"m"==a.toLowerCase()?c[a]=s:c[a.toUpperCase()]=s,""}),c.M--,e=d.initDateWithArray([c.Y,c.M,c.D,c.H,c.m,c.S])}var e,r=/^(\d{4,})\-(\d{2})\-(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i.exec(u);if(null!==r)return r.shift(),d.padMonth(r),d.popUndefined(r),d.initDateWithArray(r);if("Invalid Date"==(e=new Date(u)))throw new Error("Invalid date parse from "+u);return e},popUndefined:function(t){return 0<t.length&&null==t[t.length-1]?(t.pop(),d.popUndefined(t)):t},padMonth:function(t){1<t.length&&0<t[1]&&(t[1]-=1)},isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},format:function(t,e){var r=e;return r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/yyyy|YYYY/,this.pad(t.getFullYear(),4))).replace(/yy|YY/,8<t.getFullYear()%100?(t.getFullYear()%100).toString():"0"+t.getFullYear()%100)).replace(/MM/,8<t.getMonth()?(t.getMonth()+1).toString():"0"+(t.getMonth()+1))).replace(/M/g,t.getMonth()+1)).replace(/w|W/g,n[t.getDay()])).replace(/dd|DD/,this.pad(t.getDate()))).replace(/d|D/g,t.getDate())).replace(/hh|HH/,this.pad(t.getHours()))).replace(/h|H/g,t.getHours())).replace(/mm/,this.pad(t.getMinutes()))).replace(/m/g,t.getMinutes())).replace(/ss|SS/,this.pad(t.getSeconds()))).replace(/s|S/g,t.getSeconds())).replace(/q|Q/g,12<t.getHours()?u[1]:u[0])},UTCformat:function(t,e){var r=e;return r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/yyyy|YYYY/,this.pad(t.getFullYear(),4))).replace(/yy|YY/,8<t.getUTCFullYear()%100?(t.getUTCFullYear()%100).toString():"0"+t.getUTCFullYear()%100)).replace(/MM/,8<t.getUTCMonth()?(t.getUTCMonth()+1).toString():"0"+(t.getUTCMonth()+1))).replace(/M/g,t.getUTCMonth()+1)).replace(/w|W/g,n[t.getUTCDay()])).replace(/dd|DD/,this.pad(t.getUTCDate()))).replace(/d|D/g,t.getUTCDate())).replace(/hh|HH/,this.pad(t.getUTCHours()))).replace(/h|H/g,t.getUTCHours())).replace(/mm/,this.pad(t.getUTCMinutes()))).replace(/m/g,t.getUTCMinutes())).replace(/ss|SS/,this.pad(t.getUTCSeconds()))).replace(/s|S/g,t.getUTCSeconds())).replace(/q|Q/g,12<t.getUTCHours()?u[1]:u[0])},timestamp:function(t){return Math.floor(t.getTime()/1e3)},getDays:function(t){return Math.floor((t.getTime()-e)/s)},getHours:function(t){return Math.floor((t.getTime()-e)/o)},getMonths:function(t){return 12*t.getYear()+t.getMonth()+1},isObject:function(t){return"[object Object]"===Object.prototype.toString.call(t)},isArray:function(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)},isDate:function(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)},isNumber:function(t){return t instanceof Number||"[object Number]"===Object.prototype.toString.call(t)},isString:function(t){return t instanceof String||"[object String]"===Object.prototype.toString.call(t)},extend:function(t,e){for(var r in e)p(e,r)&&(t[r]=e[r]);return p(e,"toString")&&(t.toString=e.toString),p(e,"valueOf")&&(t.valueOf=e.valueOf),t},makeGetSet:function(e){return function(t){return null!=t?(Date.prototype["set"+e].call(this._date,t),this):Date.prototype["get"+e].call(this._date)}}};function p(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var t=c.prototype,r={year:"FullYear",day:"Day",date:"Date",hours:"Hours",milliseconds:"Milliseconds",seconds:"Seconds",minutes:"Minutes",time:"Time"};for(var h in r)t[h]=d.makeGetSet(r[h]);var l=function(t,e){return t instanceof c?new c(t):d.isObject(t)?(t.formatString&&d.isObject(t.formatString)&&d.extend(a,t.formatString),void(t.now&&(i=l(t.now).time()-l().time()))):new c(t,e)};return l.config=function(t){t.formatString&&d.isObject(t.formatString)&&d.extend(a,t.formatString),t.now&&(i=l(t.now).time()-l().time())},l.SECOND="SECOND",l.MINUTE="MINUTE",l.HOUR="HOUR",l.DAY="DAY",l.MONTH="MONTH",l.YEAR="YEAR",l.WEEK="WEEK",l.TIME="TIME",l.QUARTER="QUARTER",l.MONDAY=1,l.TUESDAY=2,l.WEDNESDAY=3,l.THURSDAY=4,l.FRIDAY=5,l.SATURDAY=6,l.SUNDAY=7,l});