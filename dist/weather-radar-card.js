import{LitElement as e,html as t,css as a}from"lit";import{property as i,customElement as n}from"lit/decorators.js";import{fireEvent as r}from"custom-card-helpers";import{ScopedRegistryHost as o}from"@lit-labs/scoped-registry-mixin";import{property as s,state as l,customElement as c}from"lit/decorators";import{FormfieldBase as m}from"@material/mwc-formfield/mwc-formfield-base.js";import{styles as d}from"@material/mwc-formfield/mwc-formfield.css.js";import{SelectBase as h}from"@material/mwc-select/mwc-select-base.js";import{ListBase as g}from"@material/mwc-list/mwc-list-base.js";import{ListItemBase as f}from"@material/mwc-list/mwc-list-item-base.js";import{MenuBase as p}from"@material/mwc-menu/mwc-menu-base.js";import{MenuSurfaceBase as u}from"@material/mwc-menu/mwc-menu-surface-base.js";import{RippleBase as w}from"@material/mwc-ripple/mwc-ripple-base.js";import{NotchedOutlineBase as _}from"@material/mwc-notched-outline/mwc-notched-outline-base.js";import{styles as v}from"@material/mwc-select/mwc-select.css";import{styles as y}from"@material/mwc-list/mwc-list.css";import{styles as b}from"@material/mwc-list//mwc-list-item.css";import{styles as x}from"@material/mwc-ripple/mwc-ripple.css";import{styles as k}from"@material/mwc-menu/mwc-menu.css";import{styles as $}from"@material/mwc-menu/mwc-menu-surface.css";import{styles as L}from"@material/mwc-notched-outline/mwc-notched-outline.css";import{SwitchBase as C}from"@material/mwc-switch/deprecated/mwc-switch-base.js";import{styles as R}from"@material/mwc-switch/deprecated/mwc-switch.css";import{TextFieldBase as S}from"@material/mwc-textfield/mwc-textfield-base.js";import{styles as T}from"@material/mwc-textfield/mwc-textfield.css";import{SliderSingleBase as I}from"@material/mwc-slider/slider-single-base.js";import{styles as V}from"@material/mwc-slider/mwc-slider.css";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function z(e,t,a,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,a,o):n(t,a))||o);return r>3&&o&&Object.defineProperty(t,a,o),o}const E={"mwc-formfield":class extends m{static get styles(){return d}}},M={"mwc-select":class extends h{static get styles(){return v}},"mwc-list":class extends g{static get styles(){return y}},"mwc-list-item":class extends f{static get styles(){return b}},"mwc-ripple":class extends w{static get styles(){return x}},"mwc-menu":class extends p{static get styles(){return k}},"mwc-menu-surface":class extends u{static get styles(){return $}},"mwc-notched-outline":class extends _{static get styles(){return L}}},B={"mwc-switch":class extends C{static get styles(){return R}},"mwc-ripple":class extends w{static get styles(){return x}}},O={"mwc-textfield":class extends S{static get styles(){return T}},"mwc-notched-outline":class extends _{static get styles(){return L}}},A={"mwc-slider":class extends I{static get styles(){return V}},"mwc-ripple":class extends w{static get styles(){return x}}};let D=class extends(o(e)){constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){return this._config?.name||""}get _entity(){return this._config?.entity||""}get _show_warning(){return this._config?.show_warning||!1}get _show_error(){return this._config?.show_error||!1}render(){if(!this.hass||!this._helpers)return t``;let e;return e=this._config,t`
      <div class="values">
        <mwc-textfield
            label="Card Title (optional)"
            .value=${e.card_title?e.card_title:""}
            .configValue=${"card_title"}
            @input=${this._valueChangedString}
        ></mwc-textfield>
        <mwc-select label="Data Source (optional)" .configValue=${"data_source"} .value=${e.data_source?e.data_source:""} @selected=${this._valueChangedString} @closed=${e=>e.stopPropagation()}
            >
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="RainViewer-Original">RainViewer - Original</mwc-list-item>
            <mwc-list-item value="RainViewer-UniversalBlue">RainViewer - Universal Blue</mwc-list-item>
            <mwc-list-item value="RainViewer-TITAN">RainViewer - TITAN</mwc-list-item>
            <mwc-list-item value="RainViewer-TWC">RainViewer - The Weather Channel</mwc-list-item>
            <mwc-list-item value="RainViewer-Meteored">RainViewer - Meteored</mwc-list-item>
            <mwc-list-item value="RainViewer-NEXRAD">RainViewer - NEXRAD Level III</mwc-list-item>
            <mwc-list-item value="RainViewer-Rainbow">RainViewer - Rainbow @ SELEX-IS</mwc-list-item>
            <mwc-list-item value="RainViewer-DarkSky">RainViewer - Dark Sky</mwc-list-item>
        </mwc-select>
        <div class="side-by-side">
          <mwc-select label="Map Style (optional)" .configValue=${"map_style"} .value=${e.map_style?e.map_style:""} @selected=${this._valueChangedString} @closed=${e=>e.stopPropagation()}
            >
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="Light">Light</mwc-list-item>
            <mwc-list-item value="Voyager">Voyager</mwc-list-item>
            <mwc-list-item value="Satellite">Satellite</mwc-list-item>
            <mwc-list-item value="Dark">Dark</mwc-list-item>
          </mwc-select>
          <mwc-select label="Zoom Level (optional)" .configValue=${"zoom_level"} .value=${e.zoom_level?e.zoom_level.toString():null} @selected=${this._valueChangedNumber} @closed=${e=>e.stopPropagation()}
            >
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="4">4</mwc-list-item>
            <mwc-list-item value="5">5</mwc-list-item>
            <mwc-list-item value="6">6</mwc-list-item>
            <mwc-list-item value="7">7</mwc-list-item>
            <mwc-list-item value="8">8</mwc-list-item>
            <mwc-list-item value="9">9</mwc-list-item>
            <mwc-list-item value="10">10</mwc-list-item>
          </mwc-select>
        </div>
        <mwc-textfield
            label="Map Centre Latitude (optional)"
            .value=${e.center_latitude?e.center_latitude:""}
            .configValue=${"center_latitude"}
            @input=${this._valueChangedNumber}
        ></mwc-textfield>
        <mwc-textfield
            label="Map Centre Longitude (optional)"
            .value=${e.center_longitude?e.center_longitude:""}
            .configValue=${"center_longitude"}
            @input=${this._valueChangedNumber}
        ></mwc-textfield>
        <mwc-textfield
            label="Marker Latitude (optional)"
            .value=${e.marker_latitude?e.marker_latitude:""}
            .configValue=${"marker_latitude"}
            @input=${this._valueChangedNumber}
        ></mwc-textfield>
        <mwc-textfield
            label="Marker Longitude (optional)"
            .value=${e.marker_longitude?e.marker_longitude:""}
            .configValue=${"marker_longitude"}
            @input=${this._valueChangedNumber}
        ></mwc-textfield>
        <div class="side-by-side">
          <mwc-textfield
              label="Frame Count (optional)"
              .value=${e.frame_count?e.frame_count:""}
              .configValue=${"frame_count"}
              @input=${this._valueChangedNumber}
          ></mwc-textfield>
          <mwc-textfield
              label="Frame Delay(ms) (optional)"
              .value=${e.frame_delay?e.frame_delay:""}
              .configValue=${"frame_delay"}
              @input=${this._valueChangedNumber}
          ></mwc-textfield>
          <mwc-textfield
              label="Restart Delay(ms) (optional)"
              .value=${e.restart_delay?e.restart_delay:""}
              .configValue=${"restart_delay"}
              @input=${this._valueChangedNumber}
          ></mwc-textfield>
        </div>
        <div class="side-by-side">
          <mwc-formfield .label=${"Static Map"}>
            <mwc-switch
              .checked=${!0===e.static_map}
              .configValue=${"static_map"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Zoom"}>
            <mwc-switch
              .checked=${!0===e.show_zoom}
              .configValue=${"show_zoom"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Square Map"}>
            <mwc-switch
              .checked=${!0===e.square_map}
              .configValue=${"square_map"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
        </div>
        <div class="side-by-side">
          <mwc-formfield .label=${"Show Marker"}>
            <mwc-switch
              .checked=${!0===e.show_marker}
              .configValue=${"show_marker"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Playback"}>
            <mwc-switch
              .checked=${!0===e.show_playback}
              .configValue=${"show_playback"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Recenter"}>
            <mwc-switch
              .checked=${!0===e.show_recenter}
              .configValue=${"show_recenter"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
        </div>
        <div class="side-by-side">
          <mwc-formfield .label=${"Show Scale"}>
            <mwc-switch
              .checked=${!0===e.show_scale}
              .configValue=${"show_scale"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Range"}>
            <mwc-switch
              .checked=${!0===e.show_range}
              .configValue=${"show_range"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield .label=${"Show Extra Labels"}>
            <mwc-switch
              .checked=${!0===e.extra_labels}
              .configValue=${"extra_labels"}
              @change=${this._valueChangedSwitch}
            ></mwc-switch>
          </mwc-formfield>
        </div>
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChangedSwitch(e){const t=e.target;this._config&&this.hass&&t&&(this._config={...this._config,[t.configValue]:t.checked},r(this,"config-changed",{config:this._config}))}_valueChangedNumber(e){if(!this._config||!this.hass)return;const t=e.target;this[`_${t.configValue}`]!==t.value&&(t.configValue&&(""===t.value||null===t.value?delete this._config[t.configValue]:this._config={...this._config,[t.configValue]:Number(t.value)}),r(this,"config-changed",{config:this._config}))}_valueChangedString(e){if(!this._config||!this.hass)return;const t=e.target;this[`_${t.configValue}`]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config={...this._config,[t.configValue]:t.value}),r(this,"config-changed",{config:this._config}))}};D.elementDefinitions={...O,...M,...B,...E,...A},D.styles=a`
    mwc-select,
    mwc-textfield {
      margin-bottom: 16px;
      display: block;
    }
    mwc-formfield {
      padding-bottom: 8px;
    }
    mwc-switch {
      --mdc-theme-secondary: var(--switch-checked-color);
    }
    .option {
      padding: 4px 0px;
      cursor: pointer;
    }
    .row {
      display: flex;
      margin-bottom: -14px;
      pointer-events: none;
    }
    .title {
      padding-left: 16px;
      margin-top: -6px;
      pointer-events: none;
    }
    .secondary {
      padding-left: 40px;
      color: var(--secondary-text-color);
      pointer-events: none;
    }
    .values {
      padding-left: 16px;
      background: var(--secondary-background-color);
    }
    ha-switch {
      padding: 16px 6px;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
  `,z([s({attribute:!1})],D.prototype,"hass",void 0),z([l()],D.prototype,"_config",void 0),z([l()],D.prototype,"_helpers",void 0),D=z([c("weather-radar-card-editor")],D);var P={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},U={common:P},j={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},N={common:j};const H={en:Object.freeze({__proto__:null,common:P,default:U}),nb:Object.freeze({__proto__:null,common:j,default:N})};function W(e,t="",a=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=e.split(".").reduce(((e,t)=>e[t]),H[i])}catch(t){n=e.split(".").reduce(((e,t)=>e[t]),H.en)}return void 0===n&&(n=e.split(".").reduce(((e,t)=>e[t]),H.en)),""!==t&&""!==a&&(n=n.replace(t,a)),n}console.info(`%c  WEATHER-RADAR-CARD \n%c  ${W("common.version")} 2.1.2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"weather-radar-card",name:"Weather Radar Card",description:"A rain radar card using the new tiled images from RainViewer"});let Z=class extends e{constructor(){super(...arguments),this.isPanel=!1}static async getConfigElement(){return document.createElement("weather-radar-card-editor")}static getStubConfig(){return{}}setConfig(e){this._config=e}getCardSize(){return 10}shouldUpdate(){return!0}render(){if(this._config.show_warning)return this.showWarning(W("common.show_warning"));const e=`\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <title>Weather Radar Card</title>\n          <meta charset="utf-8" />\n          <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n          <link rel="stylesheet" href="/local/community/weather-radar-card/leaflet.css"/>\n          <link rel="stylesheet" href="/local/community/weather-radar-card/leaflet.toolbar.min.css"/>\n          <script src="/local/community/weather-radar-card/leaflet.js"><\/script>\n          <script src="/local/community/weather-radar-card/leaflet.toolbar.min.js"><\/script>\n          <style>\n            body {\n              margin: 0;\n              padding: 0;\n            }\n            .text-container {\n              font: 12px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;\n              margin: 0px 2.5px 0px 10px;\n            }\n            .text-container-small {\n              font: 10px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;\n              margin: 0px 10px 0px 2.5px;\n            }\n            .light-links a {\n              color: blue;\n            }\n            .dark-links a {\n              color: steelblue;\n            }\n            #timestamp {\n              font: 14px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;\n              margin: 0px 0px;\n              padding-top: 5px;\n            }\n            #color-bar {\n              margin: 0px 0px;\n            }\n          </style>\n        </head>\n        <body onresize="resizeWindow()">\n          <span>\n            <div id="color-bar" style="height: 8px;">\n              <img id="img-color-bar" height="8" style="vertical-align: top" />\n            </div>\n            <div id="mapid" style="height: ${this.isPanel?this.offsetParent?this.offsetParent.clientHeight-48-2-(!0===this.editMode?59:0)+"px":"540px":void 0!==this._config.square_map&&this._config.square_map?this.getBoundingClientRect().width+"px":"492px"};"></div>\n            <div id="div-progress-bar" style="height: 8px; background-color: white;">\n              <div id="progress-bar" style="height:8px;width:0; background-color: #ccf2ff;"></div>\n            </div>\n            <div id="bottom-container" class="light-links" style="height: 32px; background-color: white;">\n              <div id="timestampid" class="text-container" style="width: 120px; height: 32px; float:left; position: absolute;">\n                <p id="timestamp"></p>\n              </div>\n              <div id="attribution" class="text-container-small" style="height: 32px; float:right;">\n                <span class="Map__Attribution-LjffR DKiFh" id="attribution"\n                  ></span\n                >\n              </div>\n            </div>\n            <script>\n              const maxZoom = 10;\n              const minZoom = 3;\n              var radarOpacity = 1.0;\n              var zoomLevel = ${void 0!==this._config.zoom_level?this._config.zoom_level:7};\n              var centerLat = ${void 0!==this._config.center_latitude?this._config.center_latitude:this.hass.config.latitude};\n              var centerLon = ${void 0!==this._config.center_longitude?this._config.center_longitude:this.hass.config.longitude};\n              var markerLat = (${this._config.marker_latitude}) ? ${this._config.marker_latitude} : centerLat;\n              var markerLon = (${this._config.marker_longitude}) ? ${this._config.marker_longitude} : centerLon;\n              var timeout = ${void 0!==this._config.frame_delay?this._config.frame_delay:500};\n              var restartDelay = ${void 0!==this._config.restart_delay?this._config.restart_delay:1e3};\n              var frameCount = ${null!=this._config.frame_count?this._config.frame_count:10};\n              var tileURL = '${void 0!==this._config.data_source?this._config.data_source:"RainViewer-Original"}';\n              switch (tileURL) {\n                case "RainViewer-Original":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/1/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-original.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-UniversalBlue":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/2/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-universalblue.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-TITAN":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/3/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-titan.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-TWC":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/4/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-twc.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-Meteored":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/5/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-meteored.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-NEXRAD":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/6/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-nexrad.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-Rainbow":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/7/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-rainbow.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n                case "RainViewer-DarkSky":\n                  var tileURL = 'https://tilecache.rainviewer.com/v2/radar/{time}/256/{z}/{x}/{y}/8/1_0.png';\n                  document.getElementById("img-color-bar").src = "/local/community/weather-radar-card/radar-colour-bar-darksky.png";\n                  var framePeriod = 300000;\n                  var frameLag = 60000;\n                  break;\n              }\n              resizeWindow();\n              var labelSize = ${void 0!==this._config.extra_labels&&this._config.extra_labels?128:256};\n              var labelZoom = ${void 0!==this._config.extra_labels&&this._config.extra_labels?1:0};\n              var map_style = '${void 0!==this._config.map_style&&null!==this._config.map_style?this._config.map_style.toLowerCase():"light"}';\n              switch (map_style) {\n                case "dark":\n                  var basemap_url = 'https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}.png';\n                  var basemap_style = 'dark_nolabels';\n                  var label_url = 'https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png';\n                  var label_style = 'dark_only_labels';\n                  var svg_icon = 'home-circle-light.svg';\n                  var attribution = '<a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a><br>Radar data by <a href="https://rainviewer.com" target="_blank">RainViewer</a>';\n                  break;\n                case "voyager":\n                  var basemap_url = 'https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}.png';\n                  var basemap_style = 'rastertiles/voyager_nolabels';\n                  var label_url = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png';\n                  var label_style = 'rastertiles/voyager_only_labels';\n                  var svg_icon = 'home-circle-dark.svg';\n                  var attribution = '<a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a><br>Radar data by <a href="https://rainviewer.com" target="_blank">RainViewer</a>';\n                  break;\n                case 'satellite':\n                  var basemap_url = 'https://server.arcgisonline.com/ArcGIS/rest/services/{style}/MapServer/tile/{z}/{y}/{x}';\n                  var basemap_style = 'World_Imagery';\n                  var label_url = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png';\n                  var label_style = 'proton_labels_std';\n                  var svg_icon = 'home-circle-dark.svg';\n                  var attribution = '<a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="http://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9" target="_blank">ESRI</a><br>Radar data by <a href="https://rainviewer.com" target="_blank">RainViewer</a>';\n                  break;\n                case "light":\n                default:\n                  var basemap_url = 'https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}.png';\n                  var basemap_style = 'light_nolabels';\n                  var label_url = 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png';\n                  var label_style = 'light_only_labels';\n                  var svg_icon = 'home-circle-dark.svg';\n                  var attribution = '<a href="https://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> | &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a><br>Radar data by <a href="https://rainviewer.com" target="_blank">RainViewer</a>';\n              }\n\n              var idx = 0;\n              var run = true;\n              var doRadarUpdate = false;\n              var radarMap = L.map('mapid', {\n                zoomControl: ${!0===this._config.show_zoom&&!0!==this._config.static_map?"true":"false"},\n                ${!0===this._config.static_map?"scrollWheelZoom: false,                 doubleClickZoom: false,                 boxZoom: false,                 dragging: false,                 keyboard: false,                 touchZoom: false,":"wheelPxPerZoomLevel: 120,"}\n                attributionControl: false,\n                minZoom: minZoom,\n                maxZoom: maxZoom,\n              }).setView([centerLat, centerLon], zoomLevel);\n              var radarImage = [frameCount];\n              var radarTime = [frameCount];\n              var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n              var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\n              var d = new Date();\n              d.setTime(Math.trunc((d.valueOf() - frameLag) / framePeriod) * framePeriod - (frameCount - 1) * framePeriod);\n\n              document.getElementById("progress-bar").style.width = barSize+"px";\n              document.getElementById("attribution").innerHTML = attribution;\n\n              var t2actions = [];\n\n              if (${!0===this._config.show_recenter&&!0!==this._config.static_map}) {\n                var recenterAction = L.Toolbar2.Action.extend({\n                  options: {\n                      toolbarIcon: {\n                          html: '<img src="/local/community/weather-radar-card/recenter.png" width="24" height="24">',\n                          tooltip: 'Re-center'\n                      }\n                  },\n\n                  addHooks: function () {\n                    radarMap.setView([centerLat, centerLon], zoomLevel);\n                  }\n                });\n                t2actions.push(recenterAction);\n              }\n\n              if (${!0===this._config.show_playback}) {\n                var playAction = L.Toolbar2.Action.extend({\n                  options: {\n                      toolbarIcon: {\n                          html: '<img id="playButton" src="/local/community/weather-radar-card/pause.png" width="24" height="24">',\n                          tooltip: 'Pause'\n                      }\n                  },\n\n                  addHooks: function () {\n                    run = !run;\n                    if (run) {\n                      document.getElementById("playButton").src = "/local/community/weather-radar-card/pause.png"\n                    } else {\n                      document.getElementById("playButton").src = "/local/community/weather-radar-card/play.png"\n                    }\n                  }\n                });\n                t2actions.push(playAction);\n\n                var skipbackAction = L.Toolbar2.Action.extend({\n                  options: {\n                      toolbarIcon: {\n                          html: '<img src="/local/community/weather-radar-card/skip-back.png" width="24" height="24">',\n                          tooltip: 'Previous Frame'\n                      }\n                  },\n\n                  addHooks: function () {\n                    skipBack();\n                  }\n                });\n                t2actions.push(skipbackAction);\n\n                var skipnextAction = L.Toolbar2.Action.extend({\n                  options: {\n                      toolbarIcon: {\n                          html: '<img src="/local/community/weather-radar-card/skip-next.png" width="24" height="24">',\n                          tooltip: 'Next Frame'\n                      }\n                  },\n\n                  addHooks: function () {\n                    skipNext();\n                  }\n                });\n                t2actions.push(skipnextAction);\n              }\n\n              if (t2actions.length > 0) {\n                new L.Toolbar2.Control({\n                  position: 'bottomright',\n                  actions: t2actions\n                }).addTo(radarMap);\n              }\n\n              if (${!0===this._config.show_scale}) {\n                L.control.scale({\n                  position: 'bottomleft',\n                  metric: ${"km"===this.hass.config.unit_system.length},\n                  imperial: ${"mi"===this.hass.config.unit_system.length},\n                  maxWidth: 100,\n                }).addTo(radarMap);\n\n                if ((map_style === "dark") || (map_style == "satellite")) {\n                  var scaleDiv = this.document.getElementsByClassName("leaflet-control-scale-line")[0];\n                  scaleDiv.style.color = "#BBB";\n                  scaleDiv.style.borderColor = "#BBB";\n                  scaleDiv.style.background = "#00000080";\n                }\n              }\n\n              if ((map_style === "dark") || (map_style == "satellite")) {\n                this.document.getElementById("div-progress-bar").style.background = "#1C1C1C";\n                this.document.getElementById("progress-bar").style.background = "steelblue";\n                this.document.getElementById("bottom-container").style.background = "#1C1C1C";\n                this.document.getElementById("bottom-container").style.color = "#DDDDDD";\n                this.document.getElementById("bottom-container").className = "dark-links";\n              }\n\n              L.tileLayer(\n                basemap_url,\n                {\n                  style: basemap_style,\n                  subdomains: 'abcd',\n                  detectRetina: true,\n                  tileSize: 256,\n                  zoomOffset: 0,\n                },\n              ).addTo(radarMap);\n\n              for (i = 0; i < frameCount; i++) {\n                t = d.valueOf()/1000 + i * (framePeriod/1000);\n                radarImage[i] = L.tileLayer(\n                  tileURL,\n                  {\n                    time: t,\n                    detectRetina: true,\n                    tileSize: 256,\n                    zoomOffset: 0,\n                    opacity: 0,\n                    frame: i,\n                  },\n                );\n                radarTime[i] = getRadarTimeString(d.valueOf() + i * framePeriod);\n              }\n\n              for (i = 0; i < (frameCount - 1); i++) {\n                radarImage[i].on('load', function(e) {\n                  radarImage[e.target.options.frame + 1].addTo(radarMap);\n                });\n              }\n\n              radarImage[0].addTo(radarMap);\n\n              radarImage[idx].setOpacity(radarOpacity);\n              document.getElementById('timestamp').innerHTML = radarTime[idx];\n              d.setTime(d.valueOf() + (frameCount - 1) * framePeriod);\n\n              townLayer = L.tileLayer(\n                label_url,\n                {\n                  subdomains: 'abcd',\n                  detectRetina: false,\n                  tileSize: labelSize,\n                  zoomOffset: labelZoom,\n                },\n              ).addTo(radarMap);\n              townLayer.setZIndex(2);\n\n              ${!0===this._config.show_marker?"var myIcon = L.icon({                        iconUrl: '/local/community/weather-radar-card/'+svg_icon,                        iconSize: [16, 16],                      });                      L.marker([markerLat, markerLon], { icon: myIcon, interactive: false }).addTo(radarMap);":""}\n\n              ${!0===this._config.show_range?"km"===this.hass.config.unit_system.length?"L.circle([markerLat, markerLon], { radius: 50000, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);           L.circle([markerLat, markerLon], { radius: 100000, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);           L.circle([markerLat, markerLon], { radius: 200000, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);":"L.circle([markerLat, markerLon], { radius: 48280, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);           L.circle([markerLat, markerLon], { radius: 96561, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);           L.circle([markerLat, markerLon], { radius: 193121, weight: 1, fill: false, opacity: 0.3, interactive: false }).addTo(radarMap);":""}\n\n        setTimeout(function() {\n          nextFrame();\n        }, timeout);\n        setUpdateTimeout();\n\n        function setUpdateTimeout() {\n          d.setTime(d.valueOf() + framePeriod);\n          x = new Date();\n          setTimeout(triggerRadarUpdate, d.valueOf() - x.valueOf() + frameLag);\n        }\n\n        function triggerRadarUpdate() {\n          doRadarUpdate = true;\n        }\n\n        function updateRadar() {\n          t = d.valueOf()/1000;\n          newLayer = L.tileLayer(tileURL, {\n            time: t,\n            maxZoom: maxZoom,\n            tileSize: 256,\n            zoomOffset: 0,\n            opacity: 0,\n          });\n          newLayer.addTo(radarMap);\n          newTime = getRadarTimeString(d.valueOf());\n\n          radarImage[0].remove();\n          for (i = 0; i < frameCount - 1; i++) {\n            radarImage[i] = radarImage[i + 1];\n            radarTime[i] = radarTime[i + 1];\n          }\n          radarImage[frameCount - 1] = newLayer;\n          radarTime[frameCount - 1] = newTime;\n          idx = 0;\n          doRadarUpdate = false;\n\n          setUpdateTimeout();\n        }\n\n        function getRadarTime(date) {\n          x = new Date(date);\n          return (\n            x.getUTCFullYear().toString() +\n            (x.getUTCMonth() + 1).toString().padStart(2, '0') +\n            x\n              .getUTCDate()\n              .toString()\n              .padStart(2, '0') +\n            x\n              .getUTCHours()\n              .toString()\n              .padStart(2, '0') +\n            x\n              .getUTCMinutes()\n              .toString()\n              .padStart(2, '0')\n          );\n        }\n\n        function getRadarTimeString(date) {\n          x = new Date(date);\n          return (\n            weekday[x.getDay()] +\n            ' ' +\n            month[x.getMonth()] +\n            ' ' +\n            x\n              .getDate()\n              .toString()\n              .padStart(2, '0') +\n            ' ' +\n            x\n              .getHours()\n              .toString()\n              .padStart(2, '0') +\n            ':' +\n            x\n              .getMinutes()\n              .toString()\n              .padStart(2, '0')\n          );\n        }\n\n        function nextFrame() {\n          if (run) {\n            nextImage();\n          }\n          setTimeout(function() {\n            nextFrame();\n          }, (idx == frameCount) ? restartDelay : timeout);\n        }\n\n        function skipNext() {\n          if (idx == frameCount-1) {\n            idx += 1;\n          }\n          nextImage();\n        }\n\n        function skipBack() {\n          if (idx == frameCount) {\n            radarImage[frameCount - 1].setOpacity(0);\n            idx -= 1;\n          } else if (idx < frameCount) {\n            radarImage[idx].setOpacity(0);\n          }\n          idx -= 1;\n          if (doRadarUpdate && idx == 1) {\n            updateRadar();\n          }\n          if (idx < 0) {\n            idx = frameCount-1;\n          }\n          document.getElementById("progress-bar").style.width = (idx+1)*barSize+"px";\n          document.getElementById('timestamp').innerHTML = radarTime[idx];\n          radarImage[idx].setOpacity(radarOpacity);\n        }\n\n        function nextImage() {\n          if (idx == frameCount) {\n            radarImage[frameCount - 1].setOpacity(0);\n          } else if (idx < frameCount - 1) {\n            radarImage[idx].setOpacity(0);\n          }\n          idx += 1;\n          if (doRadarUpdate && idx == 1) {\n            updateRadar();\n          }\n          if (idx == frameCount + 1) {\n            idx = 0;\n          }\n          if (idx != frameCount + 1) {\n            document.getElementById("progress-bar").style.width = (idx+1)*barSize+"px";\n          }\n          if (idx < frameCount) {\n            document.getElementById('timestamp').innerHTML = radarTime[idx];\n            radarImage[idx].setOpacity(radarOpacity);\n          }\n        }\n\n        function resizeWindow() {\n          this.document.getElementById("color-bar").width = this.frameElement.offsetWidth;\n          this.document.getElementById("img-color-bar").width = this.frameElement.offsetWidth;\n          this.document.getElementById("mapid").width = this.frameElement.offsetWidth;\n          this.document.getElementById("mapid").height = ${this.isPanel?this.offsetParent?this.offsetParent.clientHeight-48-2-(!0===this.editMode?59:0):492:void 0!==this._config.square_map&&this._config.square_map?this.getBoundingClientRect().width:492}\n          this.document.getElementById("div-progress-bar").width = this.frameElement.offsetWidth;\n          this.document.getElementById("bottom-container").width = this.frameElement.offsetWidth;\n          barSize = this.frameElement.offsetWidth/frameCount;\n        }\n        <\/script>\n            </span>\n        </body>\n      </html>\n    `,a=this.isPanel?this.offsetParent?this.offsetParent.clientHeight-2-(!0===this.editMode?59:0)+"px":"540px":void 0!==this._config.square_map&&this._config.square_map?`${this.getBoundingClientRect().width+48}px`:"540px",i=void 0!==this._config.card_title?t`<div id="card-title">${this._config.card_title}</div>`:"";return t`
      <style>
        ${this.styles}
      </style>
      <ha-card class="type-iframe" @click="${this._handleClick}">
        ${i}
        <div id="root" style="padding-top: ${a}">
          <iframe srcdoc=${e} scrolling="no"></iframe>
        </div>
      </ha-card>
    `}_handleClick(){const e={entity:this._config.entity,tap_action:{action:this._config.tap_action?this._config.tap_action:"more-info",navigation_path:this._config.navigation_path,url_path:this._config.url_path,data:this._config.data,pipeline_id:this._config.pipeline_id}},t=new Event("hass-action",{bubbles:!0,composed:!0});t.detail={config:e,action:"tap"},dispatchEvent(t)}showWarning(e){return t`
      <hui-warning>${e}</hui-warning>
    `}showError(e){const a=document.createElement("hui-error-card");return a.setConfig({type:"error",error:e,origConfig:this._config}),t`
      ${a}
    `}get styles(){return a`
      .text-container {
        font: 12px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;
      }
      #timestamp {
        margin: 2px 0px;
      }
      #color-bar {
        margin: 0px 0px;
      }
      ha-card {
        overflow: hidden;
      }
      #root {
        width: 100%;
        position: relative;
      }
      iframe {
        position: absolute;
        border: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      #card-title {
        margin: 8px 0px 4px 8px;
        font-size: 1.5em;
      }
    `}};z([i({type:Boolean,reflect:!0})],Z.prototype,"isPanel",void 0),z([i({attribute:!1})],Z.prototype,"hass",void 0),z([i({attribute:!1})],Z.prototype,"_config",void 0),z([i({attribute:!1})],Z.prototype,"editMode",void 0),Z=z([n("weather-radar-card")],Z);export{Z as WeatherRadarCard};
