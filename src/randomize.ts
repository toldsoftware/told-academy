export function randomize<T>(items: T[]) {
    return items.map(x => ({ x, rand: Math.random() })).sort((a, b) => a.rand - b.rand).map(x => x.x);
}