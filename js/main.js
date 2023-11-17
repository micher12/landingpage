$(function(){

    //mobile
    function mobile(){
        var btn = $('.btn')
        var logo = $('.logo');
        var mobile = $('.mobile');
        var item = $('.mobile li a')
        var ln1 = $('.ln1')
        var ln2 = $('.ln2')
        var ln3 = $('.ln3')
        var ativado = false;
        var animando = false;

        btn.click(function(){
            if(animando) return

            if(!ativado){
                ativado = true
                animando = true 
                btn.css("position","fixed").css("right",'2%').css("top",'42px')
                logo.css("position","fixed").css("top",'30px')
                ln1.css("transform","rotate(45deg)").css("top",'10px')
                ln2.css("display",'none');
                ln3.css("width",'100%').css("transform","rotate(-45deg)").css('top','10px')
                mobile.toggle('slide',{direction: 'up'},'slow',function(){
                    animando = false;
                });
            }else{
                ativado = false
                animando = true
                btn.css("position","relative").css("right",'0').css("top",'0')
                logo.css("position","relative").css("top",'0')
                ln1.css("transform","rotate(0)").css("top",'0')
                ln2.css("display",'block');
                ln3.css("width",'60%').css("transform","rotate(0)").css('top','21px')
                mobile.toggle('slide',{direction: 'up'},'slow',function(){
                    animando = false;
                });
            }
        });

        item.click(function(){
            ativado = false
            animando = true
            btn.css("position","relative").css("right",'0').css("top",'0')
            logo.css("position","relative").css("top",'0')
            ln1.css("transform","rotate(0)").css("top",'0')
            ln2.css("display",'block');
            ln3.css("width",'60%').css("transform","rotate(0)").css('top','21px')
            mobile.toggle('slide',{direction: 'up'},'slow',function(){
                animando = false;
            });
        });


        $(window).resize(function(){
            if($(window).width() > 860){
                if(ativado){
                    ativado = false
                    animando = true
                    btn.css("position","relative").css("right",'0').css("top",'0')
                    logo.css("position","relative").css("top",'0')
                    ln1.css("transform","rotate(0)").css("top",'0')
                    ln2.css("display",'block');
                    ln3.css("width",'60%').css("transform","rotate(0)").css('top','21px')
                    mobile.toggle('slide',{direction: 'up'},'slow',function(){
                        animando = false;
                    });
                }
            }
        });

    }
    mobile();

    //animateNavegation
    function animateNavegation(el){
        el.click(function(e){
            var item = $(this);
            var anchor = $(item.attr('href')).offset().top;

            if(anchor != ''){
                $('html,body').animate({
                    scrollTop: anchor,
                },1000)
            }

            e.preventDefault();

        });

    }
    animateNavegation($('a'));


    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        speed: 1000,
        infinite: false,
        responsive: [
            {
                breakpoint: 1151,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 721,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ],
    });

});