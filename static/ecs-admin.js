(function($){
    $(document).ready(function(){
        $('#ecs-link-display button').on('click', function() {
            $.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    'action': 'ecs_show_link',
                    'value': !! $('#show-ecs-link:checked').length,
                    'nonce': $('#ecs-link-nonce').val()
                },
                success: function(data) {
                    $('#ecs-link-display .toggle-message').show();
                    setTimeout(function() {
                        $('#ecs-link-display .toggle-message').hide();
                    }, 5000);
                }
            });
        });
    });
})(jQuery);