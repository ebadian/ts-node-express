import React from 'react';

interface LinkedH3Props {
        text: string;
        href: string;
        headingClassName?: string;
        linkClassName?: string;
    }


const LinkedH3: React.FC<LinkedH3Props> = ({ 
    text, 
    href, 
    headingClassName = "govuk-heading-m govuk-!-margin-bottom-2",
    linkClassName = "govuk-link govuk-link--no-visited-state"
  }) => {
    return (
      <h3 className={headingClassName}>
        <a 
          className={linkClassName} 
          href={href}
        >
          {text}
        </a>
      </h3>
    );
  };

export default LinkedH3;