define([
  'base/js/namespace',
  'notebook/js/celltoolbar',
  'jquery'
], function(Jupyter, celltoolbar, $) {
  'use strict';

  var CellToolbar = celltoolbar.CellToolbar;

  // first param reference to a DOM div
  // second param reference to the cell.
  var toggle =  function(div, cell) {
    var button_container = $('div');

    // let's create a button that show the  current value of the metadata
    var button = $('<div/>').button({label:String(cell.metadata.foo)});

    // On click, change the metadata value and update the button label
    button.click(function(){
      var v = cell.metadata.foo;
      cell.metadata.foo = !v;
      button.button("option", "label", String(!v));
    })

    // add the button to the DOM div.
    button_container.append(button);
  };

  var load_extension = function() {
    CellToolbar.register_callback('foo', toggle);
  };

  var extension = {
    load_jupyter_extension : load_extension,
    load_ipython_extension : load_extension
  };
  return extension;

});
