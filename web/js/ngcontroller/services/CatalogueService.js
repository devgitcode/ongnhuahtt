var app = angular.module('web.application');
app.service('CatalogueService', function(){
    var catalogues = [
            {id: "0", catalogue_name: "Catalogue TP tổng hợp",url: "http://ongnhua.net.vn/wp-content/uploads/2016/06/Catalogue-TP-tong-hop.pdf",order: "0"},
            {id: "2", catalogue_name: "Catalogue hố ga nhựa Sekisui", url: "http://ongnhua.net.vn/wp-content/uploads/2016/06/Catalogue-TP-tong-hop.pdf", order: "2"}
            
        ];
    this.getCatalogues = function(){
        return catalogues;
    }

    
});