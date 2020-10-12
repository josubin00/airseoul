// JavaScript Document

$(function(){ // 문서가 열렸을때 실행

    $('').mouseenter(function(){ // .topmenu 자식 li를 마우스 오버했을때
        // this = .topmenu의 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.gif','_on.gif'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .gif찾아서 _on.gif로 변경
    });

    $('').mouseleave(function(){ // .topmenu 자식 li를 마우스 아웃했을때
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_on.gif','.gif'))
    });


    $('#main_slide').slidesjs({
        width:1920,
        height:805,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "slide", // 효과, slide/fade
            auto: true, //자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: false, // 버튼 활성화/비활성화
            effect: "slide"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: true,
            effect: "slide"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 3000
            }
        }
    });


    $('#card_slide').slidesjs({
        width:1920,
        height:900,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "slide", // 효과, slide/fade
            auto: false, //자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "slide"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "slide"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 3000
            }
        }
    });

    $('#bot').on('click',function () {
        $('#bot_chat').fadeIn();
    });

    $('#bot_chat').on('click',function () {
        $('#bot_chat').fadeOut();
    });

    $('#mint_pass .mint_slide').slidesjs({
        width:383,
        height:572,
        play: {
            active: true, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "slide", // 효과, slide/fade
            auto: true, //자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "slide"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: true,
            effect: "slide"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 3000
            }
        }
    });
});

