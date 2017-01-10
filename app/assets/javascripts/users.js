/* global $*/
//Document ready.
$(document).on('turbolinks:load', function(){
//Set Stripe public key.
Stripe.setPublishableKey( $('meta[name='stripe-key']').attr('content') )
//When user clicks form submit button 
//prevent default submission behaviour.

//Collect the credit card fields.
//Send the card information to Stripe.
//Stripe will return a card token.
//Inject card token as hidden field into form.
//Submit form to our Rails app.
});