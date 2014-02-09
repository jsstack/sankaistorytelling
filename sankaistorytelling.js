Fragments = new Meteor.Collection("fragments");

if (Meteor.isClient) {
  Template.story.fragments = function() {
    return Fragments.find({}, {sort: {dateCreated: 1}});
  };
  
  Template.story.events({
    'click input.tell' : function () {
      var $textarea = $("textarea.editor");
      Fragments.insert({text: $textarea.val(), dateCreated: new Date()});
      $textarea.val("");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
