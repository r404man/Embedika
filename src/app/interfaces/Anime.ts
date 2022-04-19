export default interface Anime {
    id: number;
    status: string;
    genres: string[];
    title: {
        english: string;
    };
}

export type Query = {
    Page: {
        media: Anime[];
    }
}