import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const MemberSocialFacebook = props => (
  <div className="staff__social-media">
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="social-media--link staff__social-media"
      href={props.link}
    >
      <FontAwesome name="facebook" />
    </a>
  </div>
);

MemberSocialFacebook.propTypes = {
  link: PropTypes.string.isRequired,
};

export default MemberSocialFacebook;
