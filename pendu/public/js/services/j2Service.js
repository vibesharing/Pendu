// j2 SERVICE
function j2Service($http) {
    return {
        get : function() {
            return $http.get('/j2s');
        },
        update : function(id, data){
            return $http.put('/j2s/' + id, data);
        },
        create : function(data) {
            return $http.post('/j2s', data);
        },
        delete : function(id) {
            return $http.delete('/j2s/' + id);
        }
    }
};
