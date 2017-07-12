import {
  connect
} from 'react-redux';
import {
  footerClick
} from '../actions/footerClick';

const Footer = ({
    dispatch
  }) =>
    <div className="footer">
      <div className="footer-item footer-user">
        <input className="fa fa-user" onClick={() => { dispatch(footerClick('USER_INFO')); }} />
      </div>
      <div className="footer-item footer-post">
        <input className="fa fa-calendar-plus-o" onClick={() => { dispatch(footerClick('POST')); }} />
      </div>
      <div className="footer-item footer-circle">
        <input className="fa fa-safari" onClick={() => { dispatch(footerClick('CIRCLE')); }} />
      </div>
    </div>;


const FooterContainer = connect()(Footer);

export default FooterContainer;
