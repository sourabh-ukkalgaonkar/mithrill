// src/models/User.js
var m = require("mithril")

var User = {
    list: [],
    loadList: function() {
        // make XHR call
      return m.request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users"
      })
      .then(function(result){
        User.list = result.data
      })
    },
    current: {},
    load: function(id) {
      return m.request({
        method: "GET",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
      })
      .then(function(result) {
        User.current = result
      })
    },
    save: function(id) {
      return m.request({
        method: "PUT",
        url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
        data: User.current
      })
    }
}

module.exports = User
