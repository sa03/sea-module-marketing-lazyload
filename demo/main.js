define(function (require, exports, module) {
    var $ = require('marketing/zepto/1.0.0/zepto');
    require('marketing/lazyload/1.8.4/lazyload');

    $("img").lazyload();
});