'use strict';
var React = require('react');

var Footer = React.createClass({
    contextTypes: {
        session: React.PropTypes.object
    },

    propTypes: {
        version: React.PropTypes.string // App version number
    },

    render: function() {
        var session = this.context.session;
        var disabled = !session;
        var userActionRender;

        if (!(session && session['auth.userid'])) {
            userActionRender = <a href="#" data-trigger="login" disabled={disabled}>Submitter sign-in</a>;
        } else {
            userActionRender = <a href="#" data-trigger="logout">Submitter sign out</a>;
        }
        return (
            <footer id="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="app-version">{this.props.version}</div>
                    </div>
                </div>
                <div className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 col-sm-push-7">
                                <ul className="footer-links">
                                    <li><a href="mailto:encode-help@lists.stanford.edu">Contact</a></li>
                                    <li><a href="http://www.stanford.edu/site/terms.html">Terms of Use</a></li>
                                    <li id="user-actions-footer">{userActionRender}</li>
                                </ul>
                                <p className="copy-notice">&copy;{new Date().getFullYear()} Stanford University.</p>
                            </div>

                            <div className="col-sm-7 col-sm-pull-5">
                                <ul className="footer-logos">
                                    <li><a href="/"><img src="/static/img/encode-logo-small-2x.png" alt="ENCODE" id="encode-logo" height="45px" width="78px" /></a></li>
                                    <li><a href="http://www.ucsc.edu"><img src="/static/img/ucsc-logo-white-alt-2x.png" alt="UC Santa Cruz" id="ucsc-logo" width="107px" height="42px" /></a>
                                    </li>
                                    <li><a href="http://www.stanford.edu"><img src="/static/img/su-logo-white-2x.png" alt="Stanford University" id="su-logo" width="105px" height="49px" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;
