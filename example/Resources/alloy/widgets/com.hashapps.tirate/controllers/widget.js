function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.hashapps.tirate/" + s : s.substring(0, index) + "/com.hashapps.tirate/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function setRate(value) {
        Ti.API.info("rate value = " + value);
        rate_value = parseInt(value, 10);
        $.trigger("rate", rate_value);
        var star, last, i = 1;
        for (i; 5 >= i; i++) {
            star = $["star" + i];
            if (value >= i) {
                star.image = full;
                last = i;
            } else star.image = empty;
        }
        star = $["star" + (last + 1)];
        if (value - last >= 0 && .3 >= value - last) {
            star = $["star" + last];
            star.image = full;
        } else value - last > .3 && .8 >= value - last ? star.image = half : value - last > .8 && 1 >= value - last && (star.image = empty);
    }
    function starClicked(e) {
        var index = e.source.index;
        $.clickable && setRate(index);
    }
    new (require("alloy/widget"))("com.hashapps.tirate");
    this.__widgetId = "com.hashapps.tirate";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.starContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "starContainer"
    });
    $.__views.starContainer && $.addTopLevelView($.__views.starContainer);
    $.__views.star1 = Ti.UI.createImageView({
        image: "/images/stars_large/full.png",
        right: 1,
        index: 1,
        id: "star1"
    });
    $.__views.starContainer.add($.__views.star1);
    starClicked ? $.__views.star1.addEventListener("click", starClicked) : __defers["$.__views.star1!click!starClicked"] = true;
    $.__views.star2 = Ti.UI.createImageView({
        image: "/images/stars_large/full.png",
        right: 1,
        index: 2,
        id: "star2"
    });
    $.__views.starContainer.add($.__views.star2);
    starClicked ? $.__views.star2.addEventListener("click", starClicked) : __defers["$.__views.star2!click!starClicked"] = true;
    $.__views.star3 = Ti.UI.createImageView({
        image: "/images/stars_large/full.png",
        right: 1,
        index: 3,
        id: "star3"
    });
    $.__views.starContainer.add($.__views.star3);
    starClicked ? $.__views.star3.addEventListener("click", starClicked) : __defers["$.__views.star3!click!starClicked"] = true;
    $.__views.star4 = Ti.UI.createImageView({
        image: "/images/stars_large/full.png",
        right: 1,
        index: 4,
        id: "star4"
    });
    $.__views.starContainer.add($.__views.star4);
    starClicked ? $.__views.star4.addEventListener("click", starClicked) : __defers["$.__views.star4!click!starClicked"] = true;
    $.__views.star5 = Ti.UI.createImageView({
        image: "/stars_large/full.png",
        right: 1,
        index: 5,
        id: "star5"
    });
    $.__views.starContainer.add($.__views.star5);
    starClicked ? $.__views.star5.addEventListener("click", starClicked) : __defers["$.__views.star5!click!starClicked"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {}, rate_value = 0;
    var full, half, empty;
    $.clickable = args.clickable ? args.clickable : false;
    if ($.clickable) {
        full = WPATH("/images/stars_large/full.png");
        half = WPATH("/images/stars_large/half.png");
        empty = WPATH("/images/stars_large/empty.png");
        $.star1.width = $.star2.width = $.star3.width = $.star4.width = $.star5.width = "25dp";
        $.star1.height = $.star2.height = $.star3.height = $.star4.height = $.star5.height = "25dp";
    } else {
        full = WPATH("/images/stars_small/full.png");
        half = WPATH("/images/stars_small/half.png");
        empty = WPATH("/images/stars_small/empty.png");
        $.star1.width = $.star2.width = $.star3.width = $.star4.width = $.star5.width = "16dp";
        $.star1.height = $.star2.height = $.star3.height = $.star4.height = $.star5.height = "16dp";
    }
    $.star1.image = $.star2.image = $.star3.image = $.star4.image = $.star5.image = empty;
    _.extend($.starContainer, args);
    args.rate && setRate(args.rate);
    Object.defineProperty($, "rate", {
        get: function() {
            return rate_value;
        },
        set: function(val) {
            setRate(val);
        }
    });
    Object.defineProperty($, "visible", {
        get: function() {
            return $.starContainer.visible;
        },
        set: function(val) {
            $.starContainer.visible = val;
        }
    });
    __defers["$.__views.star1!click!starClicked"] && $.__views.star1.addEventListener("click", starClicked);
    __defers["$.__views.star2!click!starClicked"] && $.__views.star2.addEventListener("click", starClicked);
    __defers["$.__views.star3!click!starClicked"] && $.__views.star3.addEventListener("click", starClicked);
    __defers["$.__views.star4!click!starClicked"] && $.__views.star4.addEventListener("click", starClicked);
    __defers["$.__views.star5!click!starClicked"] && $.__views.star5.addEventListener("click", starClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;