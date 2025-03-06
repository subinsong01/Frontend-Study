# 🚀 DFS & BFS 

- 탐색이랑 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정을 의미
- 대표적인 그래프 탐색 알고리즘

### 📂 기본 동작 방식
1. 시작 노드를 큐에 넣고 방문 처리 한다.
2. 큐에서 원소를 꺼내어 방문하지 않은 인접 노드가 있는지 확인한다.
   - 있다면, 방문하지 않은 인접 노드를 큐에 삽입하고 방문처리한다.
3. 최단 거리 문제를 해결하는 경우

```js
//bfs 기본 형태
function bfs(graph, start, visited) {
  let queue = []; //큐를 배열로 선언
  queue.push(start);
  //현재 노드를 방문처리
  visited[start] = true;
  //큐가 빌 때까지 반복
  while(queue.length() != 0){
    v = queue.shift();
    console.log(v);
    //아직 방문하지 않은 인접한 원소들을 큐에 삽입
    for(let i of graph[v]){
      if(!visited[i]){
        queue.push(i);
        visited[i] = true;
      }
    }
  }
}
```
