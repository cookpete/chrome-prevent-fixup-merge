window.addEventListener('click', function(e){
  var node = e.target;
  while(node){
    if (
      node.classList &&
      node.classList.contains('btn-primary') &&
      /merge/i.test(node.innerText) &&
      hasFixups()
    ) {
      alert('Warning: You still have fixup commits');
      break;
    }
    node = node.parentNode;
  }
});

function hasFixups(){
  var nodes = document.querySelectorAll('.commit-message .message');
  for(var i = 0, l = nodes.length; i !== l; i++){
    if(/^(fixup|squash|wip|tmp)!/.test(nodes[i].innerText)) {
      return true;
    }
  }
  return false;
}
