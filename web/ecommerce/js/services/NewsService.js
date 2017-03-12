var app = angular.module('web.application');
app.service('NewsService', function(NodeUrl, $http){

    this.getHeadCompanyNews = function(){
        var news = {
            id: 1, 
            title: "Hoàn Tuấn Thành khai trương Showroom mới", 
            image: "news-images/4.jpg", 
            content: "Ngày 04.4.2015 tại 771 Kinh Dương Vương – KP2 – P.An Lạc Quận Bình Tân showroom nhựa Tiền Phong chính thức khai trương. Đến dự buổi khai trương tại Showroom có ông Hoàng Tung giám đốc cùng tất cả các cán bộ công nhân viên trong công ty. Để nhằm"
        };
        return news;
    }

    this.getCompanyNewsTitles = function(){
        var titles = [
            {id: 1, title: "Công ty Hoàn Tuấn Thành khai trương Showroom mới"},
            {id: 2, title: "Hội nghị hợp tác cùng phát triển"},
            {id: 3, title: "Hoàng Tuấn Thành khai trương Showroom"}
        ];
        return titles;
    }

    this.getNews = function(ntype){
        return $http.get(`${NodeUrl}/news/${ntype}/1`)
    }

    this.getNewsLimit = function(ntype, start, numOfRows){
        return $http.get(`${NodeUrl}/news/${ntype}/${start}/${numOfRows}`);
    }

    this.getNewsCount = function(ntype){
        return $http.get(`${NodeUrl}/news_count/${ntype}`);
    }
});