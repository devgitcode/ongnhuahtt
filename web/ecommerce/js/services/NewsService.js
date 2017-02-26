var app = angular.module('web.application');
app.service('NewsService', function(){
    this.getNews = function(){
        var news = [
            {id: 1, title: "Mách bạn những cách sửa ống nước tiết kiệm tiền nhất", image: "news-images/1.jpg", content: "Nếu hệ thống ống nước nhà bạn gặp phải các vấn đề rò rỉ hay tắt nghẽn đường ống có thể dẫn tới những rắc rối nghiêm trọng. Việc đầu…"},
            {id: 2, title: "Nghiên cứu cho thấy dùng ống nước bằng đồng dễ gây ung thư", image: "news-images/2.jpg", content: "Dưới đây là những tổng hợp các nghiên cứu liên quan đến việc sử dụng ống nước bằng đồng có khả năng gây ung thư ca…"},
            {id: 3, title: "Mách bạn những cách sửa ống nước tiết kiệm tiền nhất", image: "news-images/3.jpg", content: "Ống nước có tác dụng giúp truyền dẫn hệ thống nước sạch, tưới tiêu hay dẫn nước thải nhanh chóng và hiệu quả hơn. Tuy …"},
        ];

        return news;
    }

    this.getHeadCompanyNews = function(){
        var news = {
            id: 1, 
            title: "Hoàng Tuấn Thành khai trương Showroom mới", 
            image: "news-images/4.jpg", 
            content: "Ngày 04.4.2015 tại 771 Kinh Dương Vương – KP2 – P.An Lạc Quận Bình Tân showroom nhựa Tiền Phong chính thức khai trương. Đến dự buổi khai trương tại Showroom có ông Hoàng Tung giám đốc cùng tất cả các cán bộ công nhân viên trong công ty. Để nhằm"
        };
        return news;
    }

    this.getCompanyNewsTitles = function(){
        var titles = [
            {id: 1, title: "Công ty Hoàng Tuấn Thành khai trương Showroom mới"},
            {id: 2, title: "Hội nghị hợp tác cùng phát triển"},
            {id: 3, title: "Hoàng Tuấn Thành khai trương Showroom"}
        ];
        return titles;
    }
});