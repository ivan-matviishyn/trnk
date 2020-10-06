/* Required for build CSS */
import './scss/style.scss';

require('./js/bootstrap');

let active='box1';
$('.box').on('click',function(e){
    e.preventDefault();
    let id = $(this).attr('href');
    $('.box').removeClass('active');
    $(this).addClass('active');

    $('#'+active).addClass('box_clr');
    $('#'+id).removeClass('box_clr');
    active = id;
})
