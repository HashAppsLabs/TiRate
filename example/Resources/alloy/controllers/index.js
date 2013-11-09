function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Alloy.createWidget("com.hashapps.tirate", "widget", {
        rate: "1",
        top: "100",
        id: "__alloyId1",
        __parentSymbol: $.__views.index
    });
    $.__views.__alloyId1.setParent($.__views.index);
    $.__views.__alloyId2 = Alloy.createWidget("com.hashapps.tirate", "widget", {
        rate: "3.5",
        clickable: "true",
        top: "50",
        id: "__alloyId2",
        __parentSymbol: $.__views.index
    });
    $.__views.__alloyId2.setParent($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;