document.addEventListener('DOMContentLoaded', function() {
    var sideNav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sideNav);
  });

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal);
});

document.addEventListener('DOMContentLoaded', function() {
  var gallery = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(gallery);
});