import React, { ReactNode } from "react";

interface MainContainerProps {
    components: ReactNode[] | ReactNode
}

const MainContainer: React.FC<MainContainerProps> = ({
    components
}) => {
    return (
        <div className="govuk-width-container">
            <main className="govuk-main-wrapper-no-top-padding" id="main-content" role="main">
                {components}
            </main>
        </div>
    )
}

export default MainContainer;