var nodes = document.querySelectorAll('.commit-message .message');

for(var i = 0, l = nodes.length; i !== l; i++){
  if(/^(fixup|squash|wip|tmp)!/.test(nodes[i].innerText)) {
    var button = document.querySelector('.merge-branch-action');
    button.setAttribute('disabled', 'disabled');
    button.classList.remove('btn-primary');
    document.querySelector('.merge-branch-heading').innerText = 'Squash fixups before merging.';
    document.querySelector('.merge-branch-description').innerHTML = '<code>git rebase origin/master -i --autosquash</code>';
    break;
  }
}
