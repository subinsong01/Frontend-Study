//방향 없는 그래프
let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  let [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}
//방향 있는 그래프
let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
  let [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
}

