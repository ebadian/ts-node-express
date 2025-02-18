import React from 'react';
import ColumnText from './ColumnText';
import LinkedH3 from './LinkedH3';

interface columnItem {
  text: string,
  href: string,
  longText: string;
}

export interface ColumnTextWrapperProps {
  columnItems: columnItem[];

  columnTextClassName?: string;
  wrapperClassName?: string;
  headingClassName?: string;
  linkClassName?: string;
}

const ColumnTextWrapper: React.FC<ColumnTextWrapperProps> = ({
  columnItems,
  columnTextClassName = 'govuk-body-s',
  wrapperClassName = 'govuk-grid-row govuk-!-margin-bottom-6',
  linkClassName = 'govuk-heading-m govuk-!-margin-bottom-2'
}) => {
  return (
    <div className={wrapperClassName}>
      {columnItems.map((columnItem, index) => (
        <div className='govuk-grid-column-one-third'>
          <React.Fragment key={index}>
            <LinkedH3
              text={columnItem.text}
              href={columnItem.href}
              headingClassName={linkClassName}
            />
            <ColumnText longText={columnItem.longText} columnClassName={columnTextClassName} />
          </React.Fragment>
        </div>
      ))}
    </div>
  );
};

export default ColumnTextWrapper;