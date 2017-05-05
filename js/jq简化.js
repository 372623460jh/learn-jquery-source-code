/**
 * Created by Et on 2017/4/16.
 */


/**
 * 自执行函数独立出一块新的块作用域。
 * window：之所以要传入window对象是因为可以提升块作用域链中window的优先级，以及使在块作用域中window变量可以被混淆;
 * undefined：防止在顶层作用域中undefined被重定义;
 *
 * 需要实现的功能
 * $('#div') ...等复杂选择器
 * $('<div></div>') 创建一个jquery对象 对象是一个伪数组对象
 *
 *
 */
(function (global, undefined) {

    'use strict';
    /**
     * Et对象的构造函数
     */
    var Et = function () {
        /**
         * init才是Et的实际构造方法
         * 无论执行Et(),new Et()都是返回Et对象
         */
        return new Et.fn.init();
    };

    /**
     * Et的原型对象
     * 这样写可以让Et看起来更像一个完整的对象（其实init才是真实的构造方法）
     */
    Et.fn = Et.prototype = {


        /**
         * Et的初始化话方法，Et对象的实际构造方法
         */
        init: function () {
            this.ss = 11;
            console.log(this);
        },

        test: function () {
            this.sm=2;
            console.log(this);
        }

    };

    Et.fn.init.prototype = Et.fn;

    //将Et对象绑定到window上
    global.Et = Et;

})(global);


Et().test();