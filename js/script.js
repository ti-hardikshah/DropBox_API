/**
 * Chooser (Drop Box)
 * https://www.dropbox.com/developers/dropins/chooser/js
 */
 options = {
  success: function(files) {
    files.forEach(function(file) {
      add_img_to_list(file);
    });
  },
  cancel: function() {
    //optional
  },
  linkType: "preview", // "preview" or "direct"
  multiselect: true, // true or false
  extensions: ['.png', '.jpg'],
};

var button = Dropbox.createChooseButton(options);
document.getElementById("dropbox-container").appendChild(button);

function add_img_to_list(file) {
var li  = document.createElement('li');
var a   = document.createElement('a');
a.href = file.link;
var img = new Image();
var src = file.thumbnailLink;
src = src.replace("bounding_box=75", "bounding_box=256");
src = src.replace("mode=fit", "mode=crop");
img.src = src;
img.className = "th"
document.getElementById("img_list").appendChild(li).appendChild(a).appendChild(img);
}