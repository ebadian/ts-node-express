import { AccordionData, AccordionItem } from "../types/accordion"
import fs from 'fs/promises'
import path from 'path'

class InMemoryDb {
    private data: AccordionData = { accordion: [] }

    async loadFromFile(file: string): Promise<void> {
        try {
            const fileContent = await fs.readFile(path.resolve(file), "utf8");
            this.data = JSON.parse(fileContent);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    getAccordionItems(): AccordionItem[] {
        return this.data.accordion;
    }

 
}

export const db = new InMemoryDb();
