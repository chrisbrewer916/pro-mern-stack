import React from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Glyphicon, Table, Panel } from 'react-bootstrap';
import IssueFilter from './IssueFilter.jsx';
import Toast from './Toast.jsx';

const queryString = require('query-string');

const IssueRow = (props) => {
  function onDeleteClick() {
    props.deleteIssue(props.issue._id);
  }
  return (
    <tr>
      <td><Link to={`/issues/${props.issue._id}`}>{props.issue._id.substr(-4)}</Link></td>
      <td>{props.issue.status}</td>
      <td>{props.issue.owner}</td>
      <td>{props.issue.created.toDateString()}</td>
      <td>{props.issue.effort}</td>
      <td>
        {props.issue.completionDate ?
          props.issue.completionDate.toDateString() : ''}
      </td>
      <td>{props.issue.title}</td>
      <td>
        <Button bsSize="xsmall" onClick={onDeleteClick}>
          <Glyphicon glyph="trash" />
        </Button>
      </td>
    </tr>
  );
};

IssueRow.propTypes = {
  issue: PropTypes.object.isRequired,
  deleteIssue: PropTypes.func.isRequired,
};

function IssueTable(props) {
  const issueRows = props.issues.map(issue =>
    <IssueRow key={issue._id} issue={issue} deleteIssue={props.deleteIssue} />);
  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Completion Date</th>
          <th>Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
    </Table>
  );
}

IssueTable.propTypes = {
  issues: PropTypes.array.isRequired,
  deleteIssue: PropTypes.func.isRequired,
};

export default class IssueList extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      toastVisable: false, toastMessage: '', toastType: 'success',
    };
    this.setFilter = this.setFilter.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);
  }

  showError(message) {
    this.setState({ toastVisable: true, toastMessage: message, toastType: 'danger' });
  }

  dismissToast() {
    this.setState({ toastVisable: false });
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const oldParsed = queryString.parse(prevProps.location.search);
    const newParsed = queryString.parse(this.props.location.search);
    if (oldParsed.status === newParsed.status
      && oldParsed.effort_gte === newParsed.effort_gte
      && oldParsed.effort_lte === newParsed.effort_lte) {
      return;
    }
    this.loadData();
  }

  setFilter(query) {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: queryString.stringify(query),
    });
  }

  loadData() {
    fetch(`/api/issues${this.props.location.search}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          data.records.forEach((issue) => {
            issue.created = new Date(issue.created);
            if (issue.completionDate) {
              issue.completionDate = new Date(issue.completionDate);
            }
          });
          this.setState({ issues: data.records });
        });
      } else {
        response.json().then((error) => {
          this.showError(`Failed to fetch issues ${error.message}`);
        });
      }
    }).catch((err) => {
      this.showError(`Error in fetching data from server: ${err}`);
    });
  }

  deleteIssue(id) {
    fetch(`/api/issues/${id}`, { method: 'DELETE' }).then(response => {
      if (!response.ok) alert('Failed to delete issue');
      else this.loadData();
    });
  }

  render() {
    return (
      <div>
        <Panel collapsible header="Filter">
          <IssueFilter setFilter={this.setFilter} initFilter={queryString.parse(this.props.location.search)} />
        </Panel>
        <IssueTable issues={this.state.issues} deleteIssue={this.deleteIssue} />
        <Toast showing={this.state.toastVisable} message={this.state.toastMessage}
          onDismiss={this.dismissToast} bsStyle={this.state.toastType}
        />
      </div>
    );
  }
}

IssueList.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
