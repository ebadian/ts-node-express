import React from 'react';

interface ColumnTextProps {
        longText: string;
        columnClassName?: string;
    }
    
    const ColumnText: React.FC<ColumnTextProps> = ({ 
        longText, 
        columnClassName="govuk-body-s"
    }) => {
        
        return (
                <p className={columnClassName}>{longText}</p>
        );
    };

    export default ColumnText;