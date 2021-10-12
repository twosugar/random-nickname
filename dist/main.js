/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock */ \"./src/mock.js\");\n\nclass RandomNickname {\n    constructor(options = {}) {\n        this.describeList = _mock__WEBPACK_IMPORTED_MODULE_0__.describeList\n        this.nounList = _mock__WEBPACK_IMPORTED_MODULE_0__.nounList\n        if (options.describeList) {\n            this.describeList = options.describeList\n        }\n\n        if (options.nounList) {\n            this.nounList = options.nounList\n        }\n    }\n\n    getRandomName() {\n        const describeIndex = Math.floor(Math.random() * this.describeList.length)\n        const dnounIndex = Math.floor(Math.random() * this.nounList.length)\n        return this.describeList[describeIndex] + this.nounList[dnounIndex]\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomNickname);\n\n//# sourceURL=webpack://@sugarfish/random-nickname/./src/index.js?");

/***/ }),

/***/ "./src/mock.js":
/*!*********************!*\
  !*** ./src/mock.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"describeList\": () => (/* binding */ describeList),\n/* harmony export */   \"nounList\": () => (/* binding */ nounList)\n/* harmony export */ });\n/*\n * @Description: \n * @Author: ytang5\n * @Date: 2021-10-11 19:52:42\n * @LastEditors: ytang5\n * @FilePath: /random-nickname/src/mock.js\n * @LastEditTime: 2021-10-11 19:55:11\n */\n/**\n * @description: 形容词字典\n */\nconst describeList = [\n    \"快乐的\",\n    \"冷静的\",\n    \"醉熏的\",\n    \"潇洒的\",\n    \"糊涂的\",\n    \"积极的\",\n    \"冷酷的\",\n    \"深情的\",\n    \"粗暴的\",\n    \"温柔的\",\n    \"可爱的\",\n    \"愉快的\",\n    \"义气的\",\n    \"认真的\",\n    \"威武的\",\n    \"帅气的\",\n    \"传统的\",\n    \"潇洒的\",\n    \"漂亮的\",\n    \"自然的\",\n    \"专一的\",\n    \"听话的\",\n    \"昏睡的\",\n    \"狂野的\",\n    \"等待的\",\n    \"搞怪的\",\n    \"幽默的\",\n    \"魁梧的\",\n    \"活泼的\",\n    \"开心的\",\n    \"高兴的\",\n    \"超帅的\",\n    \"留胡子的\",\n    \"坦率的\",\n    \"直率的\",\n    \"轻松的\",\n    \"痴情的\",\n    \"完美的\",\n    \"精明的\",\n    \"无聊的\",\n    \"有魅力的\",\n    \"丰富的\",\n    \"繁荣的\",\n    \"饱满的\",\n    \"炙热的\",\n    \"暴躁的\",\n    \"碧蓝的\",\n    \"俊逸的\",\n    \"英勇的\",\n    \"健忘的\",\n    \"故意的\",\n    \"无心的\",\n    \"土豪的\",\n    \"朴实的\",\n    \"兴奋的\",\n    \"幸福的\",\n    \"淡定的\",\n    \"不安的\",\n    \"阔达的\",\n    \"孤独的\",\n    \"独特的\",\n    \"疯狂的\",\n    \"时尚的\",\n    \"落后的\",\n    \"风趣的\",\n    \"忧伤的\",\n    \"大胆的\",\n    \"爱笑的\",\n    \"矮小的\",\n    \"健康的\",\n    \"合适的\",\n    \"玩命的\",\n    \"沉默的\",\n    \"斯文的\",\n    \"香蕉\",\n    \"苹果\",\n    \"鲤鱼\",\n    \"鳗鱼\",\n    \"任性的\",\n    \"细心的\",\n    \"粗心的\",\n    \"大意的\",\n    \"甜甜的\",\n    \"酷酷的\",\n    \"健壮的\",\n    \"英俊的\",\n    \"霸气的\",\n    \"阳光的\",\n    \"默默的\",\n    \"大力的\",\n    \"孝顺的\",\n    \"忧虑的\",\n    \"着急的\",\n    \"紧张的\",\n    \"善良的\",\n    \"凶狠的\",\n    \"害怕的\",\n    \"重要的\",\n    \"危机的\",\n    \"欢喜的\",\n    \"欣慰的\",\n    \"满意的\",\n    \"跳跃的\",\n    \"诚心的\",\n    \"称心的\",\n    \"如意的\",\n    \"怡然的\",\n    \"娇气的\",\n    \"无奈的\",\n    \"无语的\",\n    \"激动的\",\n    \"愤怒的\",\n    \"美好的\",\n    \"感动的\",\n    \"激情的\",\n    \"激昂的\",\n    \"震动的\",\n    \"虚拟的\",\n    \"超级的\",\n    \"寒冷的\",\n    \"精明的\",\n    \"明理的\",\n    \"犹豫的\",\n    \"忧郁的\",\n    \"寂寞的\",\n    \"奋斗的\",\n    \"勤奋的\",\n    \"现代的\",\n    \"过时的\",\n    \"稳重的\",\n    \"热情的\",\n    \"含蓄的\",\n    \"开放的\",\n    \"无辜的\",\n    \"多情的\",\n    \"纯真的\",\n    \"拉长的\",\n    \"热心的\",\n    \"从容的\",\n    \"体贴的\",\n    \"风中的\",\n    \"曾经的\",\n    \"追寻的\",\n    \"儒雅的\",\n    \"优雅的\",\n    \"开朗的\",\n    \"外向的\",\n    \"内向的\",\n    \"清爽的\",\n    \"文艺的\",\n    \"长情的\",\n    \"平常的\",\n    \"单身的\",\n    \"伶俐的\",\n    \"高大的\",\n    \"懦弱的\",\n    \"柔弱的\",\n    \"爱笑的\",\n    \"乐观的\",\n    \"耍酷的\",\n    \"酷炫的\",\n    \"神勇的\",\n    \"年轻的\",\n    \"唠叨的\",\n    \"瘦瘦的\",\n    \"无情的\",\n    \"包容的\",\n    \"顺心的\",\n    \"畅快的\",\n    \"舒适的\",\n    \"靓丽的\",\n    \"负责的\",\n    \"背后的\",\n    \"简单的\",\n    \"谦让的\",\n    \"彩色的\",\n    \"缥缈的\",\n    \"欢呼的\",\n    \"生动的\",\n    \"复杂的\",\n    \"慈祥的\",\n    \"仁爱的\",\n    \"魔幻的\",\n    \"虚幻的\",\n    \"淡然的\",\n    \"受伤的\",\n    \"雪白的\",\n    \"高高的\",\n    \"糟糕的\",\n    \"顺利的\",\n    \"闪闪的\",\n    \"羞涩的\",\n    \"缓慢的\",\n    \"迅速的\",\n    \"优秀的\",\n    \"聪明的\",\n    \"含糊的\",\n    \"俏皮的\",\n    \"淡淡的\",\n    \"坚强的\",\n    \"平淡的\",\n    \"欣喜的\",\n    \"能干的\",\n    \"灵巧的\",\n    \"友好的\",\n    \"机智的\",\n    \"机灵的\",\n    \"正直的\",\n    \"谨慎的\",\n    \"俭朴的\",\n    \"殷勤的\",\n    \"虚心的\",\n    \"辛勤的\",\n    \"自觉的\",\n    \"无私的\",\n    \"无限的\",\n    \"踏实的\",\n    \"老实的\",\n    \"现实的\",\n    \"可靠的\",\n    \"务实的\",\n    \"拼搏的\",\n    \"个性的\",\n    \"粗犷的\",\n    \"活力的\",\n    \"成就的\",\n    \"勤劳的\",\n    \"单纯的\",\n    \"落寞的\",\n    \"朴素的\",\n    \"悲凉的\",\n    \"忧心的\",\n    \"洁净的\",\n    \"清秀的\",\n    \"自由的\",\n    \"小巧的\",\n    \"单薄的\",\n    \"贪玩的\",\n    \"刻苦的\",\n    \"干净的\",\n    \"壮观的\",\n    \"和谐的\",\n    \"文静的\",\n    \"调皮的\",\n    \"害羞的\",\n    \"安详的\",\n    \"自信的\",\n    \"端庄的\",\n    \"坚定的\",\n    \"美满的\",\n    \"舒心的\",\n    \"温暖的\",\n    \"专注的\",\n    \"勤恳的\",\n    \"美丽的\",\n    \"腼腆的\",\n    \"优美的\",\n    \"甜美的\",\n    \"甜蜜的\",\n    \"整齐的\",\n    \"动人的\",\n    \"典雅的\",\n    \"尊敬的\",\n    \"舒服的\",\n    \"妩媚的\",\n    \"秀丽的\",\n    \"喜悦的\",\n    \"甜美的\",\n    \"彪壮的\",\n    \"强健的\",\n    \"大方的\",\n    \"俊秀的\",\n    \"聪慧的\",\n    \"迷人的\",\n    \"陶醉的\",\n    \"悦耳的\",\n    \"动听的\",\n    \"明亮的\",\n    \"结实的\",\n    \"魁梧的\",\n    \"标致的\",\n    \"清脆的\",\n    \"敏感的\",\n    \"光亮的\",\n    \"大气的\",\n    \"老迟到的\",\n    \"知性的\",\n    \"冷傲的\",\n    \"呆萌的\",\n    \"野性的\",\n    \"隐形的\",\n    \"笑点低的\",\n    \"微笑的\",\n    \"笨笨的\",\n    \"难过的\",\n    \"沉静的\",\n    \"火星上的\",\n    \"失眠的\",\n    \"安静的\",\n    \"纯情的\",\n    \"要减肥的\",\n    \"迷路的\",\n    \"烂漫的\",\n    \"哭泣的\",\n    \"贤惠的\",\n    \"苗条的\",\n    \"温婉的\",\n    \"发嗲的\",\n    \"会撒娇的\",\n    \"贪玩的\",\n    \"执着的\",\n    \"眯眯眼的\",\n    \"花痴的\",\n    \"想人陪的\",\n    \"眼睛大的\",\n    \"高贵的\",\n    \"傲娇的\",\n    \"心灵美的\",\n    \"爱撒娇的\",\n    \"细腻的\",\n    \"天真的\",\n    \"怕黑的\",\n    \"感性的\",\n    \"飘逸的\",\n    \"怕孤独的\",\n    \"忐忑的\",\n    \"高挑的\",\n    \"傻傻的\",\n    \"冷艳的\",\n    \"爱听歌的\",\n    \"还单身的\",\n    \"怕孤单的\",\n    \"懵懂的\"\n]\n\n/**\n * @description: 名词字典\n */\nconst nounList = [\n    \"嚓茶\",\n      \"凉面\",\n      \"便当\",\n      \"毛豆\",\n      \"花生\",\n      \"可乐\",\n      \"灯泡\",\n      \"哈密瓜\",\n      \"野狼\",\n      \"背包\",\n      \"眼神\",\n      \"缘分\",\n      \"雪碧\",\n      \"人生\",\n      \"牛排\",\n      \"蚂蚁\",\n      \"飞鸟\",\n      \"灰狼\",\n      \"斑马\",\n      \"汉堡\",\n      \"悟空\",\n      \"巨人\",\n      \"绿茶\",\n      \"自行车\",\n      \"保温杯\",\n      \"大碗\",\n      \"墨镜\",\n      \"魔镜\",\n      \"煎饼\",\n      \"月饼\",\n      \"月亮\",\n      \"星星\",\n      \"芝麻\",\n      \"啤酒\",\n      \"玫瑰\",\n      \"大叔\",\n      \"小伙\",\n      \"哈密瓜，数据线\",\n      \"太阳\",\n      \"树叶\",\n      \"芹菜\",\n      \"黄蜂\",\n      \"蜜粉\",\n      \"蜜蜂\",\n      \"信封\",\n      \"西装\",\n      \"外套\",\n      \"裙子\",\n      \"大象\",\n      \"猫咪\",\n      \"母鸡\",\n      \"路灯\",\n      \"蓝天\",\n      \"白云\",\n      \"星月\",\n      \"彩虹\",\n      \"微笑\",\n      \"摩托\",\n      \"板栗\",\n      \"高山\",\n      \"大地\",\n      \"大树\",\n      \"电灯胆\",\n      \"砖头\",\n      \"楼房\",\n      \"水池\",\n      \"鸡翅\",\n      \"蜻蜓\",\n      \"红牛\",\n      \"咖啡\",\n      \"机器猫\",\n      \"枕头\",\n      \"大船\",\n      \"诺言\",\n      \"钢笔\",\n      \"刺猬\",\n      \"天空\",\n      \"飞机\",\n      \"大炮\",\n      \"冬天\",\n      \"洋葱\",\n      \"春天\",\n      \"夏天\",\n      \"秋天\",\n      \"冬日\",\n      \"航空\",\n      \"毛衣\",\n      \"豌豆\",\n      \"黑米\",\n      \"玉米\",\n      \"眼睛\",\n      \"老鼠\",\n      \"白羊\",\n      \"帅哥\",\n      \"美女\",\n      \"季节\",\n      \"鲜花\",\n      \"服饰\",\n      \"裙子\",\n      \"白开水\",\n      \"秀发\",\n      \"大山\",\n      \"火车\",\n      \"汽车\",\n      \"歌曲\",\n      \"舞蹈\",\n      \"老师\",\n      \"导师\",\n      \"方盒\",\n      \"大米\",\n      \"麦片\",\n      \"水杯\",\n      \"水壶\",\n      \"手套\",\n      \"鞋子\",\n      \"自行车\",\n      \"鼠标\",\n      \"手机\",\n      \"电脑\",\n      \"书本\",\n      \"奇迹\",\n      \"身影\",\n      \"香烟\",\n      \"夕阳\",\n      \"台灯\",\n      \"宝贝\",\n      \"未来\",\n      \"皮带\",\n      \"钥匙\",\n      \"心锁\",\n      \"故事\",\n      \"花瓣\",\n      \"滑板\",\n      \"画笔\",\n      \"画板\",\n      \"学姐\",\n      \"店员\",\n      \"电源\",\n      \"饼干\",\n      \"宝马\",\n      \"过客\",\n      \"大白\",\n      \"时光\",\n      \"石头\",\n      \"钻石\",\n      \"河马\",\n      \"犀牛\",\n      \"西牛\",\n      \"绿草\",\n      \"抽屉\",\n      \"柜子\",\n      \"往事\",\n      \"寒风\",\n      \"路人\",\n      \"橘子\",\n      \"耳机\",\n      \"鸵鸟\",\n      \"朋友\",\n      \"苗条\",\n      \"铅笔\",\n      \"钢笔\",\n      \"硬币\",\n      \"热狗\",\n      \"大侠\",\n      \"御姐\",\n      \"萝莉\",\n      \"毛巾\",\n      \"期待\",\n      \"盼望\",\n      \"白昼\",\n      \"黑夜\",\n      \"大门\",\n      \"黑裤\",\n      \"钢铁侠\",\n      \"哑铃\",\n      \"板凳\",\n      \"枫叶\",\n      \"荷花\",\n      \"乌龟\",\n      \"仙人掌\",\n      \"衬衫\",\n      \"大神\",\n      \"草丛\",\n      \"早晨\",\n      \"心情\",\n      \"茉莉\",\n      \"流沙\",\n      \"蜗牛\",\n      \"战斗机\",\n      \"冥王星\",\n      \"猎豹\",\n      \"棒球\",\n      \"篮球\",\n      \"乐曲\",\n      \"电话\",\n      \"网络\",\n      \"世界\",\n      \"中心\",\n      \"鱼\",\n      \"鸡\",\n      \"狗\",\n      \"老虎\",\n      \"鸭子\",\n      \"雨\",\n      \"羽毛\",\n      \"翅膀\",\n      \"外套\",\n      \"火\",\n      \"丝袜\",\n      \"书包\",\n      \"钢笔\",\n      \"冷风\",\n      \"八宝粥\",\n      \"烤鸡\",\n      \"大雁\",\n      \"音响\",\n      \"招牌\",\n      \"胡萝卜\",\n      \"冰棍\",\n      \"帽子\",\n      \"菠萝\",\n      \"蛋挞\",\n      \"香水\",\n      \"泥猴桃\",\n      \"吐司\",\n      \"溪流\",\n      \"黄豆\",\n      \"樱桃\",\n      \"小鸽子\",\n      \"小蝴蝶\",\n      \"爆米花\",\n      \"花卷\",\n      \"小鸭子\",\n      \"小海豚\",\n      \"日记本\",\n      \"小熊猫\",\n      \"小懒猪\",\n      \"小懒虫\",\n      \"荔枝\",\n      \"镜子\",\n      \"曲奇\",\n      \"金针菇\",\n      \"小松鼠\",\n      \"小虾米\",\n      \"酒窝\",\n      \"紫菜\",\n      \"金鱼\",\n      \"柚子\",\n      \"果汁\",\n      \"百褶裙\",\n      \"项链\",\n      \"帆布鞋\",\n      \"火龙果\",\n      \"奇异果\",\n      \"煎蛋\",\n      \"唇彩\",\n      \"小土豆\",\n      \"高跟鞋\",\n      \"戒指\",\n      \"雪糕\",\n      \"睫毛\",\n      \"铃铛\",\n      \"手链\",\n      \"香氛\",\n      \"红酒\",\n      \"月光\",\n      \"酸奶\",\n      \"银耳汤\",\n      \"咖啡豆\",\n      \"小蜜蜂\",\n      \"小蚂蚁\",\n      \"蜡烛\",\n      \"棉花糖\",\n      \"向日葵\",\n      \"水蜜桃\",\n      \"小蝴蝶\",\n      \"小刺猬\",\n      \"小丸子\",\n      \"指甲油\",\n      \"康乃馨\",\n      \"糖豆\",\n      \"薯片\",\n      \"口红\",\n      \"超短裙\",\n      \"乌冬面\",\n      \"冰淇淋\",\n      \"棒棒糖\",\n      \"长颈鹿\",\n      \"豆芽\",\n      \"发箍\",\n      \"发卡\",\n      \"发夹\",\n      \"发带\",\n      \"铃铛\",\n      \"小馒头\",\n      \"小笼包\",\n      \"小甜瓜\",\n      \"冬瓜\",\n      \"香菇\",\n      \"小兔子\",\n      \"含羞草\",\n      \"短靴\",\n      \"睫毛膏\",\n      \"小蘑菇\",\n      \"跳跳糖\",\n      \"小白菜\",\n      \"草莓\",\n      \"柠檬\",\n      \"月饼\",\n      \"百合\",\n      \"纸鹤\",\n      \"小天鹅\",\n      \"云朵\",\n      \"芒果\",\n      \"面包\",\n      \"海燕\",\n      \"小猫咪\",\n      \"龙猫\",\n      \"唇膏\",\n      \"鞋垫\",\n      \"羊\",\n      \"黑猫\",\n      \"白猫\",\n      \"万宝路\",\n      \"金毛\",\n      \"山水\",\n      \"音响\"\n]\n\n//# sourceURL=webpack://@sugarfish/random-nickname/./src/mock.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});