
export type Language = "English" | "Spanish" | "French" | "Swedish";

export type Prompt = {
    content: string;
    numOfParas: number;
    language: Language;
}

export type ResponseText = {
    title: string;
    paragraphs: string[];
}