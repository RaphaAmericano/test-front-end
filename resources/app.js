(function( $ ){
    

    $(document).ready(function () {

        // Set default price
        var first_option = $('#options button').first();
        first_option.addClass('active');

        $('#price').text(first_option.data('price'));

        // Call newsletter modal
        $('#newsletter').modal();

        // Activate change price
        $('.option-btn').on('click', function (e) {
            
            changePrice(e);
        });

        // Ativar modal da newsletter atraves do botao
        $('.newsletter-container button').on('click', function(){
            $('#newsletter').modal();
        })

        //Newsletter form validation
        var $form = document.forms['newsletter'];
        $($form).on('submit', function(e){
            e.preventDefault();
            var email = $form.elements['email'].value;

            if(emailValidation(email)){
                $success = $('.modal-body')[1];
                $form.style.display = 'none';
                if($success.classList.contains('success-message')){
                    $success.classList.remove('success-message');
                    //$form.submit();
                    setTimeout(function() { 
                        $('#newsletter').modal('hide');
                        $form.reset();
                        $success.classList.add('success-message');
                        $form.querySelector('.invalid-feedback').style.display = 'none';
                        $form.querySelector('input[name=email]').classList.remove('is-invalid');
                        $form.style.display = 'block';
                        }, 4000 );
                }
                
            } else {
                if($form.querySelector('.invalid-feedback').style.display != 'block' ) {
                    $form.querySelector('.invalid-feedback').style.display = 'block';
                }
                if(!$form.querySelector('input[name=email]').classList.contains('is-invalid')){
                    $form.querySelector('input[name=email]').classList.add('is-invalid');
                }
            }

        });

        //Wishlist button toggle
        $('.wishlist button').on('click', function(e){
            console.log(this.children[0].classList.contains('ion-md-heart-empty'));
            if(this.children[0].classList.contains('ion-md-heart-empty')){
                this.children[0].classList.remove('ion-md-heart-empty');
                this.children[0].classList.add('ion-md-heart');
            } else {
                this.children[0].classList.remove('ion-md-heart');
                this.children[0].classList.add('ion-md-heart-empty');
            }
        });

    })

    var changePrice = function (e) {
        // Change active classes
        var valor = e.originalEvent.toElement.dataset.price;
        $('.option-btn').removeClass('active');
        $(e.target).addClass('active');
        $('#price').text(valor);
    }

    var emailValidation = function(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }   

})( jQuery );