webpackJsonp([0],{

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(220);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(32);

var _reactRouterDom = __webpack_require__(133);

var _reactBootstrap = __webpack_require__(191);

var _reactRouterBootstrap = __webpack_require__(331);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IssueList = __webpack_require__(782);

var _IssueList2 = _interopRequireDefault(_IssueList);

var _IssueEdit = __webpack_require__(788);

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

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(333);

var _reactRouterDom = __webpack_require__(133);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(191);

var _IssueAdd = __webpack_require__(783);

var _IssueAdd2 = _interopRequireDefault(_IssueAdd);

var _IssueFilter = __webpack_require__(784);

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queryString = __webpack_require__(785);

var IssueRow = function IssueRow(props) {
  function onDeleteClick() {
    props.deleteIssue(props.issue._id);
  }
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/issues/' + props.issue._id },
        props.issue._id.substr(-4)
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.status
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.owner
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.created.toDateString()
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.effort
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
    ),
    _react2.default.createElement(
      'td',
      null,
      props.issue.title
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        _reactBootstrap.Button,
        { bsSize: 'xsmall', onClick: onDeleteClick },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'trash' })
      )
    )
  );
};

IssueRow.propTypes = {
  issue: _propTypes2.default.object.isRequired,
  deleteIssue: _propTypes2.default.func.isRequired
};

function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return _react2.default.createElement(IssueRow, { key: issue._id, issue: issue, deleteIssue: props.deleteIssue });
  });
  return _react2.default.createElement(
    _reactBootstrap.Table,
    { bordered: true, condensed: true, hover: true, responsive: true },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Id'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Status'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Owner'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Created'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Effort'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Completion Date'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Title'
        ),
        _react2.default.createElement('th', null)
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      issueRows
    )
  );
}

IssueTable.propTypes = {
  issues: _propTypes2.default.array.isRequired,
  deleteIssue: _propTypes2.default.func.isRequired
};

var IssueList = function (_React$Component) {
  _inherits(IssueList, _React$Component);

  function IssueList() {
    _classCallCheck(this, IssueList);

    var _this = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

    _this.state = { issues: [] };
    _this.createIssue = _this.createIssue.bind(_this);
    _this.setFilter = _this.setFilter.bind(_this);
    _this.deleteIssue = _this.deleteIssue.bind(_this);
    return _this;
  }

  _createClass(IssueList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var oldParsed = queryString.parse(prevProps.location.search);
      var newParsed = queryString.parse(this.props.location.search);
      if (oldParsed.status === newParsed.status && oldParsed.effort_gte === newParsed.effort_gte && oldParsed.effort_lte === newParsed.effort_lte) {
        return;
      }
      this.loadData();
    }
  }, {
    key: 'setFilter',
    value: function setFilter(query) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: queryString.stringify(query)
      });
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      fetch('/api/issues' + this.props.location.search).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            data.records.forEach(function (issue) {
              issue.created = new Date(issue.created);
              if (issue.completionDate) {
                issue.completionDate = new Date(issue.completionDate);
              }
            });
            _this2.setState({ issues: data.records });
          });
        } else {
          response.json().then(function (error) {
            alert('Failed to fetch issues ' + error.message);
          });
        }
      }).catch(function (err) {
        alert('Error in fetching data from server: ' + err);
      });
    }
  }, {
    key: 'createIssue',
    value: function createIssue(newIssue) {
      var _this3 = this;

      fetch('/api/issues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIssue)
      }).then(function (responsetable) {
        if (response.ok) {
          response.json().then(function (updatedIssue) {
            updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate) {
              updatedIssue.completionDate = new Date(updatedIssue.completionDate);
            }
            var newIssues = _this3.state.issues.concat(updatedIssue);
            _this3.setState({ issues: newIssues });
          });
        } else {
          response.json().then(function (error) {
            alert('Failed to add issue: ' + error.message);
          });
        }
      }).catch(function (err) {
        alert('Error in sending data to server: ' + err.message);
      });
    }
  }, {
    key: 'deleteIssue',
    value: function deleteIssue(id) {
      var _this4 = this;

      fetch('/api/issues/' + id, { method: 'DELETE' }).then(function (response) {
        if (!response.ok) alert('Failed to delete issue');else _this4.loadData();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactBootstrap.Panel,
          { collapsible: true, header: 'Filter' },
          _react2.default.createElement(_IssueFilter2.default, { setFilter: this.setFilter,
            initFilter: queryString.parse(this.props.location.search) })
        ),
        _react2.default.createElement(IssueTable, { issues: this.state.issues, deleteIssue: this.deleteIssue }),
        _react2.default.createElement(_IssueAdd2.default, { createIssue: this.createIssue })
      );
    }
  }]);

  return IssueList;
}(_react2.default.Component);

exports.default = IssueList;


IssueList.propTypes = {
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired
};

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueAdd = function (_React$Component) {
  _inherits(IssueAdd, _React$Component);

  function IssueAdd() {
    _classCallCheck(this, IssueAdd);

    var _this = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(IssueAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      this.props.createIssue({
        owner: form.owner.value,
        title: form.title.value,
        status: 'New',
        created: new Date()
      });
      // clear the form for the next input
      form.owner.value = '';
      form.title.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { name: 'issueAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
          _react2.default.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
          _react2.default.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return IssueAdd;
}(_react2.default.Component);

exports.default = IssueAdd;


IssueAdd.propTypes = {
  createIssue: _propTypes2.default.func.isRequired
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

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueFilter = function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  function IssueFilter(props) {
    _classCallCheck(this, IssueFilter);

    var _this = _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).call(this, props));

    _this.state = {
      status: props.initFilter.status || '',
      effort_gte: props.initFilter.effort_gte || '',
      effort_lte: props.initFilter.effort_lte || '',
      changed: false
    };
    _this.onChangeStatus = _this.onChangeStatus.bind(_this);
    _this.onChangeEffortGte = _this.onChangeEffortGte.bind(_this);
    _this.onChangeEffortLte = _this.onChangeEffortLte.bind(_this);
    _this.applyFilter = _this.applyFilter.bind(_this);
    _this.resetFilter = _this.resetFilter.bind(_this);
    _this.clearFilter = _this.clearFilter.bind(_this);
    return _this;
  }

  _createClass(IssueFilter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        status: newProps.initFilter.status || '',
        effort_gte: newProps.initFilter.effort_gte || '',
        effort_lte: newProps.initFilter.effort_lte || '',
        changed: false
      });
    }
  }, {
    key: 'resetFilter',
    value: function resetFilter() {
      this.setState({
        status: this.props.initFilter.status || '',
        effort_gte: this.props.initFilter.effort_gte || '',
        effort_lte: this.props.initFilter.effort_lte || '',
        changed: false
      });
    }
  }, {
    key: 'setFilterOpen',
    value: function setFilterOpen(e) {
      e.preventDefault();
      this.props.setFilter({ search: '?status=Open' });
    }
  }, {
    key: 'setFilterAssigned',
    value: function setFilterAssigned(e) {
      e.preventDefault();
      this.props.setFilter({ search: '?status=Assigned' });
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter(e) {
      e.preventDefault();
      this.props.setFilter({ search: '' });
    }
  }, {
    key: 'onChangeStatus',
    value: function onChangeStatus(e) {
      this.setState({ status: e.target.value, changed: true });
    }
  }, {
    key: 'onChangeEffortGte',
    value: function onChangeEffortGte(e) {
      var effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effort_gte: e.target.value, changed: true });
      }
    }
  }, {
    key: 'onChangeEffortLte',
    value: function onChangeEffortLte(e) {
      var effortString = e.target.value;
      if (effortString.match(/^\d*$/)) {
        this.setState({ effort_lte: e.target.value, changed: true });
      }
    }
  }, {
    key: 'applyFilter',
    value: function applyFilter() {
      var newFilter = {};
      if (this.state.status) newFilter.status = this.state.status;
      if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
      if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
      this.props.setFilter(newFilter);
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter() {
      this.props.setFilter({});
    }
  }, {
    key: 'render',
    value: function render() {
      var Separator = function Separator() {
        return _react2.default.createElement(
          'span',
          null,
          ' | '
        );
      };
      return _react2.default.createElement(
        'div',
        null,
        'Status:',
        _react2.default.createElement(
          'select',
          { value: this.state.status, onChange: this.onChangeStatus },
          _react2.default.createElement(
            'option',
            { value: '' },
            '(Any)'
          ),
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
        '\xA0Effort between:',
        _react2.default.createElement('input', { size: 5, value: this.state.effort_gte, onChange: this.onChangeEffortGte }),
        '\xA0-\xA0',
        _react2.default.createElement('input', { size: 5, value: this.state.effort_lte, onChange: this.onChangeEffortLte }),
        _react2.default.createElement(
          'button',
          { onClick: this.applyFilter },
          'Apply'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.resetFilter, disabled: !this.state.changed },
          'Reset'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.clearFilter },
          'Clear'
        )
      );
    }
  }]);

  return IssueFilter;
}(_react2.default.Component);

exports.default = IssueFilter;


IssueFilter.propTypes = {
  setFilter: _propTypes2.default.func.isRequired,
  initFilter: _propTypes2.default.object.isRequired
};

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(786);
var objectAssign = __webpack_require__(20);
var decodeComponent = __webpack_require__(787);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(133);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NumInput = __webpack_require__(789);

var _NumInput2 = _interopRequireDefault(_NumInput);

var _DateInput = __webpack_require__(790);

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

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

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

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

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

},[334]);
//# sourceMappingURL=app.bundle.js.map