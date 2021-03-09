export interface DocumentState {
    isFetching: boolean;
    data: {
        allUniqueTags: string[],
        mostUsedTagInfo: {
            tagName: string,
            usedTimes: number,
            path: string,
            count: number
        },
    };
    error: null | string | Error
}
