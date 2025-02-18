
import {
    Footer,
    FooterMeta,
    FooterMetaLink,
    FooterNavigation,
    FooterNavigationLink,
    FooterNavigationSection,
} from '@moduk/frontend/react';
import React from 'react';

const DDFooter = () => {
    return (
        <Footer
            navigation={
                <FooterNavigation>
                    <FooterNavigationSection title='Services' width='two-thirds' columns={1}>
                        <FooterNavigationLink href='#1'>Defence Developer Services</FooterNavigationLink>
                        <FooterNavigationLink href='#2'>Defence Data Analytics Platform</FooterNavigationLink>
                        <FooterNavigationLink href='#3'>Automation Centre of Expertise</FooterNavigationLink>
                    </FooterNavigationSection>

                    <FooterNavigationSection title='Further reading' width='one-third'>
                        <FooterNavigationLink href='#1'>Defence Service Manual</FooterNavigationLink>
                        <FooterNavigationLink href='#2'>Design pattern</FooterNavigationLink>
                        <FooterNavigationLink href='#3'>Defence Digital blogs</FooterNavigationLink>
                    </FooterNavigationSection>
                </FooterNavigation>
            }
            meta={
                <FooterMeta
                    content={
                        <>
                            Built by <a href='#' className='govuk-footer__link'>Defence Digital</a>
                        </>
                    }
                >
                    <FooterMetaLink href='#1'>Item 1</FooterMetaLink>
                    <FooterMetaLink href='#2'>Item 2</FooterMetaLink>
                    <FooterMetaLink href='#2'>Item 3</FooterMetaLink>
                </FooterMeta>
            }
        >
        </Footer>
    )
};

export default DDFooter;