import React from 'react';
import { withTheme } from 'styled-components';
import { rgba } from 'polished';

import PropTypes from 'prop-types';

import { Heading1, Heading5 } from 'assets/styles/typography';
import { StylePricingCard, CardEmoji, Price, Currency, Frequency } from './style';

function PricingCard({
  cardEmoji,
  cardTitle,
  currency,
  price,
  frequency,
  details,
  cardButton,
  theme,
  children,
  ...props
}) {
  return (
    <StylePricingCard {...props}>
      <CardEmoji>{cardEmoji}</CardEmoji>
      <Heading5 margin="8px 0px 4px 0px">{cardTitle}</Heading5>
      <Price>
        <Currency>{currency}</Currency>
        <Heading1 color={rgba(theme.palette.neutral.black, 0.8)} fontWeight="300">
          {price}
        </Heading1>
        <Frequency>/{frequency}</Frequency>
      </Price>
      {children}
    </StylePricingCard>
  );
}

PricingCard.propTypes = {
  cardEmoji: PropTypes.string,
  cardTitle: PropTypes.string,
  currency: PropTypes.string,
  price: PropTypes.string,
  frequency: PropTypes.string,
  details: PropTypes.node,
  cardButton: PropTypes.string,
  isPopular: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  theme: PropTypes.object,
};

export default withTheme(PricingCard);
