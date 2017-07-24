# nbsolutions

![Screenshot](Screenshot.png)

NB Solutions is a Jupyter notebook extension that allows the user to mark cells
as 'solution' cells not meant to be viewed by students. It also adds a toolbar
button that opens 'Student View', and hides all marked cells in the current
notebook. Accessed through View -> Cell Toolbar -> Student Solutions.

### More Details

Checking 'Hide From Students' adds a tag 'hide_from_student' that can also be
viewed while inside the 'Tags' view (View -> Cell Toolbar -> Student Solutions);
this was an intentional design choice -- changes while in the tags view will
also be reflected in the checkbox UI of the 'Student View'.

## Installation

Using pip (add --sys-prefix if installing in local environment):

```
pip install nbsolutions
jupyter nbextension install --py nbsolutions (--sys-prefix)
```

To enable this extension for all notebooks:

```
jupyter nbextension enable --py nbsolutions (--sys-prefix)
```
