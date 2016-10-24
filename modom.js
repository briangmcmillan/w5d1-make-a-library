// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function() {
    'use strict'
    //Number 1
    var one = function (selector) {
        return document.querySelector(selector)
    }

    //Number 2
    var all = function (selector) {
        return document.querySelectorAll(selector)
    }

    //Number 3
    var remove = function (selector) {
        return document.querySelector(selector).remove()
    }

    //Number 4
    var addClass = function (selector, style) {
        return document.querySelector(selector).classList.add(style)
    }

    //Number 5
    var removeClass = function (class1, class2) {
        return document.querySelector(class1).classList.remove(class2)
    }

    //Number 6
    var hasClass = function (tag, className) {
        return document.querySelector(tag).classList.contains(className)
    }

    //Number 7
    var getAttr = function (div1, divClass) {
        return document.querySelector(div1).getAttribute(divClass)
    }

    //Number 8
    var setAttr = function (test1, test2, test3) {
        return document.querySelector(test1).setAttribute(test2, test3)
    }

    //Number 9
    var setHtml = function (test4, test5) {
        return document.querySelector(test4).innerHTML = test5
    }

    //Number 10
    var getHtml = function (test6) {
        return document.querySelector(test6).innerHTML
    }


    //Saving all of these functions into a namespace
    window.md = {
        //property name: function,
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHtml: setHtml,
        getHtml: getHtml,
    }

}())
