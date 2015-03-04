# Widths

The Predix Experience Widths module is a simple file of helper classes to drop widths onto elements such as grid systems.

## Dependencies

Px's Spacing Responsive module depends on two other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [px-functions-design](https://github.sw.ge.com/pxc/px-functions-design)

## Upstream dependency

The Widths module is also an upstream dependency for this module:

* [px-widths-responsive-design](https://github.sw.ge.com/pxc/px-widths-responsive-design)

## Installation

Install using Bower:

    bower install --save https://github.sw.ge.com/pxc/px-widths-design.git

Once installed, `@import` into your project's Sass file in its Trumps layer:

    @import "../px-spacing-responsive-design/trumps.widths";

See [px-getting-started](https://github.sw.ge.com/pxc/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Usage

Px’s widths classes are available in one of two formats. The default format is fraction-like, e.g.: `class="1/2"`.

The other available format is spoken-word, e.g. `class="one-half"`. Enable this by setting the `$inuit-use-fractions` flag to `true` prior to importing the module.

## Options

Depending on your choice of format, these classes are available (All widths are expressed in percentages, rounded to seven decimal points):

Whole:

* `1/1|one-whole`

Halves:

* `1/2|one-half`
* `2/4|two-quarters`
* `3/6|three-sixths`
* `4/8|four-eigths`
* `5/10|five-tenths`
* `6/12|six-twelfths`

Thirds:

* `1/3|one-third`
* `2/6|two-sixths`
* `3/9|three-ninths`
* `4/12|four-twelfths` 
* `2/3|two-thirds`
* `4/6|four-sixths`
* `6/9|six-ninths`
* `8/12|eight-twelfths`

Quarters:

* `1/4|one-quarter`
* `2/8|two-eigths`
* `3/12|three-twelfths`
* `3/4|three-quarters`
* `6/8|six-eighths`
* `9/12|nine-twelfths`

Fifths:

* `1/5|one-fifth`
* `2/10|two-tenths`
* `2/5|two-fifths`
* `4/10|four-tenths`
* `3/5|three-fifths`
* `6/10|six-tenths`
* `4/5|four-fifths`
* `8/10|eight-tenths`

Sixths:

* `1/6|one-sixth`
* `2/12|two-twelfths`
* `5/6|five-sixths`
* `10/12|ten-twelfths`

Eighths:

* `1/8|one-eighth`
* `3/8|three-eighths`
* `5/8|five-eighths`
* `7/8|seven-eighths`

Ninths:

* `1/9|one-ninth`
* `2/9|two-ninths`
* `4/9|four-ninths`
* `5/9|five-ninths`
* `7/9|seven-ninths`
* `8/9|eight-ninths`

Tenths:

* `1/10|one-tenth`
* `3/10|three-tenths`
* `7/10|seven-tenths`
* `9/10|nine-tenths`

Twelfths:

* `1/12|one-twelfth`
* `5/12|five-twelfths`
* `7/12|seven-twelfths`
* `11/12|eleven-twelfths`
