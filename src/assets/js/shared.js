/*!
 * ScriptName: shared.js
 *
 */

/*!
 * WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT
 */

!(function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),(a.WOW=c.exports)}})(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function");}
function d(a,b){return b.indexOf(a)>=0}
function e(a,b){for(var c in b)
if(null==a[c]){var d=b[c];a[c]=d}
return a}
function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}
function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?((e=document.createEvent("CustomEvent")),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?((e=document.createEventObject()),(e.eventType=a)):(e.eventName=a),e}
function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}
function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):(a[b]=c)}
function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}
function k(){return"innerHeight" in window?window.innerHeight:document.documentElement.clientHeight}
Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=(function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];(d.enumerable=d.enumerable||!1),(d.configurable=!0),"value" in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}
return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}})(),o=window.WeakMap||window.MozWeakMap||(function(){function a(){c(this,a),(this.keys=[]),(this.values=[])}
return(n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}},},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return(this.values[c]=b),this}
return this.keys.push(a),this.values.push(b),this},},]),a)})(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||((m=l=(function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}
return n(a,[{key:"observe",value:function(){}}]),a})()),(l.notSupported=!0),m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null},}},r=(function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),(this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0}),(this.animate=(function(){return"requestAnimationFrame" in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}})()),(this.vendors=["moz","webkit"]),(this.start=this.start.bind(this)),(this.resetAnimation=this.resetAnimation.bind(this)),(this.scrollHandler=this.scrollHandler.bind(this)),(this.scrollCallback=this.scrollCallback.bind(this)),(this.scrolled=!0),(this.config=e(b,this.defaults)),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),(this.animationNameCache=new o()),(this.wowEvent=g(this.config.boxClass))}
return(n(a,[{key:"init",value:function(){(this.element=window.document.documentElement),d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),(this.finished=[])},},{key:"start",value:function(){var a=this;if(((this.stopped=!1),(this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass))),(this.all=this.boxes.slice(0)),this.boxes.length))
if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}
if((this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),(this.interval=setInterval(this.scrollCallback,50))),this.config.live)){var d=new p(function(b){for(var c=0;c<b.length;c++)
for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}},},{key:"stop",value:function(){(this.stopped=!0),j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)},},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)},},{key:"doSync",value:function(a){if((("undefined"!=typeof a&&null!==a)||(a=this.element),1===a.nodeType)){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),(this.scrolled=!0))}}},},{key:"show",value:function(a){return this.applyStyle(a),(a.className=a.className+" "+this.config.animateClass),null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a},},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})},},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}},},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}},},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),(a.style.visibility=b?"hidden":"visible"),c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},},{key:"vendorSet",value:function(a,b){for(var c in b)
if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}},},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}
return d},},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}
return"none"===b?"":b},},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))},},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)},},{key:"scrollHandler",value:function(){this.scrolled=!0},},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}
a.push(c)}}(this.boxes=a),this.boxes.length||this.config.live||this.stop()}},},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)(a=a.offsetParent),(b+=a.offsetTop);return b},},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=(this.config.scrollContainer&&this.config.scrollContainer.scrollTop)||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c},},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)},},]),a)})();(b["default"]=r),(a.exports=b["default"])})



$(document).ready(function () {
	"use strict";
	$(window).scroll(function () {
		var TargetPos = 100;
		var ScrollPos = $(window).scrollTop();
		if (ScrollPos > TargetPos) {
			$("body").addClass("has__scroll");
		} else {
			$("body").removeClass("has__scroll");
		}
	});
});



$(window).on("load", function () {
	"use strict";
	var headerHight = $(".header-box").height();
	var $path = location.href;
	var $index = $path.indexOf("#");
	var $sub = $path.substring($index + 1); // Lấy phần sau dấu #

	if ($index !== -1 && $sub.trim() !== "") {
		try {
			var target = $("#" + decodeURIComponent($sub)); // Giải mã URL và tìm phần tử
			if (target.length) {
				var offsetTop = target.offset().top;
				if ($(window).width() >= 768) {
					$("html,body").animate(
						{ scrollTop: offsetTop },
						500
					);
				} else {
					$("html,body").animate(
						{ scrollTop: offsetTop - 100 },
						500
					);
				}
			} else {
				console.warn("Không tìm thấy phần tử với id: " + $sub);
			}
		} catch (error) {
			console.error = function () {};
		}
	}
});

/*
$(window).load(function () {
	"use strict";
	var headerHight = $(".header-box").height();
	var $path = location.href;
	var $index = $path.indexOf("#");
	var $sub = $path.substring($index);
	if ($index != -1) {
		var target = $($sub);
		var offsetTop = target.offset().top;
		if ($(window).width() >= 768) {
			$("html,body").animate(
				{
					scrollTop: offsetTop - 0,
				},
				500
			);
		} else {
			$("html,body").animate(
				{
					scrollTop: offsetTop - 100,
				},
				500
			);
		}
	}
});
*/

$(function () {
	"use strict";
	new WOW().init();
	$("#popup__search").click(function (e) {
		e.preventDefault();
		if ($(this).hasClass("is-active")) {
			$("body").removeClass("search--opened");
			$(this).removeClass("is-active");
		} else {
			$("body").addClass("search--opened");
			$(this).addClass("is-active");
			return false;
		}
	});

	$(".btn-close").click(function (e) {
		e.preventDefault();
		$("body").removeClass("search--opened");
		$("#popup__search").removeClass("is-active");
	});

	$(".btn-back").click(function (e) {
		e.preventDefault();
		$("body").removeClass("type--opened");
		$("body").removeClass("notebook--opened");
		$("body").removeClass("location--opened");
		$("body").removeClass("qualifications--opened");
		return false;
	});

	$("#search__type").click(function (e) {
		e.preventDefault();
		$("body").addClass("type--opened");
		return false;
	});

	$("#search__qualifications").click(function (e) {
		e.preventDefault();
		$("body").addClass("qualifications--opened");
		return false;
	});

	$("#search__location").click(function (e) {
		e.preventDefault();
		$("body").addClass("location--opened");
		return false;
	});

	$("#search__notebook").click(function (e) {
		e.preventDefault();
		$("body").addClass("notebook--opened");
		return false;
	});
});

$(document).ready(function () {
	if (window.innerWidth < 561) {
		$(".tab__content").hide();
		$(".tab__content:first-of-type").show();
		$(".btn-tg01:first-of-type").removeClass("close").addClass("open");

		$(".btn-tg01").on("click", function () {
			var active = $(this).attr("role");

			if (!$(this).hasClass("open")) {
				$(".tab__content").hide();
				$(".btn-tg01").removeClass("open").addClass("close");
				$(this).removeClass("close").addClass("open");
				$("#" + active)
					.stop(true, true)
					.delay(100)
					.show();
			}
		});
	}
});

/**tab link**/
$(document).ready(function () {
	// BEGIN: toggle
	if ($(".toggle").length) {
		$toggleDuration = 500;
		$(".toggle").each(function () {
			if (typeof $(this).attr("data-duration") != "undefined") {
				if ($.inArray($(this).attr("data-duration"), ["slow", "normal", "fast"]) >= 0) $toggleDuration = $(this).attr("data-duration");
				else $toggleDuration = parseInt($(this).attr("data-duration"));
			}
		});

		$(".toggle-link").click(function () {
			var $toggle = $(this).parents(".toggle").first();

			if ($toggle.hasClass("active")) {
				var toggleHeight = $toggle.outerHeight();
				$(this)
					.siblings(".toggle-main")
					.stop()
					.slideUp($toggleDuration, function () {
						$(this).removeAttr("style");
						$toggle.removeClass("active");
					});
			} else {
				var $main = $toggle.children(".toggle-main"),
					toggleHeight = 0;

				$main.css("display", "block");
				toggleHeight += $toggle.outerHeight(); // update height
				$main.css("display", "");

				$(this)
					.siblings(".toggle-main")
					.stop()
					.slideDown($toggleDuration, function () {
						$(this).removeAttr("style");
						$toggle.addClass("active");
					});
			}
		});
	}
	// END: toggle

	// BEGIN: tabs - switch
	if ($(".tabs-switch").length) {
		$(".tabs-switch").each(function () {
			var $tabsSwitch = $(this),
				$tabLink = $tabsSwitch.find(".tab-link"),
				$tabContent = $tabsSwitch.find(".tab-content");

			$tabLink.children().each(function () {
				if ($(this).find("img").length > 0 && $(this).find("img").hasClass("btn")) {
					$(this).data("src", $(this).find("img").attr("src"));

					$(this)
						.find("img")
						.attr("src")
						.match(/^(.*)(\.{1}.*)/g);
					$(this).data("active", RegExp.$1 + "_on" + RegExp.$2);
				}
			});

			$tabContent.children().hide();

			if (!$tabsSwitch.hasClass("stop")) {
				$tabLink.each(function () {
					// TODO: active by [data-active]
					var hash = window.location.hash || location.hash;
					if (hash) {
						if ($(this).children("[data-tab-anchor='" + hash + "']").length)
							$(this)
								.children("[data-tab-anchor='" + hash + "']")
								.addClass("active");
						else $(this).children().first().addClass("active");
					} else if (!$(this).children(".active").length) $(this).children().first().addClass("active");

					$(this).children(".active").find("img").attr("src", $(this).children(".active").data("active")).removeClass("btn");
				});

				if ($tabLink.children(".active").hasClass("all")) $tabContent.children().show();
				else $tabContent.children().eq($tabLink.children(".active").index()).show();
			}

			if ($(".bx-wrapper").length > 0) $(window).trigger("resize");
		});

		$("body").on("click", ".tabs-switch-close", function () {
			var $content = $(this).parents(".tab-content").first(),
				$switch = $(this).parents(".tabs-switch").first();

			if ($content.length > 0 && $switch.length > 0) {
				var $tabMode = $.inArray($switch.attr("data"), ["fade", "slide", "block"]) >= 0 ? $switch.attr("data") : "block",
					$tabDuration = $switch.attr("data-duration") ? parseInt($switch.attr("data-duration")) : 300;

				if ($tabMode == "fade") $content.children().stop().fadeOut($tabDuration);
				else if ($tabMode == "slide") $content.children().stop().slideUp($tabDuration);
				else $content.children().stop().hide($tabDuration);
			}
		});

		$("body").on("click", ".tab-link .tab-item, .tab-link > *", function () {
			var $itemMode = $(this).hasClass("tab-item"),
				$this = $itemMode ? $(this, ".tab-item") : $(this),
				$idxAll = $this.parents(".tab-link").first().children(".all").length > 0 ? $this.parents(".tab-link").first().children(".all").index() : false,
				$idx = $itemMode ? $this.parents(".tab-link").first().find(".tab-item").index($this) : $this.parents(".tab-link").first().children().index($this),
				$act = $itemMode ? $this.parents(".tab-link").first().find(".tab-item.active") : $this.parents(".tab-link").first().children(".active"),
				$tabMode = $.inArray($this.parents(".tabs-switch").first().attr("data"), ["fade", "slide", "block"]) >= 0 ? $this.parents(".tabs-switch").first().attr("data") : "block",
				$tabDuration = $this.parents(".tabs-switch").first().attr("data-duration") ? parseInt($this.parents(".tabs-switch").first().attr("data-duration")) : 300,
				$tabContent = $this.parents(".tabs-switch").first().children(".tab-content"),
				$tabIdx = $this.attr("data-active") ? $this.attr("data-active") : false,
				$autoScroll = $.inArray($this.parents(".tabs-switch").first().attr("data-scroll"), ["true", "on", "enable", "enabled", "1"]) >= 0 ? true : false,
				$itself = $.inArray($this.parents(".tabs-switch").first().attr("data-toggle"), ["true", "on", "enable", "enabled", "1"]) >= 0 && $this.hasClass("active") ? true : false,
				$itHide = $tabContent.children().eq($idx).is(":hidden");

			if ($tabIdx) {
				$this.parents(".tabs-switch")
					.first()
					.find(".tab-link")
					.each(function () {
						var $tabBtn = $itemMode ? $(this).find(".tab-item[data-active='" + $tabIdx + "']") : $(this).children("[data-active='" + $tabIdx + "']"),
							$elmActive = $itemMode ? $(this).find(".tab-item.active") : $(this).children(".active");

						$elmActive.find("img").attr("src", $elmActive.data("src"));
						$elmActive.removeClass("active");

						if ($itself) {
							if ($itHide) $tabBtn.addClass("active");
							else $tabBtn.removeClass("active");
						} else $tabBtn.addClass("active");

						// if (!$tabBtn.find("img").hasClass("active")) $tabBtn.find("img").attr("src", $tabBtn.data("active"));
						if ($tabBtn.find("img").hasClass("btn")) $tabBtn.find("img").attr("src", $tabBtn.data("active")).removeClass("btn");
					});
			} else {
				if (/^(.*?)_on\.(.*?)$/.test($act.find("img").attr("src"))) $act.find("img").addClass("btn");

				$act.find("img").attr("src", $act.data("src"));
				$act.removeClass("active");

				if ($itself) {
					if ($itHide) $this.addClass("active");
					else $this.removeClass("active");
				} else $this.addClass("active");

				// if (!$this.find("img").hasClass("active")) $this.find("img").attr("src", $this.data("active"));
				if ($this.find("img").hasClass("btn")) $this.find("img").attr("src", $this.data("active")).removeClass("btn");
			}

			if (!$this.parents(".tab-link").first().hasClass("clicked")) {
				$this.parents(".tab-link").first().addClass("clicked");

				if ($this.hasClass("all")) {
					if ($tabMode == "fade") {
						$tabContent
							.children()
							.stop()
							.fadeIn($tabDuration, function () {
								$(this).removeAttr("style").show();

								if ($(this).find("[class*=heightLine]").length) heightLine();

								if ($this.children("a").length) $this.children("a").click();

								$tabContent.css({
									minHeight: "",
								});

								$(window).trigger("resize");

								$this.parents(".tab-link").first().removeClass("clicked");
							});
					} else if ($tabMode == "slide") {
						$tabContent.children().slideDown($tabDuration, function () {
							$(this).removeAttr("style").show();

							if ($(this).find("[class*=heightLine]").length) heightLine();

							if ($this.children("a").length) $this.children("a").click();

							$(window).trigger("resize");

							$this.parents(".tab-link").first().removeClass("clicked");
						});
					} else {
						$tabDuration = $(this).parents(".tabs-switch").first().attr("data-duration") ? parseInt($(this).parents(".tabs-switch").first().attr("data-duration")) : 0;

						$tabContent
							.children()
							.stop()
							.show($tabDuration, function () {
								$(this).removeAttr("style").show();

								if ($(this).find("[class*=heightLine]").length) heightLine();

								if ($this.children("a").length) $this.children("a").click();

								$(window).trigger("resize");

								$this.parents(".tab-link").first().removeClass("clicked");
							});
					}
				} else {
					if ($idxAll !== false && $idxAll >= 0 && $idx >= $idxAll) $idx -= 1;

					if ($tabMode == "fade") {
						if ($itself) {
							$tabContent
								.children()
								.eq($idx)
								.stop()
								.fadeToggle($tabDuration, function () {
									if ($itHide) $(this).removeAttr("style").show();
									else $(this).removeAttr("style").hide();

									if ($(this).find("[class*=heightLine]").length) heightLine();

									if ($this.children("a").length) $this.children("a").click();

									$tabContent.css({
										minHeight: "",
									});

									$(window).trigger("resize");

									$this.parents(".tab-link").first().removeClass("clicked");
								});
						} else {
							$tabContent.css({
								minHeight: $tabContent.outerHeight(),
							});

							$tabContent
								.children()
								.stop()
								.fadeOut($tabDuration, function () {
									$(this).removeAttr("style").hide();
								});
							$tabContent
								.children()
								.eq($idx)
								.stop()
								.delay($tabDuration)
								.fadeIn($tabDuration, function () {
									$(this).removeAttr("style").show();

									if ($(this).find("[class*=heightLine]").length) heightLine();

									if ($this.children("a").length) $this.children("a").click();

									$tabContent.css({
										minHeight: "",
									});

									$(window).trigger("resize");

									$this.parents(".tab-link").first().removeClass("clicked");
								});
						}
					} else if ($tabMode == "slide") {
						if ($itself) {
							$tabContent
								.children()
								.eq($idx)
								.stop()
								.slideToggle($tabDuration, function () {
									if ($itHide) $(this).removeAttr("style").show();
									else $(this).removeAttr("style").hide();

									if ($(this).find("[class*=heightLine]").length) heightLine();

									if ($this.children("a").length) $this.children("a").click();

									$(window).trigger("resize");

									$this.parents(".tab-link").first().removeClass("clicked");
								});
						} else {
							$tabContent
								.children()
								.stop()
								.slideUp($tabDuration, function () {
									$(this).removeAttr("style").hide();
								})
								.siblings()
								.eq($idx)
								.stop()
								.slideDown($tabDuration, function () {
									$(this).removeAttr("style").show();

									if ($(this).find("[class*=heightLine]").length) heightLine();

									if ($this.children("a").length) $this.children("a").click();

									$(window).trigger("resize");

									$this.parents(".tab-link").first().removeClass("clicked");
								});
						}
					} else {
						$tabDuration = $this.parents(".tabs-switch").first().attr("data-duration") ? parseInt($this.parents(".tabs-switch").first().attr("data-duration")) : 0;

						if ($itself) {
							$tabContent
								.children()
								.eq($idx)
								.stop()
								.toggle($tabDuration, function () {
									if ($itHide) $(this).removeAttr("style").show();
									else $(this).removeAttr("style").hide();

									if ($(this).find("[class*=heightLine]").length) heightLine();

									if ($this.children("a").length) $this.children("a").click();

									$(window).trigger("resize");

									$this.parents(".tab-link").first().removeClass("clicked");
								});
						} else {
							$tabContent
								.children()
								.stop()
								.hide($tabDuration, function () {
									$(this).removeAttr("style").hide();
								})
								.siblings()
								.eq($idx)
								.stop()
								.show($tabDuration, function () {
									$(this).removeAttr("style").show();

									if ($(this).find("[class*=heightLine]").length) heightLine();

									if ($this.children("a").length) $this.children("a").click();

									$(window).trigger("resize");

									$this.parents(".tab-link").first().removeClass("clicked");
								});
						}
					}
				}

				setTimeout(function () {
					$this.parents(".tab-link").first().removeClass("clicked");
				}, $tabDuration);

				if ($(".slick-slider").length > 0) {
					$(window).trigger("resize");
				}

				if ($(".bx-wrapper").length > 0) {
					setTimeout(function () {
						$(window).trigger("resize");
					}, 1);
				}

				if ($autoScroll) {
					var $offsetY = $tabContent.offset().top,
						$navOffset = 0;

					if ($(".nav-fixed").length) $navOffset = typeof $(".nav-fixed").attr("data-height") != "undefined" ? parseInt($(".nav-fixed").attr("data-height")) : $(".nav-fixed").outerHeight();

					if ($(".nav-target").length) {
						if ($(".nav-fixed").length) $navOffset = typeof $(".nav-fixed").attr("data-height") != "undefined" ? parseInt($(".nav-fixed").attr("data-height")) : $(".nav-fixed").outerHeight();

						$("html, body")
							.stop()
							.animate(
								{
									scrollTop: $offsetY - $navOffset,
								},
								500
							);
					} else {
						$("html, body")
							.stop()
							.animate(
								{
									scrollTop: $offsetY - $navOffset,
								},
								500
							);
					}
				}
			}
		});
	}
});
// END: tabs - switch

/**end tab link**/

$(document).ready(function () {
	var height1 = $(".header-box").height();
	var height2 = $("#key-box").height();
	var height = height1 + height2;
	$(window).scroll(function () {
		if (height < $(window).scrollTop()) {
			$("body").addClass("fixed-btn");
		} else {
			$("body").removeClass("fixed-btn");
		}
	});
});

$(document).ready(function () {
	var offsetY;
	$(".hamberger-btn").click(function () {
		if ($("body").hasClass("menu-open")) {
			$("body").removeClass("menu-open");
			$("body").css("position", "static");

			$(window).scrollTop(offsetY);
		} else {
			$("body").addClass("menu-open");
			offsetY = window.pageYOffset;
			$("body").css({
				position: "fixed",
				width: "100%",
				top: -offsetY + "px",
			});
		}
		return false;
	});
	$(".nav a, .nav a").click(function () {
		$("body").removeClass("menu-open");
		$("body").css("position", "static");
		$(window).scrollTop(offsetY);
	});
	$(".hide-nav, .unsmooth").click(function () {
		if ($("body").hasClass("menu-open")) {
			$("body").removeClass("menu-open");
			$("body").css("position", "static");
			$(window).scrollTop(offsetY);
		}
	});
});

$(document).ready(function () {
	"use trict";
	$(".remove__check").click(function () {
		$(".remodal__i-custom input").prop("checked", false);
	});
});

/*
   _____                 ____      ____          __   
  / ___/______________  / / /     / __/___ _____/ /__ 
  \__ \/ ___/ ___/ __ \/ / /_____/ /_/ __ `/ __  / _ \
 ___/ / /__/ /  / /_/ / / /_____/ __/ /_/ / /_/ /  __/
/____/\___/_/   \____/_/_/     /_/  \__,_/\__,_/\___/ 
*/
$(window).width() > 767
	? $(window).on("load scroll", function () {
			$(".fadein").each(function () {
				var o = $(this).offset().top;
				$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
			}),
				$(".fadein-right").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-left").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-top").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-bottom").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-w").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-right-w").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-left-w").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-top-w").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-bottom-w").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 100 && $(this).addClass("scroll-fade");
				});
	  })
	: $(window).on("load scroll", function () {
			$(".fadein").each(function () {
				var o = $(this).offset().top;
				$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
			}),
				$(".fadein-right").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-left").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-top").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-bottom").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-n").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-right-n").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-left-n").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-top-n").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				}),
				$(".fadein-bottom-n").each(function () {
					var o = $(this).offset().top;
					$(window).scrollTop() > o - $(window).height() + 60 && $(this).addClass("scroll-fade");
				});
	  });

/*
 =====================================
            Anchor links
===================================== */

jQuery("body").on("click", "a[href*='#']", function (e) {
	var hash = jQuery(this).attr("href");
	if (hash) {
		hash = hash.replace(/^\.\//g, "");
		hash = hash.replace(location.pathname, "");
		hash = hash.replace(location.origin, "");
		hash = hash.replace("//" + location.host, ""); //browSyncÃƒÂ§"Ã‚Â¨
	}
	if (hash.match(/^#/) && jQuery(hash).length > 0) {
		if (hash.match(/^#/) && jQuery(hash).length > 0) {
			e.preventDefault();
			e.stopPropagation();

			var target = jQuery(hash);
			scrollToTarget(target, 100);

			return false;
		}
	}
});

function scrollToTarget(targetElement, overPixels) {
	if (overPixels === undefined) {
		overPixels = 0;
	}

	if (targetElement.length > 0) {
		$target = targetElement;
		jQuery("html, body").animate(
			{
				scrollTop: $target.offset().top - overPixels, // Scroll to this location.
			},
			{
				duration: 1000,
				step: function (now, fx) {
					var newOffset = $target.offset().top - overPixels;
					if (fx.end !== newOffset) fx.end = newOffset;
				},
			}
		);
	}
}


