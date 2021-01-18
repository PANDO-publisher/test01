$(function(){
    var idx=0;
    var len = $('.video_box .video a').length; /* 총 아이템 갯수 */
    var slide = 3; /* 보이는 아이템 갯수 */
    var slideWidth = $('.video_box .video').width(); /* 비디오 가로사이즈 */    

    $('.next').on('click',function(){
        if(idx < len/slide -1){
            idx++;
        }
        $('.video_box .video').css('left','-'+(idx * slideWidth)+'px');
    })
    $('.prev').on('click',function(){
        if(idx > 0){
            idx--;
        }
        $('.video_box .video').css('left','-'+(idx * slideWidth)+'px');
    })

    
});