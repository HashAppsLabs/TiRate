function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.hashapps.tirate/" + s : s.substring(0, index) + "/com.hashapps.tirate/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0002,
    key: "starContainer",
    style: {
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "star1",
    style: {
        image: "/images/stars_large/full.png",
        right: 1,
        index: 1
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "star2",
    style: {
        image: "/images/stars_large/full.png",
        right: 1,
        index: 2
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "star3",
    style: {
        image: "/images/stars_large/full.png",
        right: 1,
        index: 3
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "star4",
    style: {
        image: "/images/stars_large/full.png",
        right: 1,
        index: 4
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "star5",
    style: {
        image: "/stars_large/full.png",
        right: 1,
        index: 5
    }
} ];