import React from 'react';
import PropTypes from 'prop-types';

import { Link as ThinkOutLink, NavLink, LinkButton, NavLinkButton } from 'assets/styles/typography';

function Link({ to, href, button, children, ...props }) {
  if (button) {
    if (to) {
      return (
        <NavLinkButton to={to} {...props}>
          {children}
        </NavLinkButton>
      );
    }
    return (
      <LinkButton href={href} {...props}>
        {children}
      </LinkButton>
    );
  }

  if (to) {
    return (
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    );
  }

  return (
    <ThinkOutLink href={href} {...props}>
      {children}
    </ThinkOutLink>
  );
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  button: PropTypes.bool,
  children: PropTypes.node,
};

export default Link;
