import { title } from "process";
import React from "react";
import LinkedH3 from "./LinkedH3";

interface Tiles {
    url: string,
    linkText: string,
    description: string;
}

export interface TiledRowsProps {
    title: string;
    tiles: Tiles[];
    titleClassName?: string;
    tileWrapperClassName?: string;
    linkClassName?: string;
    linkHeadingClassName?: string
    horizontalRule: boolean;
}


const TiledRows: React.FC<TiledRowsProps> = ({
    title,
    tiles,
    titleClassName = 'govuk-heading-l',
    tileWrapperClassName = 'govuk-grid-column-one-third',
    linkClassName = 'govuk-link govuk-link--no-visited-state',
    linkHeadingClassName = 'govuk-heading-m govuk-!-margin-bottom-2',
    horizontalRule
}) => {

    console.log("has hr " + horizontalRule);
    function Line(hasHr: boolean) {
        return hasHr ? < hr className="govuk-section-break govuk-section-break--visible" /> : null;
    }

    return (
        <>
            <div className='govuk-grid-row'>
                <div className="govuk-grid-column-full">
                    <h2 className={titleClassName}>{title}</h2>
                </div>
            </div>
            <div className='govuk-grid-row govuk-!-margin-bottom-6'>
                {tiles.map((tile, index) => (
                    <div className={tileWrapperClassName}>
                        <React.Fragment key={index}>
                            <LinkedH3
                                text={tile.linkText}
                                href={tile.url}
                                headingClassName={linkHeadingClassName}
                                linkClassName={linkClassName}
                            />
                            <p className='govuk-body-s'>{tile.description}</p>
                        </React.Fragment>
                    </div>

                ))
                }
            </div>
            {Line(horizontalRule)}
        </>

    )
};

export default TiledRows;