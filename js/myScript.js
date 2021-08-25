console.log('这里是zovz的个人主页,博客系统和照片墙正在开发中!');
console.log('wdnmd');
console.log('再看信不信我喊华强砍你啦!');
console.log('甘霖娘!');

layui.use('element', function () {
    var element = layui.element;
});

function welcome() {
    layer.alert('我的地盘,随便逛!  嘿嘿..', {anim: 4});
}

$(function () {
    var nav = $(".fixed-nav"); //得到导航对象
    var win = $(window); //得到窗口对象
    var sc = $(document);//得到document文档对象。
    win.scroll(function () {
        if (sc.scrollTop() >= 855) {
            nav.addClass("fixednav");
        } else {
            nav.removeClass("fixednav");
        }
    })
})

function refresh() {
    window.location.reload();
    window.location = '#first';
}

var anchorLink = document.querySelector("a[href='#introduce']"),
    target = document.getElementById("introduce");
anchorLink.addEventListener("click", function (e) {
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({"behavior": "smooth", "top": target.offsetTop});
    }
})

var anchorLink1 = document.querySelector("a[href='#first']"),
    target1 = document.getElementById("first");
anchorLink1.addEventListener("click", function (e) {
    if (window.scrollTo) {
        e.preventDefault();
        window.scrollTo({"behavior": "smooth", "top": target1.offsetTop});
    }
})