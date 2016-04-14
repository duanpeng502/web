
// index start
seajs.config({
    //设置路径
    paths: {
        'gallery': 'https://a.alipayobjects.com/gallery'
    },

    alias: {
    }
});

seajs.use(["./app/index"], function(index){

    //console.log(index);
    var str = "hello heke!";
    index.start(str);

})