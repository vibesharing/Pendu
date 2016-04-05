// j1 SERVICE
function j1Service($http) {
    return {
        get : function() {
            return $http.get('/j1s');
        },
        update : function(id, data){
            return $http.put('/j1s/' + id, data);
        },
        create : function(data) {
            return $http.post('/j1s', data);
        },
        delete : function(id) {
            return $http.delete('/j1s/' + id);
        }
    }
};
