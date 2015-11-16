var api = {
  // Set URL
  url: "http://jsonplaceholder.typicode.com/",

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  }

};

var getUser = function getUser(callback) {
  api.ajax({
    method: 'GET',
    url: api.url + 'users',
    dataType: 'json'
  }, callback);
}
