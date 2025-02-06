import React from 'react';

interface RowHeaderProps {
        rowHeaderText: string;
        rowClassName?: string;
    }
    
    const RowHeader: React.FC<RowHeaderProps> = ({ 
        rowHeaderText,
        rowClassName='govuk-heading-l'
        }) => {
        
        return (
            <div className='govuk-grid-row'>
                <div className='govuk-grid-column-full'>
                    <h2 className={rowClassName}>{rowHeaderText}</h2>
                </div>
            </div>
        );
    };
    
    export default RowHeader;