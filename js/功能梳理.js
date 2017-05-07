/**
 * jquery的结构功能梳理
 */
var jquery = {
    "闭包外部作用域": {
        "闭包外部作用域属性（闭包的私有属性）": {
            'rootjQuery': 'document的jquery对象(jquery对象其实就是一个维数组)',
            'readyList': '',
            'core_strundefined': '用来判断typeof undefined的兼容性的标志位',
            'location': 'window.location',
            'document': 'window.document',
            'docElem': 'document.documentElement',
            '_jQuery': 'window.jQuery用来看初始化的时候window对象中是否有jquery对象',
            '_$': 'window.$用来看初始化的时候window对象中是否有$对象',
            'class2type': '定义一个空的对象字面量，用来给jq查找数据类型，并且给框架中调用Object的静态方法',
            'core_deletedIds': '一个空数组，相当于Array用来调用Array中的静态方法',
            'core_version': "jquery的版本号",
            'core_concat': "数组中的concat静态方法",
            'core_push': "数组中的push静态方法",
            'core_slice': "数组中的slice静态方法",
            'core_indexOf': "数组中的indexOf静态方法",
            'core_toString': "Object的toString静态方法",
            'core_hasOwn': "Object的hasOwnProperty静态方法(验证该对象中是否有某属性或者方法)",
            'core_trim': "String的trim静态方法（去除String两端的空格）",
            'core_pnum ': "正则表达式的字符串形式（/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source）",
            'core_rnotwhite ': "全局匹配所有非空格出现1次或多次（/\S+/g）",
            'rquickExpr ': "正则表达式匹配类似<div>www,#www,/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/",
            'rsingleTag ': "匹配<div>,<div></div>,<br/>",
            'rmsPrefix ': "/^-ms-/用来匹配以-ms-开头的串只在camelCase中用到过",
            'rdashAlpha ': "/-([\da-z])/gi只在camelCase方法中用来转换为驼峰法命名",
            "rhtml": "匹配<或者类似&nbsp;之类的字串",
            "rtagName": "匹配<后出现1次或多次的[a-zA-Z0-9_:]",
            "wrapMap": "",
            "rxhtmlTag": "匹配不是area br col embed hr img input link meta param 这些元素但是写成了<div/>这种形式"
        },
        "闭包外部作用域方法（闭包的私有方法）": {
            "isArraylike": "判断传入的是不是一个伪数组或数组或有length属性的dom元素",
            "fcamelCase":"只在camelCase方法中用来转换为驼峰法命名",
            "completed":"",
        },
    },
    "jQuery（闭包jQuery的构造方法)": {
        "jQuery.fn =jQuery.prototype.init.prototype= jQuery.prototype =": {
            "属性": {
                "jquery": "jQuery的版本号",
                "selector": "",
                "length": "jQuery这个伪数组的length属性，用于记录jQuery中有几个dom对象",
            },
            "方法": {
                "constructor": "jQuery的构造方法",
                "init": "初始化方法（根据入参返回一个jQuery对象）第一个参数是选择标识（1是空返回空的jquery对象，2是string，3是function，4是dom对象，5是其他），第二个参数是上下文对象，第三个参数是跟节点jQuery对象,init的prototype指向闭包jquery的prototype",
                "toArray": "利用闭包的私有属性core_slice将jquery对象自身转换为一个数组（伪数组转为数组）",
                "get": "返回document对象，如果不传参返回document数组,如果传递正数返回对应伪数组中的dom对象如果是负数就倒数",
                "pushStack": "先将传给jQuery对象拷贝一遍，将它的调用者指向prevObject属性，并将调用者的context属性赋值给新拷贝的jq对象，返回新拷贝的jq对象（A.pushStack(B) ==> copy(B).prevObject = A , copy(B).context = A.context 通过prevObject形成了一个栈式的链式结构）",
                "each": "调用jq的静态方法each来遍历this",
                "ready": "",
                "slice": "截取调用者（jq对象），并把调用者压入截取后新对象并返回",
                "first": "返回调用者jq对象中第一个值（转为数组并把调用者压入栈中）",
                "last": "返回调用者jq对象中最后一个值（转为数组并把调用者压入栈中）",
                "eq": "根据入参返回调用者jq对象中对应的值（转为数组并把调用者压入栈中）",
                "map": "",
                "end": "出栈，返回prevObject如果无返回一个空的jq对象",
                "push": "等于数组的push方法",
                "splice": "等于数组的splice方法",
                "sort": "等于数组的sort方法(把数组进行排序)",
                "extend": "将1个或者多个对象深拷或者浅拷到另一个对象中",
            },
        },
    },
    "闭包jQuery的静态方法": {
        "each": "来遍历传入obj这个伪数组（数组或带length属性的dom元素）",
        "extend": "将1个或者多个对象深拷或者浅拷到另一个对象中",
    },
    "使用jQuery静态方法extend浅拷贝(拷贝后的就相当于闭包jQuery的静态属性和方法)": {
        "属性": {
            "expando": "生成一个jQuery+版本号+随机数去掉非数字的字串",
            "isReady": "",
            "readyWait": "",
        },
        "方法": {
            "isArray": "使用Array.isArray方法判断入参是不是一个数组",
            "noConflict": "使用该方法来释放$或者jQuery的使用权给初始化时_$或_jQuery中的对象"
            "holdReady": "",
            "ready": {
                "promise静态方法": "",
            },
            "isPlainObject": "判断指定参数是否是一个纯粹的对象",
            "isWindow": "通过window.window来判断该对象是不是window对象，window对象中的window属性就是指向自身",
            "isFunction": "利用type方法判断入参是不是一个function",
            "isNumeric": "检测入参是不是一个不无穷大的数",
            "type": "返回传入参数的类型null的话返回String(null),typeof无法分辨的复杂数据类型function和object类型使用{}.toString.call(入参)来返回，其他简单数据类型返回typeof",
            "merge": "将A,B 2个伪数组合并成到A中并返回A（如果A是数组返回的就是数组，如果A是伪数组返回的就是伪数组），把数组转为伪数组（有无length属性的都能合并，只要是以0,1,2,3...为键值。）",
            "isEmptyObject": "判断是不是一个空对象",
            "error": "抛错的方法",
            "parseHTML": "解析传入的html字串返回一个根据html字串解析后的dom数组",
            "parseJSON": "使用JSON.parse方法将json串转换为一个js对象",
            "parseXML": "",
            "noop": "一个空方法",
            "trim": "利用string的trim方法来去除字符串的首尾空格",
            "globalEval": "执行一个js代码段如果代码段中包含use strict就在全局中执行该代码，如果不包含就在就是用eval在局部中执行该代码",
            "nodeName": "该方法用于检测传入的dom节点名字是不是name",
            "camelCase": "将入参中的-ms-开头的替换为ms-，再将-([\da-z])的$0转化为大写字母，该方法的作用是使-ms-开头的使用驼峰法来命名",

        },
    }
}