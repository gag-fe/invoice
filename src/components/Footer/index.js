import React from 'react';
import APPCONFIG from 'constants/Config';
import Snackbar from 'material-ui/Snackbar';
import {
  connect
} from 'react-redux';
import {
  changeColorOption
} from '../../actions';
import {
  Link
} from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: this.props.snackbar.autoHideDuration,
      message: this.props.snackbar.message,
      open: this.props.snackbar.open,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.snackbar && nextProps.snackbar.open) {
      this.setState(nextProps.snackbar);
    }
  }

  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <section className="app-footer">
        <div className="container-fluid">
          <span className="float-left">
            <span>Copyright © <a className="brand" target="_blank" href={APPCONFIG.productLink}>{APPCONFIG.brand}</a> {APPCONFIG.year}</span>
          </span>
          <span className="float-right">
            <span>Built with Love <i className="material-icons">favorite_border</i></span>
          </span>
        </div>
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
                    />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  snackbar: state.settings.snackbar
});

module.exports = connect(
  mapStateToProps
)(Footer);
