function countConnectedFriends(friendships, startPerson) {
    const graph = new Map();

    for (const [a, b] of friendships) {
        if (!graph.has(a)) graph.set(a, []);
        if (!graph.has(b)) graph.set(b, []);
        graph.get(a).push(b);
        graph.get(b).push(a);
    }

    const visited = new Set([startPerson]);
    const queue = [startPerson];

    for (let i = 0; i < queue.length; i++) {
        const person = queue[i];

        for (const friend of graph.get(person) ?? []) {
            if (!visited.has(friend)) {
                visited.add(friend);
                queue.push(friend);
            }
        }
    }

    return visited.size;
}