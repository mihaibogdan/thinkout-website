import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Heading6 } from 'assets/styles/typography';
import PlusIcon from 'assets/img/icons/plus-icon.svg';
import MinusIcon from 'assets/img/icons/minus-icon.svg';
import { AccordionItems, AccordionItem, AccordionTitle, AccordionContent } from './style';

function Accordion({ accordionItems, allowMultiple, ...props }) {
  const [activeItems, setActiveItems] = useState({});
  const [isInAnimation, setIsInAnimation] = useState(false);

  const show = (accordionItem, accordionContent, index) => {
    accordionItem.style.height = `${accordionItem.offsetHeight}px`;
    setActiveItems((prevActiveItems) => ({
      ...prevActiveItems,
      [index]: true,
    }));

    setTimeout(() => {
      accordionContent.classList.add('displayBlock');
      accordionItem.style.height = `${
        accordionItem.offsetHeight + accordionContent.offsetHeight
      }px`;
    }, 0);
    setTimeout(() => {
      accordionItem.style.height = 'auto';
      setIsInAnimation(false);
    }, 300);
  };

  const hide = (accordionItem, accordionContent, index) => {
    accordionItem.style.height = `${accordionItem.offsetHeight}px`;
    setActiveItems((prevActiveItems) => ({
      ...prevActiveItems,
      [index]: false,
    }));

    setTimeout(() => {
      accordionItem.style.height = `${
        accordionItem.offsetHeight - accordionContent.offsetHeight
      }px`;
    }, 0);
    setTimeout(() => {
      accordionContent.classList.remove('displayBlock');
      accordionItem.style.height = 'auto';
      setIsInAnimation(false);
    }, 300);
  };

  const closeAllSiblings = (container) => {
    const currentActiveItem = container.querySelector('.active');
    if (currentActiveItem) {
      const nodeIndex = getNodeIndex(container, currentActiveItem);
      hide(currentActiveItem, currentActiveItem.querySelector('.contentWrapper'), nodeIndex);
    }
  };

  const getNodeIndex = (container, node) => {
    let index;
    container.childNodes.forEach((n, i) => {
      if (n === node) index = i;
    });

    return index;
  };

  const toggle = (e, index) => {
    if (isInAnimation) return;

    e.persist();
    const accordionItem = e.target.parentNode;
    const accordionContent = accordionItem.querySelector('.contentWrapper');
    setIsInAnimation(true);

    const container = accordionItem.parentNode;
    if (!allowMultiple) closeAllSiblings(container);
    if (!activeItems[index]) {
      show(accordionItem, accordionContent, index);
    } else {
      hide(accordionItem, accordionContent, index);
    }
  };

  return (
    <AccordionItems {...props}>
      {accordionItems.map((item, index) => (
        <AccordionItem key={item.id} className={activeItems[index] && 'active'}>
          <AccordionTitle className="accordion-title" onClick={(e) => toggle(e, index)}>
            <Heading6 color="inherit">{item.title}</Heading6>
            {activeItems[index] ? <MinusIcon width="20px" /> : <PlusIcon width="20px" />}
          </AccordionTitle>
          <AccordionContent className="contentWrapper">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionItems>
  );
}

Accordion.propTypes = {
  accordionItems: PropTypes.array,
  allowMultiple: PropTypes.bool,
};

export default Accordion;
