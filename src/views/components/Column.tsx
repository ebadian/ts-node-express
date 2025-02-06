import React from 'react';
import ColumnText from './ColumnText'; 
import LinkedH3 from './LinkedH3';

export interface ColumnTextWrapperProps {
    text: string;
    href: string;
    longText: string;
    columnTextClassName?: string;
    wrapperClassName?: string;
    headingClassName?: string;
    linkClassName?: string;
}

const ColumnTextWrapper: React.FC<ColumnTextWrapperProps> = ({
    text,
    href,
    longText,
    columnTextClassName,
    wrapperClassName='govuk-grid-column-one-third',
    headingClassName,
    linkClassName
}) => {
  return (
    <div className={wrapperClassName}>
      <LinkedH3 text={text} href={href} headingClassName={headingClassName} linkClassName={linkClassName}/>
      <ColumnText longText={longText} columnClassName={columnTextClassName}/>
    </div>
  );
};

export default ColumnTextWrapper;