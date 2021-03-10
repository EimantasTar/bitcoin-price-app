export const countTheTag = (tagName: string, document: Document): number => {
    const xpathResult = document.evaluate(`count(//${tagName})`, document, null, XPathResult.ANY_TYPE, null);
    return xpathResult.numberValue;
};

export const findMostCommonlyUsedTag = (tagsArr: string[], document: Document): { tagName: string, usedTimes: number } => {
    let tagName = '';
    let usedTimes = 0;
    tagsArr.forEach((tag: string) => {
        const count: number = countTheTag(tag, document);
        if (count > usedTimes) {
            usedTimes = count;
            tagName = tag;
        }
    });
    return {
        tagName,
        usedTimes
    };
};

const checkIfUnique = (localName: string, tagsArr: string[]): boolean => {
    let res = true;
    tagsArr.forEach((name: string) => {
        if (name === localName) {
            res = false;
        }
    });
    return res;
};

export const findAllUniqueTags = (document: Document): string[] => {
    const xpathResult = document.evaluate(`//*`, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    try {
        let thisNode: any = xpathResult.iterateNext();
        const tagsArr: string[] = [];
        while (thisNode) {
            const { children }: { children: any } = thisNode;
            if (children && children.length > 0) {
                for (const item of children) {
                    let isUnique = false;
                    const { localName }: { localName: string } = item;
                    if (localName) {
                        isUnique = checkIfUnique(localName, tagsArr);
                    }
                    if (isUnique) {
                        tagsArr.push(localName);
                    }
                }
            }
            thisNode = xpathResult.iterateNext();
        }
        return tagsArr;
    } catch (e) {
        alert(`Error: ${e}`);
    }
};

const getPath = (parentElement: any | null, localName: string) => {
    let res = `/${localName}`;
    let element = parentElement;
    while (element) {
        const { localName } = element;
        res = `/${localName}${res}`;
        element = element.parentElement;
    }
    return res;
}

export const countTagUsageInEveryNode = (tag: string, document: Document): { path: string, count: number }[] => {
    const xpathResult = document.evaluate(`//*`, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    try {
        let thisNode: any = xpathResult.iterateNext();
        const res = [];
        let path = '';
        while (thisNode) {
            const { parentElement, localName }: { parentElement: any | null, localName: string } = thisNode;
            path = getPath(parentElement, localName);
            const xpath = document.evaluate(`count(${path}/${tag})`, document, null, XPathResult.NUMBER_TYPE, null);
            const count = xpath.numberValue;
            if (!isNaN(count) && count > 0) {
                res.push({
                    path: `${path}/${tag}`,
                    count
                });
            }
            thisNode = xpathResult.iterateNext();
        }
        return res;
    } catch (e) {
        alert(`Error: ${e}`);
    }
};

export const longestPathWithMostUsage = (arr: { path: string, count: number }[]): { path: string, count: number } => {
    return arr.sort((a, b) => {
        let result = b.count - a.count;
        if (result === 0) result = b.path.split('/').length - a.path.split('/').length;
        return result
    }).shift();
};
