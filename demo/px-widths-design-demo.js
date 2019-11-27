/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-widths-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-widths-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-widths-design" description="The Predix UI Widths module is a series of width helper classes that you can use to size things like grid systems." layer="objects" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-widths-tools-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Divisions" choose-with="dropdown" choices="[
    &quot;whole&quot;,
    &quot;halves&quot;,
    &quot;thirds&quot;,
    &quot;quarters&quot;,
    &quot;sixths&quot;
  ]" default-choice="whole">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<div class\$="{{layoutItemClasses}}"></div>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>

<!-- 5: Set Usage HTML -->

<section slot="usage">
\`\`\`
<!-- Whole Division  -->
<div class="u-1/1"></div>


<!-- Halves Divisions  -->
<div class="u-1/2"></div>


<!-- Thirds Divisions  -->
<div class="u-1/3"></div>


<!-- Quarters Divisions  -->
<div class="u-1/4"></div>


<!-- Sixths Divisions  -->
<div class="u-1/6"></div>
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-widths-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    //call functions created below
    this.layoutItemClasses = this._layoutItemClasses();
    this.importCode = this._importCode();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _layoutItemClasses : function() {
    var opts = this.selectedOptions || {};
    if(opts.Divisions === "whole")     return "u-1/1";
    if(opts.Divisions === "halves")    return "u-1/2";
    if(opts.Divisions === "thirds")    return "u-1/3";
    if(opts.Divisions === "quarters")  return "u-1/4";
    if(opts.Divisions === "sixths")    return "u-1/6";
  },

  _importCode : function() {
    return '@import "px-widths-design/_trumps.widths.scss";';
  }
});
