const dfs = (graph, value=[]) => {
  value.push(graph.val)

if (graph.left){
  dfs(graph.left, value)
}
if (graph.right){
  dfs(graph.right, value)
}
  return value
}