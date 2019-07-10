/*
 * @Author: Huangzhijie 
 * @Date: 2019-01-24 11:08:58 
 * @Last Modified by: Huangzhijie
 * @Last Modified time: 2019-01-30 17:51:37
 */
$(function(){
  var k = $(window).height();
  var flag = false;
  $('#fullpage').fullpage({
    navigation: true,
  //continuousVertical: true,
  //回调函数
    afterLoad: function(anchorLink, index){
      if(index == 2 && flag == false){
        $(".search").show().animate({'right':370},1500,function(){
          $(".search>img").animate({'opacity':1},500,function(){
            $(".search>img").animate({'width':43, 'margin-right':20},1000)
            $(".search").animate({'width':148, "height":30, 'margin-right':-127, 'bottom':452},1000,function(){
              flag = true;
            })
            $(".goods-02").show().animate({'height':218},1000)
            $(".words-02").animate({'opacity':1},500)
          })
        });
      }
    },
    
    onLeave:function(index,nextIndex,direction){
      if(index == 2 && nextIndex == 3 && flag == true){
        $(".shirt-02").show().animate({'bottom': -(k - 250), 'width':207, "left":260},2000, function(){
          $('.img-01-a').animate({ 'opacity': 1},500)
          $('.btn-01-a').animate({ 'opacity': 1}, 500)
        });
        $('.cover').show()
      }
      if (index == 3 && nextIndex == 4 ) {
        $(".shirt-02").hide();
        $(".t1f").show().animate({ 'bottom': -((k - 250) + 50), "left": 302}, 2000, function(){
          $(this).hide();
          $('.car-img').show();
          $(".car").animate({ "left": "150%" }, 3000, "easeInElastic", function(){
            $('.words-04-a ,.note-img').animate({
              'opacity': 1
            }, 1000);
            $(".note").show();
          })
        });
      }
      if (index == 4 && nextIndex == 5) {  
        $('.hand-05').animate({ 'left': -21, 'top': 652},3000,function(){
          $('.mouse-05-a').show()
          $('.t1f-05').show().animate({
            'bottom': 70
          }, 1000,function(){
              $('.order-05').animate({ 'bottom': 390 }, 1000, function(){
                $(".words-05").addClass("words-05-a");
              })
          })
        });
      }
    },
  });   
})