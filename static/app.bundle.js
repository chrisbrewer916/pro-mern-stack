webpackJsonp([0],{

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(219);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(32);

var _reactRouterDom = __webpack_require__(190);

var _reactBootstrap = __webpack_require__(284);

var _reactRouterBootstrap = __webpack_require__(331);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IssueList = __webpack_require__(781);

var _IssueList2 = _interopRequireDefault(_IssueList);

var _IssueEdit = __webpack_require__(782);

var _IssueEdit2 = _interopRequireDefault(_IssueEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById('root');

var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

var Header = function Header() {
  return _react2.default.createElement(
    _reactBootstrap.Navbar,
    { fluid: true },
    _react2.default.createElement(
      _reactBootstrap.Navbar.Header,
      null,
      _react2.default.createElement(
        _reactBootstrap.Navbar.Brand,
        null,
        'Issue Tracker'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Nav,
      null,
      _react2.default.createElement(
        _reactRouterBootstrap.LinkContainer,
        { to: '/issues' },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          null,
          'Issues'
        )
      ),
      _react2.default.createElement(
        _reactRouterBootstrap.LinkContainer,
        { to: '/reports' },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          null,
          'Reports'
        )
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Nav,
      { pullRight: true },
      _react2.default.createElement(
        _reactBootstrap.NavItem,
        null,
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'plus' }),
        ' Create Issue'
      ),
      _react2.default.createElement(
        _reactBootstrap.NavDropdown,
        { id: 'user-dropdown', title: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'option-horizontal' }), noCaret: true },
        _react2.default.createElement(
          _reactBootstrap.MenuItem,
          null,
          'Logout'
        )
      )
    )
  );
};

var IssueRoutes = function IssueRoutes(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { path: match.url + '/:id', component: _IssueEdit2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '' + match.url, component: (0, _reactRouter.withRouter)(_IssueList2.default) })
  );
};

var App = function App() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Header, null),
      _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          _reactRouter.Switch,
          null,
          _react2.default.createElement(_reactRouter.Route, { path: '/issues', component: IssueRoutes }),
          _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', render: function render() {
              return _react2.default.createElement(_reactRouter.Redirect, { to: '/issues' });
            } }),
          _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'h5',
          null,
          _react2.default.createElement(
            'small',
            null,
            'Full source code available at this ',
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/vasansr/pro-mern-stack' },
              'GitHub repository'
            )
          )
        )
      )
    )
  );
};

IssueRoutes.propTypes = {
  match: _propTypes2.default.object.isRequired
};

_reactDom2.default.render(_react2.default.createElement(App, null), contentNode); // Render the component inside the content Node

if (false) {
  module.hot.accept();
}

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (159:1)\n\n\u001b[0m \u001b[90m 157 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 158 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mPanel\u001b[39m collapsible header\u001b[33m=\u001b[39m\u001b[32m\"Filter\"\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 159 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m     | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 160 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mIssueFilter\u001b[39m setFilter\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetFilter}\n \u001b[90m 161 | \u001b[39m            initFilter\u001b[33m=\u001b[39m{queryString\u001b[33m.\u001b[39mparse(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mlocation\u001b[33m.\u001b[39msearch)} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 162 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(190);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NumInput = __webpack_require__(783);

var _NumInput2 = _interopRequireDefault(_NumInput);

var _DateInput = __webpack_require__(784);

var _DateInput2 = _interopRequireDefault(_DateInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueEdit = function (_React$Component) {
  _inherits(IssueEdit, _React$Component);

  //eslint-disable-line
  function IssueEdit() {
    _classCallCheck(this, IssueEdit);

    var _this = _possibleConstructorReturn(this, (IssueEdit.__proto__ || Object.getPrototypeOf(IssueEdit)).call(this));

    _this.state = {
      issue: {
        _id: '', title: '', status: '', owner: '', effort: null,
        completionDate: null, created: null
      },
      invalidFields: {}
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.onValidityChange = _this.onValidityChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(IssueEdit, [{
    key: 'onSubmit',
    value: function onSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      if (Object.keys(this.state.invalidFields).length !== 0) {
        return;
      }
      fetch('/api/issues/' + this.props.match.params.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.issue)
      }).then(function (response) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate) {
              updatedIssue.completionDate = new Date(updatedIssue.completionDate);
            }
            _this2.setState({ issue: updatedIssue });
            alert('Updated issue successfully.');
          });
        } else {
          response.json().then(function (error) {
            alert('Failed to update issue: ' + error.messgae);
          });
        }
      }).catch(function (err) {
        alert('Error in sending data to server: ' + err.message);
      });
    }
  }, {
    key: 'onValidityChange',
    value: function onValidityChange(event, valid) {
      var invalidFields = Object.assign({}, this.state.invalidFields);
      if (!valid) {
        invalidFields[event.target.name] = true;
      } else {
        delete invalidFields[event.target.name];
      }
      this.setState({ invalidFields: invalidFields });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.loadData();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event, convertedValue) {
      var issue = Object.assign({}, this.state.issue);
      var value = convertedValue !== undefined ? convertedValue : event.target.value;
      issue[event.target.name] = value;
      this.setState({ issue: issue });
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this3 = this;

      fetch('/api/issues/' + this.props.match.params.id).then(function (response) {
        if (response.ok) {
          response.json().then(function (issue) {
            issue.created = new Date(issue.created);
            issue.completionDate = issue.completionDate != null ? new Date(issue.completionDate) : null;
            _this3.setState({ issue: issue });
          });
        } else {
          response.json().then(function (error) {
            alert('Failed to fetch issue: ' + error.message);
          });
        }
      }).catch(function (err) {
        alert('Error in fetching data from server: $err.message');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var issue = this.state.issue;
      var validationMessage = Object.keys(this.state.invalidFields).length === 0 ? null : _react2.default.createElement(
        'div',
        { className: 'error' },
        'Please correct invalid fields before submitting.'
      );
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.onSubmit },
          'ID: ',
          issue._id,
          _react2.default.createElement('br', null),
          'Created: ',
          issue.created ? issue.created.toDateString() : '',
          _react2.default.createElement('br', null),
          'Status: ',
          _react2.default.createElement(
            'select',
            { name: 'status', value: issue.status, onChange: this.onChange },
            _react2.default.createElement(
              'option',
              { value: 'New' },
              'New'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Open' },
              'Open'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Assigned' },
              'Assigned'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fixed' },
              'Fixed'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Verified' },
              'Verified'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Closed' },
              'Closed'
            )
          ),
          _react2.default.createElement('br', null),
          'Owner: ',
          _react2.default.createElement('input', { name: 'owner', value: issue.owner, onChange: this.onChange }),
          _react2.default.createElement('br', null),
          'Effort: ',
          _react2.default.createElement(_NumInput2.default, { size: 5, name: 'effort', value: issue.effort, onChange: this.onChange }),
          _react2.default.createElement('br', null),
          'Completion Date: ',
          _react2.default.createElement(_DateInput2.default, { name: 'completionDate', value: issue.completionDate,
            onChange: this.onChange, onValidityChange: this.onValidityChange }),
          _react2.default.createElement('br', null),
          'Title: ',
          _react2.default.createElement('input', { name: 'title', size: 50, value: issue.title, onChange: this.onChange }),
          _react2.default.createElement('br', null),
          validationMessage,
          _react2.default.createElement(
            'button',
            { type: 'submit' },
            'Submit'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/issues' },
            'Back to issue list'
          )
        )
      );
    }
  }]);

  return IssueEdit;
}(_react2.default.Component);

exports.default = IssueEdit;


IssueEdit.propTypes = {
  match: _propTypes2.default.object.isRequired
};

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumInput = function (_React$Component) {
  _inherits(NumInput, _React$Component);

  function NumInput(props) {
    _classCallCheck(this, NumInput);

    var _this = _possibleConstructorReturn(this, (NumInput.__proto__ || Object.getPrototypeOf(NumInput)).call(this, props));

    _this.state = { value: _this.format(props.value) };
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(NumInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({ value: this.format(newProps.value) });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      this.props.onChange(e, this.unformat(this.state.value));
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      if (e.target.value.match(/^\d*$/)) {
        this.setState({ value: e.target.value });
      }
    }
  }, {
    key: 'format',
    value: function format(num) {
      return num != null ? num.toString() : '';
    }
  }, {
    key: 'unformat',
    value: function unformat(str) {
      var val = parseInt(str, 10);
      return isNaN(val) ? null : val;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({ type: 'text' }, this.props, { value: this.state.value,
        onBlur: this.onBlur, onChange: this.onChange
      }));
    }
  }]);

  return NumInput;
}(_react2.default.Component);

exports.default = NumInput;


NumInput.propTypes = {
  value: _propTypes2.default.number,
  onChange: _propTypes2.default.func.isRequired
};

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput(props) {
    _classCallCheck(this, DateInput);

    var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

    _this.state = { value: _this.editFormat(props.value), focused: false, valid: true };
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(DateInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.value !== this.props.value) {
        this.setState({ value: this.editFormat(newProps.value) });
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      this.setState({ focused: true });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var value = this.unformat(this.state.value);
      var valid = this.state.value === '' || value != null;
      if (valid !== this.state.valid && this.props.onValidityChange) {
        this.props.onValidityChange(e, valid);
      }
      this.setState({ focused: false, valid: valid });
      if (valid) this.props.onChange(e, value);
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      if (e.target.value.match(/^[\d-]*$/)) {
        this.setState({ value: e.target.value });
      }
    }
  }, {
    key: 'displayFormat',
    value: function displayFormat(date) {
      return date != null ? date.toDateString() : '';
    }
  }, {
    key: 'editFormat',
    value: function editFormat(date) {
      return date != null ? date.toISOString().substr(0, 10) : '';
    }
  }, {
    key: 'unformat',
    value: function unformat(str) {
      var val = new Date(str);
      return isNaN(val.getTime()) ? null : val;
    }
  }, {
    key: 'render',
    value: function render() {
      var className = !this.state.valid && !this.state.focused ? 'invalid' : null;
      var value = this.state.focused || !this.state.valid ? this.state.value : this.displayFormat(this.props.value);
      return _react2.default.createElement('input', { type: 'text', size: 20, name: this.props.name,
        className: className, value: value,
        placeholder: this.state.focused ? 'yyyy-mm-dd' : null,
        onFocus: this.onFocus, onBlur: this.onBlur, onChange: this.onChange
      });
    }
  }]);

  return DateInput;
}(_react2.default.Component);

exports.default = DateInput;


DateInput.propTypes = {
  value: _propTypes2.default.object,
  onChange: _propTypes2.default.func.isRequired,
  onValidityChange: _propTypes2.default.func,
  name: _propTypes2.default.string.isRequired
};

/***/ })

},[333]);
//# sourceMappingURL=app.bundle.js.map