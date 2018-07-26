!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("nouislider")):"function"==typeof define&&define.amd?define(["exports","nouislider"],e):e(t.veeno={},t.noUiSlider)}(this,function(t,e){"use strict";function n(t){n.installed||(n.installed=!0,t.component("veeno",o))}e=e&&e.hasOwnProperty("default")?e.default:e;var i=["start","slide","update","change","set","end"],o={name:"veeno",props:{inputClass:{type:String,default:"custom-slider-input"},inputName:{type:String,default:"custom-slider-value"},options:{type:Object,default:function(){return{start:[20,80],connect:!0,range:{min:0,max:100}}}},vertical:{type:Boolean,default:!1},handles:{type:[Number,Array],default:null},connect:{type:[Boolean,Array],default:!1},tooltips:{type:[Boolean,Array],default:!1},step:{type:Number,default:0},range:{type:Object,required:!0,validator:function(t){return!Array.isArray(t)&&"object"==typeof t}},pipsy:{type:[Boolean,Object],default:function(){return!1},validator:function(t){return"boolean"==typeof t||!Array.isArray(t)&&"object"==typeof t}},rtl:{type:Boolean,default:!1},set:{type:[Number,Array],default:null,validator:function(t){return"number"==typeof t||Array.isArray(t)}},behaviour:{type:String,default:"tap",validator:function(t){return["drag","tap","fixed","snap","none"].indexOf(-1!==t)}},getset:{type:Function,default:function(){return function(){return""}}}},created:function(){this.optionz=Object.assign({},this.options,this.$props,this.vertical&&(this.options.orientation="vertical"),this.handles&&(this.options.start=this.handles),this.rtl&&(this.options.direction="rtl"),this.pipsy&&!Object.keys(this.pipsy).length?this.options.pips={mode:"range",density:5}:this.options.pips=this.pipsy)},mounted:function(){var t=this,n=this.$el;"vertical"===this.options.orientation&&(n.style.height="100%"),e.create(n,this.optionz),i.forEach(function(e){n.noUiSlider.on(e,function(n,i,o,s,a){t.$emit(e,{values:n,handle:i,unencoded:o,tap:s,positions:a}),"update"===e&&t.$emit("input",n[i])})}),this.getset(n)},render:function(t){var e=t("input",{attrs:{type:"hidden",name:this.name},class:this.inputClass}),n=t("span",a,this.$slots.default);return t("div",s,[e,n])},data:function(){return{optionz:Object,latestHandleValue:null}},watch:{set:function(t){this.$el.noUiSlider.set(t)}}},s={style:{position:"relative"},class:{veeno:!0},attrs:{name:"custom-slider"}},a={style:{position:"absolute",top:"-2.5rem"},class:{"veeno-span":!0}},r={install:n},l=null;"undefined"!=typeof window?l=window.Vue:"undefined"!=typeof global&&(l=global.Vue),l&&l.use(r),t.install=n,t.default=o,Object.defineProperty(t,"__esModule",{value:!0})});
