export type AccordionHeading = {
    text: string;
};

export type AccordionContent = {
    html: string;
};

export type AccordionItem = {
    heading: AccordionHeading;
    content: AccordionContent;
};

export type AccordionData = {
    accordion: AccordionItem[];
};
