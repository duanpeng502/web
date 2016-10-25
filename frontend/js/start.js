define(function(require, exports, module){

    function start(){
        $(document).ready(function(){

            $("a[data-app]").bind("click", function(e){
                var appController = $(e.currentTarget).attr("data-app");
                var path = '../controller/'+appController+'/main.js';

                if(appController == 'index'){
                    $('.card').show();
                }else{

                    $('.card').fadeOut(500, function(){
                        if(window[appController+'00ff00']){
                            window[appController+'00ff00'].initialize();
                        }else{
                            require.async([path], function(main){
                                console.log("mainview", main);
                                window[appController+'00ff00'] = new main();
                            })
                        }
                    });

                }
                

            })
        })
    }

    module.exports = start;
})