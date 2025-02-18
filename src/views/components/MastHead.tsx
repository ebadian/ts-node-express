import React from "react";

interface MastHeadProps {
    breadCrumbs?: [],
    mastHeader?: string,
    mastText?: string

}

const MastHead: React.FC<MastHeadProps> = ({
    breadCrumbs,
    mastHeader = "Deliver great services and technology for Defence",
    mastText = "Design for users, use existing platforms and be secure."
}) => {
    return (
        <section className="masthead" aria-label="hero">
            <div className="hero hero--breaded">
                <div className="hero__content">
                    <div className="govuk-grid-row breadcrumbs-account">
                        <div className="govuk-grid-column-two-thirds">
                            <p>{breadCrumbs}</p>
                        </div>
                        <div className="govuk-grid-column-one-third">
                            <nav className="moduk-account-header moduk-account-header--inverse">
                                <ul className="moduk-account-header__main">

                                    <li className="govuk-header__navigation-item">
                                        <a className="moduk-account-header__link moduk-account-header__link--inverse" href="/sign-in?returnTo=%2F">
                                            Sign in
                                        </a>
                                    </li>

                                </ul>
                            </nav>

                        </div>
                    </div>
                    <div className="hero__body">
                        <h1 className="hero__title">
                            {mastHeader}
                        </h1>
                        <p className="hero__description">
                            {mastText}
                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default MastHead;