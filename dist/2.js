webpackJsonp([2],{

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(41);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(34);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(35);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(43);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(42);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(11);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(91);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _reactDropzone = __webpack_require__(603);
  
  var _reactDropzone2 = _interopRequireDefault(_reactDropzone);
  
  var _shared = __webpack_require__(318);
  
  var _shared2 = _interopRequireDefault(_shared);
  
  var _styles = __webpack_require__(726);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ImageDropZone = function (_Component) {
    (0, _inherits3.default)(ImageDropZone, _Component);
  
    function ImageDropZone() {
      (0, _classCallCheck3.default)(this, ImageDropZone);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ImageDropZone).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ImageDropZone, [{
      key: 'onDrop',
      value: function onDrop(files) {
        this.props.onDrop(files[0]);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactDropzone2.default,
          { onDrop: this.onDrop.bind(this) },
          _react2.default.createElement(
            'div',
            { className: _styles2.default['middle-align'] },
            _react2.default.createElement('span', { className: _styles2.default['align-helper'] }),
            this.props.fileUrl ? _react2.default.createElement('img', { className: _styles2.default['fill-box'], src: this.props.fileUrl }) : _react2.default.createElement(
              'span',
              { className: _styles2.default['fill-box'] },
              this.props.placeHolder
            )
          )
        );
      }
    }]);
    return ImageDropZone;
  }(_react.Component);
  
  ImageDropZone.propTypes = {
    onDrop: _react.PropTypes.func.isRequired,
    fileUrl: _react.PropTypes.string,
    placeHolder: _react.PropTypes.string
  };
  
  var Page = function (_Component2) {
    (0, _inherits3.default)(Page, _Component2);
  
    function Page() {
      (0, _classCallCheck3.default)(this, Page);
  
      var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Page).call(this));
  
      _this2.state = {
        image: { preview: null },
        trimap: { preview: null }
      };
      return _this2;
    }
  
    (0, _createClass3.default)(Page, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = 'shared matting';
  
        var canvas = document.getElementById('matting-canvas');
        this.runner = new _shared2.default(canvas);
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return nextState.image != this.state.image || nextState.trimap != this.state.trimap;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Layout2.default,
          null,
          _react2.default.createElement(
            'div',
            { id: _styles2.default['container'] },
            _react2.default.createElement(
              'div',
              null,
              'Can download test data from ',
              _react2.default.createElement(
                'a',
                { href: 'http://www.alphamatting.com/datasets.php' },
                'http://www.alphamatting.com/datasets.php'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { id: _styles2.default['left-panel'] },
              _react2.default.createElement(
                'div',
                { id: _styles2.default['image-box'] },
                _react2.default.createElement(ImageDropZone, {
                  placeHolder: 'Drop Image Here',
                  file: this.state.image.preview,
                  onDrop: this.onDropImage.bind(this)
                })
              ),
              _react2.default.createElement(
                'div',
                { id: _styles2.default['image-box'] },
                _react2.default.createElement(ImageDropZone, {
                  placeHolder: 'Drop Trimap Here',
                  file: this.state.trimap.preview,
                  onDrop: this.onDropTrimap.bind(this)
                })
              ),
              _react2.default.createElement(
                'div',
                { id: _styles2.default['image-box'] },
                _react2.default.createElement(
                  'button',
                  {
                    className: 'mdl-button mdl-js-button mdl-button--raised',
                    type: 'button',
                    onClick: this.matting.bind(this) },
                  'matting'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { id: _styles2.default['right-content'] },
              _react2.default.createElement(
                'div',
                { className: _styles2.default['square'] },
                _react2.default.createElement('canvas', { id: 'matting-canvas',
                  width: 700,
                  height: 700
                })
              )
            )
          )
        );
      }
    }, {
      key: 'matting',
      value: function matting() {
        var _this3 = this;
  
        var img = new Image();
        img.src = this.state.image.preview;
        img.onload = function () {
          var canvas = document.getElementById('matting-canvas');
          var s = _this3.getScale(canvas.width, canvas.height, img.naturalWidth, img.naturalHeight);
          img.style.display = 'none';
  
          _this3.runner.run(s);
        };
      }
    }, {
      key: 'onDropImage',
      value: function onDropImage(file) {
        this.setState({
          image: file
        });
        this.runner.setImage(file.preview);
      }
    }, {
      key: 'onDropTrimap',
      value: function onDropTrimap(file) {
        this.setState({
          trimap: file
        });
        this.runner.setTrimap(file.preview);
      }
    }, {
      key: 'getScale',
      value: function getScale(cw, ch, iw, ih) {
        var ot = void 0,
            ol = void 0,
            iw_ = void 0,
            ih_ = void 0,
            ratio = void 0;
        if (iw / ih > cw / ch) {
          ratio = cw / iw;
          iw_ = iw * ratio;
          ih_ = ih * ratio;
          ot = (ch - ih_) / 2;
          ol = 0;
        } else {
          ratio = ch / ih;
          iw_ = iw * ratio;
          ih_ = ih * ratio;
          ot = 0;
          ol = (cw - iw_) / 2;
        }
        return {
          ot: ot,
          ol: ol,
          iw: iw_,
          ih: ih_
        };
      }
    }]);
    return Page;
  }(_react.Component);
  
  exports.default = Page;

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _keys = __webpack_require__(507);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _extends2 = __webpack_require__(94);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _classCallCheck2 = __webpack_require__(34);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(35);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _iglooExt = __webpack_require__(587);
  
  var _iglooExt2 = _interopRequireDefault(_iglooExt);
  
  var _quadVert = __webpack_require__(743);
  
  var _quadVert2 = _interopRequireDefault(_quadVert);
  
  var _drawCanvasFrag = __webpack_require__(739);
  
  var _drawCanvasFrag2 = _interopRequireDefault(_drawCanvasFrag);
  
  var _expandKnownFrag = __webpack_require__(740);
  
  var _expandKnownFrag2 = _interopRequireDefault(_expandKnownFrag);
  
  var _gatheringFrag = __webpack_require__(741);
  
  var _gatheringFrag2 = _interopRequireDefault(_gatheringFrag);
  
  var _refinementFrag = __webpack_require__(744);
  
  var _refinementFrag2 = _interopRequireDefault(_refinementFrag);
  
  var _localSmoothFrag = __webpack_require__(742);
  
  var _localSmoothFrag2 = _interopRequireDefault(_localSmoothFrag);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Shared = function () {
    function Shared(canvas) {
      (0, _classCallCheck3.default)(this, Shared);
  
      this.viewSize = new Float32Array([canvas.width, canvas.height]);
      this.igloo = new _iglooExt2.default(canvas);
      var gl = this.gl = this.igloo.gl;
      var ext = this.ext = gl.getExtension('WEBGL_draw_buffers');
      if (!gl) {
        alert('Could not initialize WebGL!');
        throw new Error('No WebGL');
      }
      if (!ext) {
        alert('Could not initialize WebGL Ext!');
        throw new Error('No WEBGL_draw_buffers');
      }
      gl.disable(gl.DEPTH_TEST);
  
      this.textures = this.textures || {};
    }
  
    (0, _createClass3.default)(Shared, [{
      key: 'setImage',
      value: function setImage(oriUrl) {
        var _this = this;
  
        this.loadImage(oriUrl, function (img) {
          var gl = _this.gl;
          _this.textures.ori = _this.igloo.texture(img, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST);
          _this.stateSize = new Float32Array([img.naturalWidth, img.naturalHeight]);
          var maxPixels = 640000;
          if (_this.stateSize[0] * _this.stateSize[1] > maxPixels) {
            var ratio = Math.sqrt(maxPixels / (_this.stateSize[0] * _this.stateSize[1]));
            _this.stateSize[0] = ratio * _this.stateSize[0];
            _this.stateSize[1] = ratio * _this.stateSize[1];
          }
        });
      }
    }, {
      key: 'setTrimap',
      value: function setTrimap(triUrl) {
        var _this2 = this;
  
        this.loadImage(triUrl, function (img) {
          var gl = _this2.gl;
          _this2.textures.tri = _this2.igloo.texture(img, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST);
        });
      }
    }, {
      key: 'glslSetup',
      value: function glslSetup() {
        var igloo = this.igloo,
            gl = this.gl;
  
        this.framebuffers = {
          back: igloo.framebuffer(),
          refine: igloo.framebuffer()
        };
        this.params = {
          kI: 10.0,
          kC: 5.0 / 255.0,
          kG: 4,
          searchRange: 500.0
        };
  
        this.programs = {
          copy: igloo.program(_quadVert2.default, _drawCanvasFrag2.default),
          expandKnown: igloo.program(_quadVert2.default, _expandKnownFrag2.default, this.replacer({ kI: this.params.kI })),
          gathering: igloo.program(_quadVert2.default, _gatheringFrag2.default, this.replacer({ kG: this.params.kG, searchRange: this.params.searchRange })),
          refinement: igloo.program(_quadVert2.default, _refinementFrag2.default),
          localSmooth: igloo.program(_quadVert2.default, _localSmoothFrag2.default)
        };
        this.buffers = {
          quad: igloo.array(_iglooExt2.default.QUAD2)
        };
        this.textures = (0, _extends3.default)({}, this.textures, {
          triExpand: this.igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST).blank(this.stateSize[0], this.stateSize[1]),
          gatherFB: this.igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST).blank(this.stateSize[0], this.stateSize[1]),
          gatherFBSigma: this.igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST).blank(this.stateSize[0], this.stateSize[1]),
          refineF: this.igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST).blank(this.stateSize[0], this.stateSize[1]),
          refineB: this.igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST).blank(this.stateSize[0], this.stateSize[1]),
          refineAC: this.igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST).blank(this.stateSize[0], this.stateSize[1]),
          alpha: this.igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST).blank(this.stateSize[0], this.stateSize[1])
        });
      }
    }, {
      key: 'run',
      value: function run(canvasScale) {
        console.log('run shared matting');
        if (!this.textures.ori || !this.textures.tri) return;
  
        var t1 = new Date();
        this.glslSetup();
        var t2 = new Date();
        this.expandKnown().gathering().refinement().localSmooth().draw(canvasScale);
        var t3 = new Date();
        console.log('Setup time: ' + (t2.getTime() - t1.getTime()));
        console.log('Render time: ' + (t3.getTime() - t2.getTime()));
      }
    }, {
      key: 'expandKnown',
      value: function expandKnown() {
        var gl = this.gl;
        this.framebuffers.back.attach(this.textures.triExpand);
        this.textures.ori.bind(0);
        this.textures.tri.bind(1);
        // this.textures.triTest.bind(1);
        gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
  
        this.programs.expandKnown.use().attrib('quad', this.buffers.quad, 2).uniformi('oriState', 0).uniformi('triState', 1).uniform('kC', this.params.kC).uniform('scale', this.stateSize).draw(gl.TRIANGLE_STRIP, 4);
  
        return this;
      }
    }, {
      key: 'gathering',
      value: function gathering(mode) {
        var gl = this.gl;
  
        if (mode == 'test') {
          this.framebuffers.back.attach(this.textures.alpha);
        } else {
          this.framebuffers.back.attach(this.textures.gatherFB);
        }
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
          alert('Could not initialize Buffer array!');
          throw new Error('No WebGL');
        }
  
        this.textures.ori.bind(0);
        // this.textures.triExpand.bind(1);
        this.textures.triExpand.bind(1);
        gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
  
        this.programs.gathering.use().attrib('quad', this.buffers.quad, 2).uniformi('oriState', 0).uniformi('triState', 1).uniformi('isTest', mode == 'test' ? 1 : 0).uniformi('kG', this.params.kG).uniform('scale', this.stateSize).draw(gl.TRIANGLE_STRIP, 4);
  
        return this;
      }
    }, {
      key: 'refinement',
      value: function refinement(mode) {
        var gl = this.gl;
        var arr = [];
        if (mode == 'test') {
          arr = [this.textures.alpha];
        } else {
          arr = [this.textures.refineF, this.textures.refineB, this.textures.refineAC];
        }
  
        this.framebuffers.refine.attachArr(arr);
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
          alert('Could not initialize Buffer array!');
          throw new Error('No WebGL');
        }
        this.textures.ori.bind(0);
        // this.textures.triExpand.bind(1);
        this.textures.triExpand.bind(1);
        this.textures.gatherFB.bind(2);
        this.textures.gatherFBSigma.bind(3);
        gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
  
        this.programs.refinement.use().attrib('quad', this.buffers.quad, 2).uniformi('oriState', 0).uniformi('triState', 1).uniformi('fbState', 2).uniformi('fbSigmaState', 3).uniformi('isTest', mode == 'test' ? 1 : 0).uniform('scale', this.stateSize).draw(gl.TRIANGLE_STRIP, 4);
  
        return this;
      }
    }, {
      key: 'localSmooth',
      value: function localSmooth() {
        var gl = this.gl;
        this.framebuffers.back.attach(this.textures.alpha);
  
        this.textures.ori.bind(0);
        // this.textures.triExpand.bind(1);
        this.textures.triExpand.bind(1);
        this.textures.refineAC.bind(2);
        this.textures.refineF.bind(3);
        this.textures.refineB.bind(4);
        gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
  
        this.programs.localSmooth.use().attrib('quad', this.buffers.quad, 2).uniformi('oriState', 0).uniformi('triState', 1).uniformi('acState', 2).uniformi('foreState', 3).uniformi('backState', 4).uniform('scale', this.stateSize).draw(gl.TRIANGLE_STRIP, 4);
  
        return this;
      }
    }, {
      key: 'draw',
      value: function draw(canvasScale) {
        var gl = this.gl;
        this.igloo.defaultFramebuffer.bind();
        this.textures.alpha.bind(0);
        gl.viewport(0, 0, this.viewSize[0], this.viewSize[1]);
  
        var offset = new Float32Array([canvasScale.ol, canvasScale.ot]);
        this.programs.copy.use().attrib('quad', this.buffers.quad, 2).uniformi('state', 0).uniform('scale', this.viewSize).uniform('offset', offset).draw(gl.TRIANGLE_STRIP, 4);
  
        return this;
      }
    }, {
      key: 'replacer',
      value: function replacer(map) {
        var keys = (0, _keys2.default)(map);
        return function (source) {
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i],
                regex = new RegExp('%%' + key + '%%', 'g');
            source = source.replace(regex, map[key]);
          }
          return source;
        };
      }
    }, {
      key: 'loadImage',
      value: function loadImage(image, callback) {
        var img = image;
        if (typeof img === 'string') {
          img = new Image();
          img.src = image;
        }
        img.onload = function () {
          img.style.display = 'none';
          if (callback) {
            callback(img);
          }
        };
      }
    }]);
    return Shared;
  }();
  
  exports.default = Shared;

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

  module.exports = { "default": __webpack_require__(520), __esModule: true };

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

  __webpack_require__(556);
  module.exports = __webpack_require__(16).Object.keys;

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

  // 19.1.2.14 Object.keys(O)
  var toObject = __webpack_require__(97)
    , $keys    = __webpack_require__(87);
  
  __webpack_require__(248)('keys', function(){
    return function keys(it){
      return $keys(toObject(it));
    };
  });

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(76)();
  // imports
  
  
  // module
  exports.push([module.id, ".styles_fill-box_was {\n  max-width: 100%;\n  max-height: 100%;\n  vertical-align: middle;\n}\n\n.styles_middle-align_740 {\n  text-align: center;\n  height: 100%;\n  widht: 100%;\n}\n\n.styles_align-helper_2qw {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\n#styles_container_1GJ {\n  display: table;\n  margin: 0 auto;\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n\n#styles_image-box_2hn {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n#styles_left-panel_9Oa {\n  width: 250px;\n  margin-left: 30px;\n  float:left;\n}\n\n#styles_right-content_jpr {\n  width: 700px;\n  float:left;\n}\n\n.styles_square_1rV {\n    background: #acacac;\n    width: 700px;\n    height: 700px;\n}\n", "", {"version":3,"sources":["/./pages/home/sharedMatting/styles.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;CACxB;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,aAAa;EACb,uBAAuB;CACxB;;AAED;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,qBAAqB;CACtB;;AAED;EACE,kBAAkB;EAClB,qBAAqB;CACtB;;AAED;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;CACZ;;AAED;EACE,aAAa;EACb,WAAW;CACZ;;AAED;IACI,oBAAoB;IACpB,aAAa;IACb,cAAc;CACjB","file":"styles.css","sourcesContent":[".fill-box {\n  max-width: 100%;\n  max-height: 100%;\n  vertical-align: middle;\n}\n\n.middle-align {\n  text-align: center;\n  height: 100%;\n  widht: 100%;\n}\n\n.align-helper {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\n#container {\n  display: table;\n  margin: 0 auto;\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n\n#image-box {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n#left-panel {\n  width: 250px;\n  margin-left: 30px;\n  float:left;\n}\n\n#right-content {\n  width: 700px;\n  float:left;\n}\n\n.square {\n    background: #acacac;\n    width: 700px;\n    height: 700px;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"fill-box": "styles_fill-box_was",
  	"middle-align": "styles_middle-align_740",
  	"align-helper": "styles_align-helper_2qw",
  	"container": "styles_container_1GJ",
  	"image-box": "styles_image-box_2hn",
  	"left-panel": "styles_left-panel_9Oa",
  	"right-content": "styles_right-content_jpr",
  	"square": "styles_square_1rV"
  };

/***/ },

/***/ 587:
/***/ function(module, exports) {

  /**
   * Wrap WebGLRenderingContext objects with useful behavior.
   * @param {WebGLRenderingContext|HTMLCanvasElement} gl
   * @param {Object} [options] to pass to getContext()
   * @returns {Igloo}
   * @namespace
   */
  function Igloo(gl, options) {
      var canvas;
      if (gl instanceof HTMLCanvasElement) {
          canvas = gl;
          gl = Igloo.getContext(gl, options);
      } else {
          canvas = gl.canvas;
      }
      this.gl = gl;
      this.canvas = canvas;
      this.defaultFramebuffer = new Igloo.Framebuffer(gl, null);
  }
  
  /**
   * To be used in a vec2 GL_TRIANGLE_STRIP draw.
   * @type {Float32Array}
   * @constant
   */
  Igloo.QUAD2 = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
  
  /**
   * Asynchronously or synchronously fetch data from the server.
   * @param {string} url
   * @param {Function} [callback] if provided, call is asynchronous
   * @returns {string}
   */
  Igloo.fetch = function(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, Boolean(callback));
      if (callback != null) {
          xhr.onload = function() {
              callback(xhr.responseText);
          };
      }
      xhr.send();
      return xhr.responseText;
  };
  
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {Object} [options] to pass to getContext()
   * @param {boolean} [noerror] If true, return null instead of throwing
   * @returns {?WebGLRenderingContext} a WebGL rendering context.
   */
  Igloo.getContext = function(canvas, options, noerror) {
      var gl;
      try {
          gl = canvas.getContext('webgl', options || {}) ||
              canvas.getContext('experimental-webgl', options || {});
      } catch (e) {
          gl = null;
      }
      if (gl == null && !noerror) {
          throw new Error('Could not create WebGL context.');
      } else {
          return gl;
      }
  };
  
  /**
   * @param {string} string
   * @returns {boolean} True if the string looks like a URL
   */
  Igloo.looksLikeURL = function(string) {
      return /\s/.exec(string) == null;
  };
  
  /**
   * @param {*} object
   * @returns {boolean} true if object is an array or typed array
   */
  Igloo.isArray = function(object) {
      var name = Object.prototype.toString.apply(object, []),
          re = / (Float(32|64)|Int(16|32|8)|Uint(16|32|8(Clamped)?))?Array]$/;
      return re.exec(name) != null;
  };
  
  /**
   * Creates a program from a program configuration.
   *
   * @param {string} vertex URL or source of the vertex shader
   * @param {string} fragment URL or source of the fragment shader
   * @param {Function} [transform] Transforms the shaders before compilation
   * @returns {Igloo.Program}
   */
  Igloo.prototype.program = function(vertex, fragment, transform) {
      if (Igloo.looksLikeURL(vertex)) vertex = Igloo.fetch(vertex);
      if (Igloo.looksLikeURL(fragment)) fragment = Igloo.fetch(fragment);
      if (transform != null) {
          vertex = transform(vertex);
          fragment = transform(fragment);
      }
      return new Igloo.Program(this.gl, vertex, fragment);
  };
  
  /**
   * Create a new GL_ARRAY_BUFFER with optional data.
   * @param {ArrayBuffer|ArrayBufferView} [data]
   * @param {GLenum} [usage]
   * @returns {Igloo.Buffer}
   */
  Igloo.prototype.array = function(data, usage) {
      var gl = this.gl,
          buffer = new Igloo.Buffer(gl, gl.ARRAY_BUFFER);
      if (data != null) {
          buffer.update(data, usage == null ? gl.STATIC_DRAW : usage);
      }
      return buffer;
  };
  
  /**
   * Create a new GL_ELEMENT_ARRAY_BUFFER with optional data.
   * @param {ArrayBuffer|ArrayBufferView} [data]
   * @param {GLenum} [usage]
   * @returns {Igloo.Buffer}
   */
  Igloo.prototype.elements = function(data, usage) {
      var gl = this.gl,
          buffer = new Igloo.Buffer(gl, gl.ELEMENT_ARRAY_BUFFER);
      if (data != null) {
          buffer.update(data, usage == null ? gl.STATIC_DRAW : usage);
      }
      return buffer;
  };
  
  /**
   * @param {TexImageSource} [source]
   * @param {GLenum} [format=GL_RGBA]
   * @param {GLenum} [wrap=GL_CLAMP_TO_EDGE]
   * @param {GLenum} [filter=GL_LINEAR]
   * @param {GLenum} [type=UNSIGNED_BYTE]
   * @param {Object} [options = {type: 'ArrayBufferView', width, height} || {}]
   * @returns {Igloo.Texture}
   */
  Igloo.prototype.texture = function(source, format, wrap, filter, type, options) {
      var texture = new Igloo.Texture(this.gl, format, wrap, filter, type);
      if (source != null) {
          if (options && options.type === 'ArrayBufferView') {
            texture.set(source, options.width, options.height);
          }
          else {
            texture.set(source);
          }
      }
      return texture;
  };
  
  /**
   * @param {Igloo.Texture} [texture]
   * @returns {Igloo.Framebuffer}
   */
  Igloo.prototype.framebuffer = function(texture) {
      var framebuffer = new Igloo.Framebuffer(this.gl);
      if (texture != null) framebuffer.attach(texture);
      return framebuffer;
  };
  
  /**
   * Fluent WebGLProgram wrapper for managing variables and data. The
   * constructor compiles and links a program from a pair of shaders.
   * Throws an exception if compiling or linking fails.
   * @param {WebGLRenderingContext} gl
   * @param {string} vertex Shader source
   * @param {string} fragment Shader source
   * @constructor
   */
  Igloo.Program = function(gl, vertex, fragment) {
      this.gl = gl;
      var p = this.program = gl.createProgram();
      gl.attachShader(p, this.makeShader(gl.VERTEX_SHADER, vertex));
      gl.attachShader(p, this.makeShader(gl.FRAGMENT_SHADER, fragment));
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
          throw new Error(gl.getProgramInfoLog(p));
      }
      this.vars = {};
  };
  
  /**
   * Compile a shader from source.
   * @param {number} type
   * @param {string} source
   * @returns {WebGLShader}
   */
  Igloo.Program.prototype.makeShader = function(type, source) {
      var gl = this.gl;
      var shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          return shader;
      } else {
          throw new Error(gl.getShaderInfoLog(shader));
      }
  };
  
  /**
   * Tell WebGL to use this program right now.
   * @returns {Igloo.Program} this
   */
  Igloo.Program.prototype.use = function() {
      this.gl.useProgram(this.program);
      return this;
  };
  
  /**
   * Declare/set a uniform or set a uniform's data.
   * @param {string} name uniform variable name
   * @param {number|Array|ArrayBufferView} [value]
   * @param {boolean} [i] if true use the integer version
   * @returns {Igloo.Program} this
   */
  Igloo.Program.prototype.uniform = function(name, value, i, dim) {
      if (value == null) {
          this.vars[name] = this.gl.getUniformLocation(this.program, name);
      } else {
          if (this.vars[name] == null) this.uniform(name);
          var v = this.vars[name];
          if (Igloo.isArray(value)) {
              var l = dim ? dim : value.length;
              var method = 'uniform' + l + (i ? 'i' : 'f') + 'v';
              this.gl[method](v, value);
          } else if (typeof value === 'number' || typeof value === 'boolean') {
              if (i) {
                  this.gl.uniform1i(v, value);
              } else {
                  this.gl.uniform1f(v, value);
              }
          } else {
              throw new Error('Invalid uniform value: ' + value);
          }
      }
      return this;
  };
  
  /**
   * Set a uniform's data to a specific matrix.
   * @param {string} name uniform variable name
   * @param {Array|ArrayBufferView} matrix
   * @param {boolean} [transpose=false]
   * @returns {Igloo.Program} this
   */
  Igloo.Program.prototype.matrix = function(name, matrix, transpose) {
      if (this.vars[name] == null) this.uniform(name);
      var method = 'uniformMatrix' + Math.sqrt(matrix.length) + 'fv';
      this.gl[method](this.vars[name], Boolean(transpose), matrix);
      return this;
  };
  
  /**
   * Like the uniform() method, but using integers.
   * @returns {Igloo.Program} this
   */
  Igloo.Program.prototype.uniformi = function(name, value) {
      return this.uniform(name, value, true);
  };
  
  /**
   * Declare an attrib or set an attrib's buffer.
   * @param {string} name attrib variable name
   * @param {WebGLBuffer} [value]
   * @param {number} [size] element size (required if value is provided)
   * @param {number} [stride=0]
   * @returns {Igloo.Program} this
   */
  Igloo.Program.prototype.attrib = function(name, value, size, stride) {
      var gl = this.gl;
      if (value == null) {
          this.vars[name] = gl.getAttribLocation(this.program, name);
      } else {
          if (this.vars[name] == null) this.attrib(name); // get location
          value.bind();
          gl.enableVertexAttribArray(this.vars[name]);
          gl.vertexAttribPointer(this.vars[name], size, gl.FLOAT,
                                 false, stride == null ? 0 : stride, 0);
      }
      return this;
  };
  
  /**
   * Call glDrawArrays or glDrawElements with this program.
   * @param {number} mode
   * @param {number} count the number of vertex attribs to render
   * @param {GLenum} [type] use glDrawElements of this type
   * @returns {Igloo.Program} this
   */
  Igloo.Program.prototype.draw = function(mode, count, type) {
      var gl = this.gl;
      if (type == null) {
          gl.drawArrays(mode, 0, count);
      } else {
          gl.drawElements(mode, count, type, 0);
      }
      if (gl.getError() !== gl.NO_ERROR) {
          throw new Error('WebGL rendering error');
      }
      return this;
  };
  
  
  /**
   * Disables all attribs from this program.
   * @returns {Igloo.Program} this
   */
  Igloo.Program.prototype.disable = function() {
      for (var attrib in this.vars) {
          var location = this.vars[attrib];
          if (this.vars.hasOwnProperty(attrib)) {
              if (typeof location === 'number') {
                  this.gl.disableVertexAttribArray(location);
              }
          }
      }
      return this;
  };
  
  /**
   * Fluent WebGLBuffer wrapper.
   * @param {WebGLRenderingContext} gl
   * @param {GLenum} [target] either GL_ARRAY_BUFFER or GL_ELEMENT_ARRAY_BUFFER
   * @returns {WebGLProgram}
   * @constructor
   */
  Igloo.Buffer = function(gl, target) {
      this.gl = gl;
      this.buffer = gl.createBuffer();
      this.target = (target == null ? gl.ARRAY_BUFFER : target);
      this.size = -1;
  };
  
  /**
   * Binds this buffer to ARRAY_BUFFER.
   * @returns {Igloo.Buffer} this
   */
  Igloo.Buffer.prototype.bind = function() {
      this.gl.bindBuffer(this.target, this.buffer);
      return this;
  };
  
  /**
   * @param
   * @param {ArrayBuffer|ArrayBufferView} data
   * @param {GLenum} [usage]
   * @returns {Igloo.Buffer} this
   */
  Igloo.Buffer.prototype.update = function(data, usage) {
      var gl = this.gl;
      if (data instanceof Array) {
          data = new Float32Array(data);
      }
      usage = usage == null ? gl.DYNAMIC_DRAW : usage;
      this.bind();
      if (this.size !== data.byteLength) {
          gl.bufferData(this.target, data, usage);
          this.size = data.byteLength;
      } else {
          gl.bufferSubData(this.target, 0, data);
      }
      return this;
  };
  
  /**
   * Create a new texture, optionally filled blank.
   * @param {WebGLRenderingContext} gl
   * @param {GLenum} [format=GL_RGBA]
   * @param {GLenum} [wrap=GL_CLAMP_TO_EDGE]
   * @param {GLenum} [filter=GL_LINEAR]
   * @param {GLenum} [type=UNSIGNED_BYTE]
   * @returns {Igloo.Texture}
   */
  Igloo.Texture = function(gl, format, wrap, filter, type) {
      this.gl = gl;
      var texture = this.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      wrap = wrap == null ? gl.CLAMP_TO_EDGE : wrap;
      filter = filter == null ? gl.LINEAR : filter;
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
      this.format = format == null ? gl.RGBA : format;
      this.type = type == null ? gl.UNSIGNED_BYTE : type;
  };
  
  /**
   * @param {number} [unit] active texture unit to bind
   * @returns {Igloo.Texture}
   */
  Igloo.Texture.prototype.bind = function(unit) {
      var gl = this.gl;
      if (unit != null) {
          gl.activeTexture(gl.TEXTURE0 + unit);
      }
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      return this;
  };
  
  /**
   * Set texture to particular size, filled with vec4(0, 0, 0, 1).
   * @param {number} width
   * @param {number} height
   * @returns {Igloo.Texture}
   */
  Igloo.Texture.prototype.blank = function(width, height) {
      var gl = this.gl;
      this.bind();
      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height,
                    0, this.format, this.type, null);
      return this;
  };
  
  
  /**
   * Set the texture to a particular image.
   * @param {Array|ArrayBufferView|TexImageSource} source
   * @param {number} [width]
   * @param {number} [height]
   * @returns {Igloo.Texture}
   */
  Igloo.Texture.prototype.set = function(source, width, height) {
      var gl = this.gl;
      this.bind();
      if (source instanceof Array) {
          if (this.type == gl.FLOAT) {
              source = new Float32Array(source);
          } else {
              source = new Uint8Array(source);
          }
      }
      if (width != null || height != null) {
          gl.texImage2D(gl.TEXTURE_2D, 0, this.format,
                        width, height, 0, this.format,
                        this.type, source);
      } else {
          gl.texImage2D(gl.TEXTURE_2D, 0, this.format,
                        this.format, this.type, source);
      }
      return this;
  };
  
  /**
   * Set part of the texture to a particular image.
   * @param {Array|ArrayBufferView|TexImageSource} source
   * @param {number} xoff
   * @param {number} yoff
   * @param {number} [width]
   * @param {number} [height]
   * @returns {Igloo.Texture}
   */
  Igloo.Texture.prototype.subset = function(source, xoff, yoff, width, height) {
      var gl = this.gl;
      this.bind();
      if (source instanceof Array) {
          if (this.type == gl.FLOAT) {
              source = new Float32Array(source);
          } else {
              source = new Uint8Array(source);
          }
      }
      if (width != null || height != null) {
          gl.texSubImage2D(gl.TEXTURE_2D, 0, xoff, yoff,
                           width, height,
                           this.format, this.type, source);
      } else {
          gl.texSubImage2D(gl.TEXTURE_2D, 0, xoff, yoff,
                           this.format, this.type, source);
      }
      return this;
  };
  
  /**
   * Copy part/all of the current framebuffer to this image.
   * @param {Array|ArrayBufferView|TexImageSource} source
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @returns {Igloo.Texture}
   */
  Igloo.Texture.prototype.copy = function(x, y, width, height) {
      var gl = this.gl;
      gl.copyTexImage2D(gl.TEXTURE_2D, 0, this.format, x, y, width, height, 0);
      return this;
  };
  
  /**
   * @param {WebGLRenderingContext} gl
   * @param {WebGLFramebuffer} [framebuffer] to be wrapped (null for default)
   * @returns {Igloo.Framebuffer}
   */
  Igloo.Framebuffer = function(gl, framebuffer) {
      this.gl = gl;
      this.framebuffer =
          arguments.length == 2 ? framebuffer : gl.createFramebuffer();
      this.renderbuffer = null;
  };
  
  /**
   * @returns {Igloo.Framebuffer}
   */
  Igloo.Framebuffer.prototype.bind = function() {
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebuffer);
      return this;
  };
  
  /**
   * @returns {Igloo.Framebuffer}
   */
  Igloo.Framebuffer.prototype.unbind = function() {
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
      return this;
  };
  
  /**
   * @param {Igloo.Texture} texture
   * @returns {Igloo.Framebuffer}
   */
  Igloo.Framebuffer.prototype.attach = function(texture) {
      var gl = this.gl;
      this.bind();
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
                              gl.TEXTURE_2D, texture.texture, 0);
      return this;
  };
  
  /**
   * @param {Igloo.Texture} array of textures
   * @returns {Igloo.Framebuffer}
   */
  Igloo.Framebuffer.prototype.attachArr = function(textures) {
      var gl = this.gl;
      var ext = gl.getExtension('WEBGL_draw_buffers');
      var attachIdx = 0;
      var arr = [];
  
      this.bind();
      textures.forEach(function(texture) {
        var attachIdxStr = 'COLOR_ATTACHMENT' + attachIdx +'_WEBGL';
        attachIdx += 1;
        arr.push(ext[attachIdxStr]);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, ext[attachIdxStr],
                                gl.TEXTURE_2D, texture.texture, 0);
      });
  
      console.log('attachArr');
      console.log(arr);
      ext.drawBuffersWEBGL(arr);
  
      return this;
  };
  
  
  /**
   * Attach a renderbuffer as a depth buffer for depth-tested rendering.
   * @param {number} width
   * @param {number} height
   * @returns {Igloo.Framebuffer}
   */
  Igloo.Framebuffer.prototype.attachDepth = function(width, height) {
      var gl = this.gl;
      this.bind();
      if (this.renderbuffer == null) {
          this.renderbuffer = gl.createRenderbuffer();
          gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16,
                                 width, height);
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT,
                                     gl.RENDERBUFFER, this.renderbuffer);
      }
      return this;
  };
  
  module.exports = Igloo;


/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

  (function webpackUniversalModuleDefinition(root, factory) {
  	if(true)
  		module.exports = factory(__webpack_require__(11));
  	else if(typeof define === 'function' && define.amd)
  		define(["react"], factory);
  	else if(typeof exports === 'object')
  		exports["Dropzone"] = factory(require("react"));
  	else
  		root["Dropzone"] = factory(root["react"]);
  })(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId])
  /******/ 			return installedModules[moduleId].exports;
  /******/
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			exports: {},
  /******/ 			id: moduleId,
  /******/ 			loaded: false
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.loaded = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ function(module, exports, __webpack_require__) {
  
  	'use strict';
  	
  	Object.defineProperty(exports, "__esModule", {
  	  value: true
  	});
  	
  	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  	
  	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  	
  	var _attrAccept = __webpack_require__(1);
  	
  	var _attrAccept2 = _interopRequireDefault(_attrAccept);
  	
  	var _react = __webpack_require__(2);
  	
  	var _react2 = _interopRequireDefault(_react);
  	
  	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  	
  	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  	
  	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  	
  	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  	
  	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint prefer-template: 0 */
  	
  	var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;
  	
  	var Dropzone = function (_React$Component) {
  	  _inherits(Dropzone, _React$Component);
  	
  	  function Dropzone(props, context) {
  	    _classCallCheck(this, Dropzone);
  	
  	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropzone).call(this, props, context));
  	
  	    _this.onClick = _this.onClick.bind(_this);
  	    _this.onDragStart = _this.onDragStart.bind(_this);
  	    _this.onDragEnter = _this.onDragEnter.bind(_this);
  	    _this.onDragLeave = _this.onDragLeave.bind(_this);
  	    _this.onDragOver = _this.onDragOver.bind(_this);
  	    _this.onDrop = _this.onDrop.bind(_this);
  	
  	    _this.state = {
  	      isDragActive: false
  	    };
  	    return _this;
  	  }
  	
  	  _createClass(Dropzone, [{
  	    key: 'componentDidMount',
  	    value: function componentDidMount() {
  	      this.enterCounter = 0;
  	    }
  	  }, {
  	    key: 'onDragStart',
  	    value: function onDragStart(e) {
  	      if (this.props.onDragStart) {
  	        this.props.onDragStart.call(this, e);
  	      }
  	    }
  	  }, {
  	    key: 'onDragEnter',
  	    value: function onDragEnter(e) {
  	      e.preventDefault();
  	
  	      // Count the dropzone and any children that are entered.
  	      ++this.enterCounter;
  	
  	      // This is tricky. During the drag even the dataTransfer.files is null
  	      // But Chrome implements some drag store, which is accesible via dataTransfer.items
  	      var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];
  	
  	      // Now we need to convert the DataTransferList to Array
  	      var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));
  	
  	      this.setState({
  	        isDragActive: allFilesAccepted,
  	        isDragReject: !allFilesAccepted
  	      });
  	
  	      if (this.props.onDragEnter) {
  	        this.props.onDragEnter.call(this, e);
  	      }
  	    }
  	  }, {
  	    key: 'onDragOver',
  	    value: function onDragOver(e) {
  	      e.preventDefault();
  	      e.stopPropagation();
  	      return false;
  	    }
  	  }, {
  	    key: 'onDragLeave',
  	    value: function onDragLeave(e) {
  	      e.preventDefault();
  	
  	      // Only deactivate once the dropzone and all children was left.
  	      if (--this.enterCounter > 0) {
  	        return;
  	      }
  	
  	      this.setState({
  	        isDragActive: false,
  	        isDragReject: false
  	      });
  	
  	      if (this.props.onDragLeave) {
  	        this.props.onDragLeave.call(this, e);
  	      }
  	    }
  	  }, {
  	    key: 'onDrop',
  	    value: function onDrop(e) {
  	      e.preventDefault();
  	
  	      // Reset the counter along with the drag on a drop.
  	      this.enterCounter = 0;
  	
  	      this.setState({
  	        isDragActive: false,
  	        isDragReject: false
  	      });
  	
  	      var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
  	      var max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
  	      var files = [];
  	
  	      for (var i = 0; i < max; i++) {
  	        var file = droppedFiles[i];
  	        // We might want to disable the preview creation to support big files
  	        if (!this.props.disablePreview) {
  	          file.preview = window.URL.createObjectURL(file);
  	        }
  	        files.push(file);
  	      }
  	
  	      if (this.allFilesAccepted(files)) {
  	        if (this.props.onDrop) {
  	          this.props.onDrop.call(this, files, e);
  	        }
  	
  	        if (this.props.onDropAccepted) {
  	          this.props.onDropAccepted.call(this, files, e);
  	        }
  	      } else {
  	        if (this.props.onDropRejected) {
  	          this.props.onDropRejected.call(this, files, e);
  	        }
  	      }
  	    }
  	  }, {
  	    key: 'onClick',
  	    value: function onClick() {
  	      if (!this.props.disableClick) {
  	        this.open();
  	      }
  	    }
  	  }, {
  	    key: 'allFilesAccepted',
  	    value: function allFilesAccepted(files) {
  	      var _this2 = this;
  	
  	      return files.every(function (file) {
  	        return (0, _attrAccept2.default)(file, _this2.props.accept);
  	      });
  	    }
  	  }, {
  	    key: 'open',
  	    value: function open() {
  	      this.fileInputEl.value = null;
  	      this.fileInputEl.click();
  	    }
  	  }, {
  	    key: 'render',
  	    value: function render() {
  	      var _this3 = this;
  	
  	      var _props = this.props;
  	      var accept = _props.accept;
  	      var activeClassName = _props.activeClassName;
  	      var inputProps = _props.inputProps;
  	      var multiple = _props.multiple;
  	      var name = _props.name;
  	      var rejectClassName = _props.rejectClassName;
  	
  	      var rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);
  	
  	      var activeStyle = rest.activeStyle;
  	      var className = rest.className;
  	      var rejectStyle = rest.rejectStyle;
  	      var style = rest.style;
  	
  	      var props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);
  	
  	      var _state = this.state;
  	      var isDragActive = _state.isDragActive;
  	      var isDragReject = _state.isDragReject;
  	
  	
  	      className = className || '';
  	
  	      if (isDragActive && activeClassName) {
  	        className += ' ' + activeClassName;
  	      }
  	      if (isDragReject && rejectClassName) {
  	        className += ' ' + rejectClassName;
  	      }
  	
  	      if (!className && !style && !activeStyle && !rejectStyle) {
  	        style = {
  	          width: 200,
  	          height: 200,
  	          borderWidth: 2,
  	          borderColor: '#666',
  	          borderStyle: 'dashed',
  	          borderRadius: 5
  	        };
  	        activeStyle = {
  	          borderStyle: 'solid',
  	          backgroundColor: '#eee'
  	        };
  	        rejectStyle = {
  	          borderStyle: 'solid',
  	          backgroundColor: '#ffdddd'
  	        };
  	      }
  	
  	      var appliedStyle = void 0;
  	      if (activeStyle && isDragActive) {
  	        appliedStyle = _extends({}, style, activeStyle);
  	      } else if (rejectStyle && isDragReject) {
  	        appliedStyle = _extends({}, style, rejectStyle);
  	      } else {
  	        appliedStyle = _extends({}, style);
  	      }
  	
  	      var inputAttributes = {
  	        accept: accept,
  	        type: 'file',
  	        style: { display: 'none' },
  	        multiple: supportMultiple && multiple,
  	        ref: function ref(el) {
  	          return _this3.fileInputEl = el;
  	        }, // eslint-disable-line
  	        onChange: this.onDrop
  	      };
  	
  	      if (name && name.length) {
  	        inputAttributes.name = name;
  	      }
  	
  	      // Remove custom properties before passing them to the wrapper div element
  	      var customProps = ['disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected'];
  	      var divProps = _extends({}, props);
  	      customProps.forEach(function (prop) {
  	        return delete divProps[prop];
  	      });
  	
  	      return _react2.default.createElement(
  	        'div',
  	        _extends({
  	          className: className,
  	          style: appliedStyle
  	        }, divProps /* expand user provided props first so event handlers are never overridden */, {
  	          onClick: this.onClick,
  	          onDragStart: this.onDragStart,
  	          onDragEnter: this.onDragEnter,
  	          onDragOver: this.onDragOver,
  	          onDragLeave: this.onDragLeave,
  	          onDrop: this.onDrop
  	        }),
  	        this.props.children,
  	        _react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
  	      );
  	    }
  	  }]);
  	
  	  return Dropzone;
  	}(_react2.default.Component);
  	
  	Dropzone.defaultProps = {
  	  disablePreview: false,
  	  disableClick: false,
  	  multiple: true
  	};
  	
  	Dropzone.propTypes = {
  	  // Overriding drop behavior
  	  onDrop: _react2.default.PropTypes.func,
  	  onDropAccepted: _react2.default.PropTypes.func,
  	  onDropRejected: _react2.default.PropTypes.func,
  	
  	  // Overriding drag behavior
  	  onDragStart: _react2.default.PropTypes.func,
  	  onDragEnter: _react2.default.PropTypes.func,
  	  onDragLeave: _react2.default.PropTypes.func,
  	
  	  children: _react2.default.PropTypes.node, // Contents of the dropzone
  	  style: _react2.default.PropTypes.object, // CSS styles to apply
  	  activeStyle: _react2.default.PropTypes.object, // CSS styles to apply when drop will be accepted
  	  rejectStyle: _react2.default.PropTypes.object, // CSS styles to apply when drop will be rejected
  	  className: _react2.default.PropTypes.string, // Optional className
  	  activeClassName: _react2.default.PropTypes.string, // className for accepted state
  	  rejectClassName: _react2.default.PropTypes.string, // className for rejected state
  	
  	  disablePreview: _react2.default.PropTypes.bool, // Enable/disable preview generation
  	  disableClick: _react2.default.PropTypes.bool, // Disallow clicking on the dropzone container to open file dialog
  	
  	  inputProps: _react2.default.PropTypes.object, // Pass additional attributes to the <input type="file"/> tag
  	  multiple: _react2.default.PropTypes.bool, // Allow dropping multiple files
  	  accept: _react2.default.PropTypes.string, // Allow specific types of files. See https://github.com/okonet/attr-accept for more information
  	  name: _react2.default.PropTypes.string // name attribute for the input tag
  	};
  	
  	exports.default = Dropzone;
  	module.exports = exports['default'];
  
  /***/ },
  /* 1 */
  /***/ function(module, exports) {
  
  	module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,d,y=t&s.G,h=t&s.P,v=y?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=y?o:o[n]||(o[n]={});y&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],d=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,d),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);
  
  /***/ },
  /* 2 */
  /***/ function(module, exports) {
  
  	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
  
  /***/ }
  /******/ ])
  });
  ;
  //# sourceMappingURL=index.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(568);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(80)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./styles.css", function() {
  			var newContent = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./styles.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 739:
/***/ function(module, exports) {

  module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform sampler2D state;\nuniform vec2 scale;\nuniform vec2 offset;\n\n\nvoid main() {\n    if (gl_FragCoord.y < offset.y || gl_FragCoord.x < offset.x\n      || gl_FragCoord.y > scale.y - offset.y || gl_FragCoord.x > scale.x - offset.x) {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n    else {\n        vec2 coord = vec2((gl_FragCoord.x - offset.x)/(scale.x - 2.0*offset.x),\n          1.0 - (gl_FragCoord.y - offset.y)/(scale.y - 2.0*offset.y));\n        gl_FragColor = texture2D(state, coord);\n    }\n}\n"

/***/ },

/***/ 740:
/***/ function(module, exports) {

  module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform sampler2D oriState;\nuniform sampler2D triState;\nuniform vec2 scale;\nuniform float kC;\n\nvec3 getOri() {\n  vec4 color = texture2D(oriState, (gl_FragCoord.xy) / scale);\n  return color.xyz;\n}\n\nvec3 getOri(vec2 coord) {\n  vec4 color = texture2D(oriState, coord);\n  return color.xyz;\n}\n\nvec3 getTri() {\n  vec4 color = texture2D(triState, (gl_FragCoord.xy) / scale);\n  return color.xyz;\n}\n\nvec4 getTri(vec2 coord) {\n  return texture2D(triState, coord);\n}\n\nvoid main() {\n  float tri = getTri().x;\n  gl_FragColor = texture2D(triState, (gl_FragCoord.xy) / scale);\n\n  // unknown region\n  if (tri > 0.0 && tri < 1.0) {\n    float x = gl_FragCoord.x,\n      y = gl_FragCoord.y;\n\n    const float kI = float( %%kI%% );\n\n    vec3 curColor = getOri();\n    for (float i = -kI; i < kI; i += 1.0) {\n      for (float j = -kI; j < kI; j += 1.0) {\n        float w = gl_FragCoord.x + i;\n        float h = gl_FragCoord.y + j;\n        if (w > 0.0 && w < scale.x\n          && h > 0.0 && h < scale.y) {\n            vec2 coord = vec2(w, h);\n            vec3 color = getOri(coord / scale);\n            vec4 triColor = getTri(coord / scale);\n            if ((triColor.x == 0.0 || triColor.x == 1.0)\n              && distance(coord, gl_FragCoord.xy) < kI\n              && distance(color, curColor) < kC) {\n                gl_FragColor = triColor;\n              }\n            }\n      }\n    }\n  }\n\n}\n"

/***/ },

/***/ 741:
/***/ function(module, exports) {

  module.exports = "#extension GL_EXT_draw_buffers : require\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define i0_  0\n#define i1_  1\n#define i2_  2\n#define i3_  3\n\nuniform sampler2D oriState;\nuniform sampler2D triState;\nuniform int isTest;\nuniform vec2 scale;\nuniform int kG;\n\nvec2 FSamples[%%kG%%];\nvec2 BSamples[%%kG%%];\n\nstruct FBPair {\n  vec3 F;\n  vec3 B;\n  vec2 FCoord;\n  vec2 BCoord;\n};\n\nvec2 arrIdx(int which, int idx) {\n  vec2 res;\n  if (which == 0) {\n    if (idx == 0) { res = FSamples[i0_]; }\n    else if (idx == 1) { res = FSamples[i1_]; }\n    else if (idx == 2) { res = FSamples[i2_]; }\n    else if (idx == 3) { res = FSamples[i3_]; }\n  }\n  else if (which == 1) {\n    if (idx == 0) { res = BSamples[i0_]; }\n    else if (idx == 1) { res = BSamples[i1_]; }\n    else if (idx == 2) { res = BSamples[i2_]; }\n    else if (idx == 3) { res = BSamples[i3_]; }\n  }\n\n  return res;\n}\n\nvoid arrIdx(int which, int idx, vec2 value) {\n  if (which == 0) {\n    if (idx == 0) { FSamples[i0_] = value; }\n    else if (idx == 1) { FSamples[i1_] = value; }\n    else if (idx == 2) { FSamples[i2_] = value; }\n    else if (idx == 3) { FSamples[i3_] = value; }\n  }\n  else if (which == 1) {\n    if (idx == 0) { BSamples[i0_] = value; }\n    else if (idx == 1) { BSamples[i1_] = value; }\n    else if (idx == 2) { BSamples[i2_] = value; }\n    else if (idx == 3) { BSamples[i3_] = value; }\n  }\n}\n\nvec3 getOri() {\n  vec4 color = texture2D(oriState, (gl_FragCoord.xy) / scale);\n  return color.xyz;\n}\n\nvec3 getOri(vec2 coord) {\n  vec4 color = texture2D(oriState, coord);\n  return color.xyz;\n}\n\nvec3 getTri() {\n  vec4 color = texture2D(triState, (gl_FragCoord.xy) / scale);\n  return color.xyz;\n}\n\nvec3 getTri(vec2 coord) {\n  return texture2D(triState, coord).xyz;\n}\n\nvoid sample() {\n  int fIdx = 0, bIdx = 0;\n  float x = gl_FragCoord.x,\n    y = gl_FragCoord.y;\n\n  float inc = 360.0 / float(kG);\n  float ca = inc / 9.0;\n  float angle = (x + y) * ca;\n  for (int k = 0; k < %%kG%%; k ++) {\n    bool flagF = false;\n    bool flagB = false;\n\n    float z  = (angle + float(k) * inc) / 180.0 * 3.1415926;\n    float ex = sin(z);\n    float ey = cos(z);\n    float step = min(1.0 / (abs(ex) + 1e-10), 1.0 / (abs(ey) + 1e-10));\n\n    for (int i = 0; i < %%searchRange%%; i ++) {\n      float t = step * float(i);\n      float tx = x + ex * t,\n        ty = y + ey * t;\n\n      if (tx > 0.0 && tx < scale.x\n        && ty > 0.0 && ty < scale.y\n        && (!flagF || !flagB) ) {\n          vec2 coord = vec2(tx, ty) / scale;\n          float triColor = getTri(coord).x;\n          if (!flagF && triColor == 1.0) {\n            arrIdx(0, fIdx++, coord);\n            flagF = true;\n          }\n          else if (!flagB && triColor == 0.0) {\n            arrIdx(1, bIdx++, coord);\n            flagB = true;\n          }\n        }\n    }\n  }\n  for (int i = 0; i < %%kG%%; i ++) {\n    if (i >= fIdx) {\n      arrIdx(0, i, vec2(-1.0, -1.0));\n      // arrIdx(0, i, gl_FragCoord.xy / scale);\n    }\n  }\n  for (int i = 0; i < %%kG%%; i ++) {\n    if (i >= bIdx) {\n      arrIdx(1, i, vec2(-1.0, -1.0));\n      // arrIdx(1, i, gl_FragCoord.xy / scale);\n    }\n  }\n  // FSamples[0] = gl_FragCoord.xy / scale;\n  // arrIdx(0, 0, gl_FragCoord.xy / scale);\n}\n\n\nfloat e_p(vec2 coord) {\n  float lx = coord.x * scale.x - gl_FragCoord.x,\n    ly = coord.y * scale.y - gl_FragCoord.y,\n    l = length(vec2(lx, ly));\n\n  float ex = lx / (l + 1e-10),\n    ey = ly / (l + 1e-10),\n    step = min(1.0/(abs(ex) + 1e-10), 1.0/(abs(ey) + 1e-10)),\n    res = 0.0;\n  vec3 color = getOri();\n\n  for (int i = 0; i < %%searchRange%%; i ++) {\n    float t = step * float(i);\n    if (t < l) {\n      float x = gl_FragCoord.x + t * ex,\n        y = gl_FragCoord.y + t * ey;\n      vec2 coord = vec2(x, y) / scale;\n      vec3 color_ = getOri(coord);\n      float d = distance(color, color_);\n      res += d * d;\n    }\n  }\n  return res;\n}\n\nfloat pf_p() {\n  float fMin = 1e10,\n    bMin = 1e10;\n  for (int i = 0; i < %%kG%%; i ++) {\n    float f = e_p(arrIdx(0, i)),\n      b = e_p(arrIdx(1, i));\n    if (f < fMin) {\n      fMin = f;\n    }\n    if (b < bMin) {\n      bMin = b;\n    }\n  }\n\n  return bMin / (fMin + bMin + 1e-10);\n}\n\nfloat estimAlpha(vec3 color, vec3 fColor, vec3 bColor) {\n  float d = distance(fColor, bColor);\n  return dot((color - bColor), (fColor - bColor)) / (d * d);\n}\n\nfloat a_p(vec2 FCoord, vec2 BCoord, float pfp) {\n  vec3 color = getOri();\n  float alpha = estimAlpha(color, getOri(FCoord), getOri(BCoord));\n\n  return pfp + (1.0 - 2.0 * pfp) * alpha;\n}\n\nfloat d_p(vec2 coord) {\n  return distance(gl_FragCoord.xy, coord);\n}\n\nfloat m_p(vec2 coord, vec2 FCoord, vec2 BCoord) {\n  vec3 color = getOri(coord),\n    fColor = getOri(FCoord),\n    bColor = getOri(BCoord);\n  float alpha = estimAlpha(color, fColor, bColor);\n  return length(color - alpha * fColor - (1.0 - alpha) * bColor);\n}\n\nfloat n_p(vec2 FCoord, vec2 BCoord) {\n  float res = 0.0;\n  for (int i = -1; i < 2; i ++) {\n    for (int j = -1; j < 2; j ++) {\n      float m = m_p((gl_FragCoord.xy + vec2(float(i), float(j)))/scale, FCoord, BCoord);\n      res += m * m;\n    }\n  }\n\n  return res;\n}\n\nfloat g_p(vec2 FCoord, vec2 BCoord, float pfp) {\n  float np = pow(n_p(FCoord, BCoord), 3.0),\n    ap = pow(a_p(FCoord, BCoord, pfp), 2.0),\n    dpf = d_p(FCoord),\n    dpb = pow(d_p(BCoord), 4.0);\n\n  return np * ap * dpf * dpb;\n}\n\nFBPair gathering() {\n  float gpMin = 1.0e10;\n  float pfp = pf_p();\n  int idxI = 0, idxJ = 0;\n  for (int i = 0; i < %%kG%%; i ++) {\n    for (int j = 0; j < %%kG%%; j ++) {\n      vec2 fs = arrIdx(0, i),\n        bs = arrIdx(1, j);\n      if (fs.x != -1.0 && bs.x != -1.0) {\n        float gp = g_p(fs, bs, pfp);\n        if (gp < gpMin) {\n          gpMin = gp;\n          idxI = i;\n          idxJ = j;\n        }\n      }\n    }\n  }\n\n  FBPair p;\n  p.FCoord = arrIdx(0,idxI); p.BCoord = arrIdx(1,idxJ);\n  p.F = getOri(p.FCoord); p.B = getOri(p.BCoord);\n\n  return p;\n}\n\nvoid testAlpha() {\n  if (getTri().x > 0.0 && getTri().x < 1.0) {\n    sample();\n    FBPair p = gathering();\n    float alpha = estimAlpha(getOri(), p.F, p.B);\n    // float alpha = estimAlpha(getOri(), getOri(FSamples[3]), getOri(BSamples[3]));\n    gl_FragColor = vec4(alpha, alpha, alpha, 1.0);\n    // gl_FragData[0] = vec4(p.F, 1.0);\n    // gl_FragColor = vec4(alpha, alpha, alpha, 1.0);\n  }\n  else {\n    gl_FragColor = vec4(getTri(), 1.0);\n    // gl_FragData[0] = vec4(0.0, 0.0, 0.0, 1.0);\n    // gl_FragColor = vec4(getTri(), 1.0);\n  }\n}\n\nvoid writeFB() {\n  if (getTri().x > 0.0 && getTri().x < 1.0) {\n    vec2 FSamples[%%kG%%];\n    vec2 BSamples[%%kG%%];\n    sample();\n    FBPair p = gathering();\n    // F B component\n    gl_FragColor = vec4(p.FCoord, p.BCoord);\n  }\n  else {\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n  }\n}\n\nvoid main() {\n  if (isTest == 0) {\n    writeFB();\n  }\n  else {\n    testAlpha();\n  }\n}\n"

/***/ },

/***/ 742:
/***/ function(module, exports) {

  module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform sampler2D oriState;\nuniform sampler2D triState;\nuniform sampler2D foreState;\nuniform sampler2D backState;\nuniform sampler2D acState;\nuniform vec2 scale;\n\nvec3 getOri() {\n  vec4 color = texture2D(oriState, (gl_FragCoord.xy) / scale);\n  return color.xyz;\n}\n\nvec3 getOri(vec2 coord) {\n  vec4 color = texture2D(oriState, coord);\n  return color.xyz;\n}\n\nvec3 getTri() {\n  vec4 color = texture2D(triState, (gl_FragCoord.xy) / scale);\n  return color.xyz;\n}\n\nvec3 getTri(vec2 coord) {\n  return texture2D(triState, coord).xyz;\n}\n\nfloat getAlpha(vec2 coord) {\n  return texture2D(acState, coord).x;\n}\n\nfloat getConfidence(vec2 coord) {\n  return texture2D(acState, coord).y;\n}\n\nvec3 getFore(vec2 coord) {\n  return texture2D(foreState, coord).xyz;\n}\n\nvec3 getBack(vec2 coord) {\n  return texture2D(backState, coord).xyz;\n}\n\nfloat estimAlpha(vec3 color, vec3 fColor, vec3 bColor) {\n  float d = distance(fColor, bColor);\n  return dot((color - bColor), (fColor - bColor)) / (d * d);\n}\n\nfloat m_p(vec2 coord, vec3 fColor, vec3 bColor) {\n  vec3 color = getOri(coord);\n  float alpha = estimAlpha(color, fColor, bColor);\n  return length(color - alpha * fColor - (1.0 - alpha) * bColor);\n}\n\nfloat smooth() {\n  float sigma2 = 100.0 / (9.0 * 3.1415926);\n  vec3 accumWcUpF = vec3(0.0, 0.0, 0.0), accumWcUpB = vec3(0.0, 0.0, 0.0);\n  float accumWcDownF = 0.0, accumWcDownB = 0.0;\n  float accumWfbUp = 0.0, accumWfbDown = 0.0;\n  float confidence00 = getConfidence(gl_FragCoord.xy / scale);\n  float alpha00 = getAlpha(gl_FragCoord.xy / scale);\n  float accumWaUp = 0.0, accumWaDown = 0.0;\n  for (int i = -10; i < 11; i ++) {\n    for (int j = -10; j < 11; j ++) {\n      vec2 offset = vec2(float(i), float(j));\n      vec2 coord = (gl_FragCoord.xy + offset) / scale;\n      float d = distance(offset, vec2(0.0, 0.0));\n      if (coord.x > 0.0 && coord.x < 1.0\n          && coord.y > 0.0 && coord.y < 1.0\n          && d <= 3.0 * sigma2) {\n        // aqr\n        float alpha = getAlpha(coord),\n        // fqr\n          confidence = getConfidence(coord);\n        float g = exp(- d*d / 2.0 / sigma2);\n        float wc = 0.0;\n        if (i == 0 && j == 0) {\n          wc = g * confidence;\n        }\n        else {\n          wc = g * confidence * abs(alpha - alpha00);\n        }\n        vec3 foreColor = getFore(coord),\n          backColor = getBack(coord);\n        float wca = wc * alpha;\n        accumWcUpF += wca * foreColor;\n        accumWcUpB += (wc - wca) * backColor;\n        accumWcDownF += wc * alpha;\n        accumWcDownB += wc - wca;\n\n        float wfbq = confidence * alpha * (1.0 - alpha);\n        accumWfbUp += wfbq * distance(foreColor, backColor);\n        accumWfbDown += wfbq;\n\n        float theta = 0.0;\n        if (getTri(coord).x == 0.0 || getTri(coord).x == 1.0) {\n          theta = 1.0;\n        }\n        float wa = confidence * g + theta;\n        accumWaUp += wa * alpha;\n        accumWaDown += wa;\n      }\n    }\n  }\n  vec3 fp = accumWcUpF / (accumWcDownF + 1e-10),\n    bp = accumWcUpB / (accumWcDownB + 1e-10);\n  float dfb = accumWfbUp / (accumWfbDown + 1e-10);\n  float confidenceP = min(1.0, distance(fp, bp) / dfb) * exp(-10.0 * m_p(gl_FragCoord.xy/scale, fp, bp));\n  float alphaP = accumWaUp / (accumWaDown + 1e-10);\n  alphaP = max(0.0, min(1.0, alphaP));\n  float alphaFinal = confidenceP * estimAlpha(getOri(), fp, bp) + (1.0 - confidenceP) * alphaP;\n\n  return alphaFinal;\n}\n\nvoid getAlpha() {\n  if (getTri().x == 0.0 || getTri().x == 1.0) {\n    gl_FragColor = vec4(getTri(), 1.0);\n  }\n  else {\n    float alpha = smooth();\n    gl_FragColor = vec4(alpha, alpha, alpha, 1.0);\n    // gl_FragColor = vec4(getBack(gl_FragCoord.xy / scale), 1.0);\n  }\n  // gl_FragColor = vec4(getBack(gl_FragCoord.xy / scale), 1.0);\n}\n\nvoid main() {\n  getAlpha();\n}\n"

/***/ },

/***/ 743:
/***/ function(module, exports) {

  module.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec2 quad;\n\nvoid main() {\n    gl_Position = vec4(quad, 0, 1.0);\n}\n"

/***/ },

/***/ 744:
/***/ function(module, exports) {

  module.exports = "#extension GL_EXT_draw_buffers : require\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform sampler2D oriState;\nuniform sampler2D triState;\nuniform sampler2D fbState;\nuniform sampler2D fbSigmaState;\nuniform vec2 scale;\nuniform int isTest;\n\nstruct point {\n  float x;\n  float y;\n  float mp;\n};\n\nstruct rTuple {\n  vec3 fColor;\n  vec3 bColor;\n  float alpha;\n  float confidence;\n};\n\nvec3 getOri() {\n  vec4 color = texture2D(oriState, (gl_FragCoord.xy) / scale);\n  return color.xyz;\n}\n\nvec3 getOri(vec2 coord) {\n  vec4 color = texture2D(oriState, coord);\n  return color.xyz;\n}\n\nvec3 getTri() {\n  vec4 color = texture2D(triState, (gl_FragCoord.xy) / scale);\n  return color.xyz;\n}\n\nvec3 getTri(vec2 coord) {\n  return texture2D(triState, coord).xyz;\n}\n\nvec2 getFCoord() {\n  return texture2D(fbState, (gl_FragCoord.xy) / scale).xy;\n}\n\nvec2 getBCoord() {\n  return texture2D(fbState, (gl_FragCoord.xy) / scale).zw;\n}\n\nvec2 getFCoord(vec2 coord) {\n  return texture2D(fbState, coord).xy;\n}\n\nvec2 getBCoord(vec2 coord) {\n  return texture2D(fbState, coord).zw;\n}\n\nfloat getFSigma() {\n  return texture2D(fbSigmaState, (gl_FragCoord.xy) / scale).x;\n}\n\nfloat getBSigma() {\n  return texture2D(fbSigmaState, (gl_FragCoord.xy) / scale).y;\n}\n\nfloat getFSigma(vec2 coord) {\n  return texture2D(fbSigmaState, coord).x;\n}\n\nfloat getBSigma(vec2 coord) {\n  return texture2D(fbSigmaState, coord).y;\n}\n\nfloat estimAlpha(vec3 color, vec3 fColor, vec3 bColor) {\n  float d = distance(fColor, bColor);\n  return dot((color - bColor), (fColor - bColor)) / (d * d);\n}\n\nfloat m_p(vec2 coord, vec3 fColor, vec3 bColor) {\n  vec3 color = getOri(coord);\n  float alpha = estimAlpha(color, fColor, bColor);\n  return length(color - alpha * fColor - (1.0 - alpha) * bColor);\n}\n\nfloat m_p(vec3 color, vec3 fColor, vec3 bColor) {\n  float alpha = estimAlpha(color, fColor, bColor);\n  return length(color - alpha * fColor - (1.0 - alpha) * bColor);\n}\n\nfloat sigma2(vec2 coord) {\n  float res = 0.0;\n  int neiCount = 0;\n  vec3 color = getOri(coord);\n  for (int i = -2; i < 3; i ++) {\n    for (int j = -2; j < 3; j ++) {\n      float xn = coord.x + (float(i) / scale.x),\n        yn = coord.y + (float(j) / scale.y);\n      if (xn > 0.0 && xn < 1.0\n        && yn > 0.0 && yn < 1.0) {\n          vec3 colorn = getOri(vec2(xn, yn));\n          float d = distance(colorn, color);\n          res += d * d;\n          neiCount ++;\n        }\n    }\n  }\n  return res / (float(neiCount) + 1e-10);\n}\n\nrTuple refine() {\n  int count = 0;\n  point minMp0, minMp1, minMp2;\n  minMp0.mp = 1e10; minMp1.mp = 1e10; minMp2.mp = 1e10;\n  for (int i = -5; i < 6; i ++) {\n    for (int j = -5; j < 6; j ++) {\n      float x = gl_FragCoord.x + float(i),\n        y = gl_FragCoord.y + float(j);\n      vec2 coord = vec2(x, y) / scale;\n\n      if (x > 0.0 && x < scale.x\n        && y > 0.0 && y < scale.y\n        && getTri(coord).x > 0.0 &&  getTri(coord).x < 1.0) {\n\n          vec3 fColor = getOri(getFCoord(coord));\n          vec3 bColor = getOri(getBCoord(coord));\n          float mp = m_p(coord, fColor, bColor);\n          if (mp < minMp0.mp) {\n            minMp2 = minMp1;\n            minMp1 = minMp0;\n            // minMp2.x = minMp1.x;\n            // minMp2.y = minMp1.y;\n            // minMp2.mp = minMp1.mp;\n            // minMp1.x = minMp0.x;\n            // minMp1.y = minMp0.y;\n            // minMp1.mp = minMp0.mp;\n\n            minMp0.x = coord.x;\n            minMp0.y = coord.y;\n            minMp0.mp = mp;\n            count ++;\n          }\n          else if (mp < minMp1.mp) {\n            minMp2 = minMp1;\n            // minMp2.x = minMp1.x;\n            // minMp2.y = minMp1.y;\n            // minMp2.mp = minMp1.mp;\n\n            minMp1.x = coord.x;\n            minMp1.y = coord.y;\n            minMp1.mp = mp;\n            count ++;\n          }\n          else if (mp < minMp2.mp) {\n            minMp2.x = coord.x;\n            minMp2.y = coord.y;\n            minMp2.mp = mp;\n            count ++;\n          }\n        }\n    }\n  }\n\n  // count must > 0 because self is included\n  count = count > 3 ? 3 : count;\n\n  vec2 coord = vec2(minMp0.x, minMp0.y);\n  vec2 fCoord = getFCoord(coord),\n    bCoord = getBCoord(coord);\n  vec3 fg = getOri(fCoord),\n    bg = getOri(bCoord);\n  float sf = sigma2(fCoord),\n    sb = sigma2(bCoord);\n\n  if (count > 1) {\n    coord = vec2(minMp1.x, minMp1.y);\n    fCoord = getFCoord(coord);\n    bCoord = getBCoord(coord);\n    fg += getOri(fCoord);\n    bg += getOri(bCoord);\n    sf += sigma2(fCoord);\n    sb += sigma2(bCoord);\n  }\n  if (count > 2) {\n    coord = vec2(minMp2.x, minMp2.y);\n    fCoord = getFCoord(coord);\n    bCoord = getBCoord(coord);\n    fg += getOri(fCoord);\n    bg += getOri(bCoord);\n    sf += sigma2(fCoord);\n    sb += sigma2(bCoord);\n  }\n  fg = fg / float(count);\n  bg = bg / float(count);\n  sf = sf / float(count);\n  sb = sb / float(count);\n\n  vec3 color = getOri();\n  rTuple r;\n  float d = distance(color, fg);\n  float df = d * d;\n  d = distance(color, bg);\n  float db = d * d;\n\n  if (df < sf) { r.fColor = color; }\n  else { r.fColor = fg; }\n  if (db < sb) { r.bColor = color; }\n  else { r.bColor = bg; }\n\n  if (r.fColor != r.bColor) { r.confidence = exp(-10.0 * m_p(color, fg, bg)); }\n  else { r.confidence = 1e-8; }\n  r.alpha = max(0.0, min(1.0, estimAlpha(color, r.fColor, r.bColor)));\n  // r.alpha = estimAlpha(color, fg, bg);\n  // r.alpha = estimAlpha(getOri(), getOri(getFCoord()), getOri(getBCoord()));\n\n  return r;\n}\n\nvoid writeFB() {\n  float triColor = getTri().x;\n  if (triColor == 0.0 || triColor == 1.0) {\n    // fore color texture\n    gl_FragData[0] = vec4(getOri(), 1.0);\n    // back color texture\n    gl_FragData[1] = vec4(getOri(), 1.0);\n    // alpha and confidence\n    gl_FragData[2] = vec4(triColor, 1.0, 1.0, 1.0);\n  }\n  else {\n    rTuple r = refine();\n    // fore color texture\n    gl_FragData[0] = vec4(r.fColor, 1.0);\n    // back color texture\n    gl_FragData[1] = vec4(r.bColor, 1.0);\n    // alpha and confidence\n    gl_FragData[2] = vec4(r.alpha, r.confidence, 1.0, 1.0);\n  }\n}\n\nvoid testAlpha() {\n  float triColor = getTri().x;\n  if (triColor == 0.0 || triColor == 1.0) {\n    gl_FragData[0] = vec4(getTri(), 1.0);\n  }\n  else {\n    rTuple r = refine();\n    // gl_FragData[0] = vec4(getOri(getBCoord()), 1.0);\n    // gl_FragData[0] = vec4(r.fColor, 1.0);\n    // float s = sigma2(getBCoord());\n    // gl_FragData[0] = vec4(s, s, s, 1.0);\n    gl_FragData[0] = vec4(r.alpha, r.alpha, r.alpha, 1.0);\n  }\n}\n\nvoid main() {\n  if (isTest == 0) {\n    writeFB();\n  }\n  else {\n    testAlpha();\n  }\n}\n"

/***/ }

});
//# sourceMappingURL=2.js.map?c2ac354a4a00c9a5d7da