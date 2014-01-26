// $Id: script.js 222 2008-12-31 00:43:07Z jhedstrom $

Drupal.behaviors.opensourcery = function () {
  $(".ss-pager-item").bind('click', function() {
    // Make entire front page pager items clickable. Find href.
    var target = $(this).children('.ss-pager-info').children('.title').children('a').attr('href');
    if (target) {
      location.href = target;
    }
  });
}
