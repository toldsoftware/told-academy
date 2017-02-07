export function randomize<T>(items: T[]) {
    return items.map(x => ({ x, rand: Math.random() })).sort((a, b) => a.rand - b.rand).map(x => x.x);
}

export function distinct<T>(items: T[]) {
    return items.filter((x, i) => items.indexOf(x) === i);
}