
import React from 'react';

interface ModHeaderProps {
    isBeta: boolean;
}


const ModHeader: React.FC<ModHeaderProps> = (
    { isBeta = true }
) => {
    return (
        <header role="banner">
            <div className="govuk-header moduk-header govuk-!-margin-bottom-2"><a href="#main-content" className="govuk-skip-link" data-module="govuk-skip-link" data-govuk-skip-link-init="">Skip to main content</a>
                <div className="govuk-header__container moduk-header__container govuk-width-container">
                    <div className="govuk-header__logo">
                        <a className="govuk-header__link moduk-header__logo-link" href="/" title="Digital MOD.UK">
                            <span className="govuk-header__logotype">
                                <img className="govuk-header__image" src="/assets/svg/moduk-header-logo.svg" alt="Ministry of Defence logo" width="210px" height="40px" />
                            </span>
                        </a>
                    </div>
                    <div className="govuk-header__content">
                        <span className="govuk-header__service-name moduk-header__service-name">Digital MOD.UK</span>
                    </div>
                </div>
            </div>
            <div className="govuk-phase-banner govuk-width-container phase-banner-minus-margin">
                <p className="govuk-phase-banner__content">
                    <strong className="govuk-tag govuk-phase-banner__content__tag moduk-tag--default">
                        Beta
                    </strong>
                    {isBeta && (
                        <span className="govuk-phase-banner__text">
                            This is a new service. Help us improve it and

                            <a className="govuk-link moduk-link--maroon" href="/send-your-feedback?from=%2F">send us your feedback</a>.

                        </span>
                    )}
                </p>
            </div>

        </header>

    );
}

export default ModHeader;
