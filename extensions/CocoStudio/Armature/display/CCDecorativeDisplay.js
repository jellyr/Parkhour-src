/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

ccs.DecotativeDisplay = cc.Class.extend({
    _display:null,
    _colliderDetector:null,
    _displayData:null,

    ctor:function () {
        this._display = null;
        this._colliderDetector = null;
        this._displayData = null;
    },

    init:function () {
        return true;
    },

    setDisplay:function (display) {
        this._display = display;
    },

    getDisplay:function () {
        return this._display;
    },

    setColliderDetector:function (colliderDetector) {
        this._colliderDetector = colliderDetector;
    },

    getColliderDetector:function () {
        return this._colliderDetector;
    },

    setDisplayData:function (displayData) {
        this._displayData = displayData;
    },
    getDisplayData:function () {
        return this._displayData;
    },
    release:function () {
        CC_SAFE_RELEASE(this._display);
        this._display = null;
        CC_SAFE_RELEASE(this._displayData);
        this._displayData = null;
        CC_SAFE_RELEASE(this._colliderDetector);
        this._colliderDetector = null;
    }

});

ccs.DecotativeDisplay.create = function () {
    var decotativeDisplay = new ccs.DecotativeDisplay();
    if (decotativeDisplay && decotativeDisplay.init()) {
        return decotativeDisplay;
    }
    return null;
};