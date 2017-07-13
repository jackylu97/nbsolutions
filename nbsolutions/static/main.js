define([
  'base/js/namespace',
  'notebook/js/celltoolbar',
  'jquery',
  'notebook/js/codecell',
  'base/js/events',
], function(Jupyter, celltoolbar, $, codecell, events) {
  'use strict';

  var CellToolbar = celltoolbar.CellToolbar;

  var toolbar_preset_name = 'Student Solutions';
  var solutions_ui_callback = CellToolbar.utils.checkbox_ui_generator(
    'Hide From Students',
    function setter (cell, value) {
      if (value) {
        cell.metadata.hide_from_student = true;
      }
      else {
        delete cell.metadata.hide_from_student;
      }
    },
    function getter (cell) {
        // if init_cell is undefined, it'll be interpreted as false anyway
      return cell.metadata.hide_from_student;
    }
  );

  var register = function(notebook) {
    CellToolbar.register_callback('nbsolutions.is_solution', solutions_ui_callback);

    var attachments_preset = [];
    attachments_preset.push('nbsolutions.is_solution');

    CellToolbar.register_preset(toolbar_preset_name, attachments_preset, notebook);

  };

  var load_extension = function() {
    register(Jupyter.notebook);
  };

  var extension = {
    load_jupyter_extension : load_extension,
    load_ipython_extension : load_extension
  };

  return extension;

});
