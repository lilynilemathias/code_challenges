$(document).ready(function(){
  console.log("Ready to go!");
  $('#edit-icon-wrap').click(startModal);
});

function startModal(){
  $('#overlay').css('visibility', 'visible');
  $('#modal').css('visibility', 'visible');
  $('#close-icon').click(closeModal);
  $('#update').click(updateBio);
  $('#cancel').click(cancelBio);
  $('.name-box').val($('#exec-name-1').text());
  $('.bio-box').val($('#exec-text-1').text());
  $('#add-manager').click(addManager);
  $('.empty-edit-box').empty();
  textCounter();
}

function closeModal(){
  $('#overlay').css('visibility', 'hidden');
  $('#modal').css('visibility', 'hidden');
}

function updateBio(){
  var name = $('.name-box').eq(0).val();
  var bio = $('.bio-box').eq(0).val();
  $('#exec-name-1').text(name);
  $('#exec-text-1').text(bio);
  var newProfiles = $('.empty-edit-box').children();
  for (var i = 0; i < newProfiles.length; i++){
    var profiles = $('.profile-wrap');
    var newDiv = $('<div>').addClass('profile');
    var profImage = $('<img>').attr('src', 'images/executive-default-image.png').addClass('profile-pic');
    var profText = $('<div>').addClass('profile-text');
    var profHeader = $('<h3>').attr('id', 'exec-name-' + (i+3)).text($('.name-box').eq(i + 1).val());
    var profBar = $('<hr>').addClass('profile-bar');
    var profBio = $('<p>').attr('id', 'exec-text-' + (i+3)).text($('.bio-box').eq(i + 1).val());
    profiles.append(newDiv.append(profImage).append(profText.append(profHeader).append(profBar).append(profBio)));
  }
  closeModal();
}

function cancelBio(){
  closeModal();
}

function textCounter(){
  var bioBoxCount = $('.bio-box').val().length;
  $('#chars-remaining').text(500 - bioBoxCount);
}

function addManager(){
  var editBox = $('.edit-box');
  var newBox = $('<div>').html(editBox.html());
  $('.empty-edit-box').append(newBox);
}

