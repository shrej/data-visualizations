(function drawDolphinSocialNetwork() {
  var nodes = [];
  var connections = [];
  var lookup = {};
  var i = 0;
  var len;

  var nodesData = data.DynamicNetwork.MetaNetwork.nodes.nodeclass.node;
  var connectionsData = data.DynamicNetwork.MetaNetwork.networks.network.link;
  nodesData.forEach(function(node, index) {
    nodes.push({
      id: index,
      name: node._title
    });
  });

  len = nodes.length;
  for (i; i < len; i += 1) {
    lookup[nodes[i].id] = nodes[i];
  }

  connectionsData.forEach(function(link) {
    connections.push({
      source: lookup[link._source].name,
      target: lookup[link._target].name
    })
  });


  var visualization = d3plus.viz()
    .container("#viz")
    .type("network")
    .data(nodes)
    .edges(connections)
    .size("size")
    .id("name")
    .draw()
}());