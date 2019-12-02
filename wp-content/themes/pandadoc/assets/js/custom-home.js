var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create YouTube player(s) after the API code downloads.
var player;


function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1');
}

jQuery(document).ready(function () {
    jQuery(".video").click(function () {
        player.playVideo();
        return false;
    });

    jQuery('.signup').magnificPopup({
        type: 'inline',
        preloader: false,
        closeBtnInside:true
    });

    jQuery('.semi-transparent').magnificPopup({
        type: 'inline',
        preloader: false,
        closeBtnInside:true
    });

    jQuery('#smlsubform .sml_submitbtn').click(function(){
        var btn = jQuery(this);
        btn.attr('value', 'Adding...');
        jQuery.post('.', {
            'sml_subscribe': 1,
            'sml_email': jQuery('#smlsubform .sml_emailinput').val()
        }, function(){
            btn.attr('value', 'Get invite');
            btn.parent().parent().prepend('<p class="sml_thankyou">Thank you! We will let you know when it\'s ready</p>');
        })
        return false;
    });
});