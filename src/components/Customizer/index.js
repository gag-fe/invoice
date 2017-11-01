import 'jquery-slimscroll/jquery.slimscroll.min';
import React from 'react';
import APPCONFIG from 'constants/Config';
import LayoutOptions from './LayoutOptions';
import ColorOptions from './ColorOptions';
import ThemeOptions from './ThemeOptions';

class Customizer extends React.Component {

  componentDidMount() {
    const quickviewInner = this.quickview;
    $(quickviewInner).slimscroll({
      height: '100%'
    });
  }

  toggleCustomizer = () => {
    const $body = $('#body');
    $body.toggleClass('quickview-open-customizer');
  }

  closeCustomizer = () => {
    const $body = $('#body');
    $body.removeClass('quickview-open-customizer');
  }


  render() {
    return (
      <section
        className="quickview-wrapper customizer hidden-lg-down theme-light"
        id="quickview-customizer"
            >
        <a className="customizer-close" href="javascript:;" onClick={this.closeCustomizer}>
          <span className="material-icons">close</span>
        </a>
        <a className="customizer-toggle" href="javascript:;" onClick={this.toggleCustomizer}>
          <span className="material-icons">settings</span>
        </a>

        <div className="quickview-inner" ref={(c) => { this.quickview = c; }}>
          <p className="customizer-header">模版定制</p>
          <p className="small no-margin"></p>

          <div className="divider divider-lg divider-solid" />
          <LayoutOptions />

          <div className="divider divider-lg divider-solid" />
          <ColorOptions />

          <div className="divider divider-lg divider-solid" />
          <ThemeOptions />

          <div className="divider divider-lg divider-solid" />
          <div className="text-right">
            <a target="_blank" href={APPCONFIG.productLink}>配置项</a>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = Customizer;
