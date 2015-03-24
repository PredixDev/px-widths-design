# Widths

The Predix Experience Widths module is a simple file of helper classes to drop widths onto elements such as grid systems.

## Dependencies

Px's Spacing Responsive module depends on two other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)
* [px-widths-tools-design](https://github.sw.ge.com/pxc/px-widths-tools-design)

## Upstream dependency

The Widths module is also an upstream dependency for this module:

* [px-widths-responsive-design](https://github.sw.ge.com/pxc/px-widths-responsive-design)

## Installation

Install using Bower:

    bower install --save https://github.sw.ge.com/pxc/px-widths-design.git

Once installed, `@import` into your project's Sass file in its Trumps layer:

    @import "../px-widths-design/trumps.widths";

See [px-getting-started](https://github.sw.ge.com/pxc/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Usage

By default the widths module will create wholes, halves, thirds, quarters, and fifths nomenclatures for width percentage classes.

## Options

Depending on your choice of format, these classes are available by default (All widths are expressed in percentages, rounded to seven decimal points):

Whole:

* `u-1/1|u-1-of-1`

Halves:

* `u-1/2|u-1-of-2`

Thirds:

* `u-1/3|u-1-of-3`
* `u-2/3|u-2-of-3`

Quarters:

* `u-1/4|u-1-of-4`
* `u-2/4|u-2-of-4`
* `u-3/4|u-3-of-4`

Fifths:

* `u-1/5|u-1-of-5`
* `u-2/5|u-2-of-5`
* `u-3/5|u-3-of-5`
* `u-4/5|u-4-of-5`
