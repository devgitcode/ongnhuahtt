var app = angular.module('web.application');
app.service('HomeService', function(){
    this.getCompanyInfo = function(){
            var company = {
                content: '<strong>Cùng hội nhập với sự phát triển chung của xã hội, đất nước thương hiệu <a href="http://ongnhua.net.vn/">ống nhựa Tiền phong</a> ngày càng phát triển vững mạnh và tiến xa ra thị trường các nước trong khu vực.</strong> Để làm được điều đó Công ty CP Nhựa Thiếu niên Tiền Phong không ngừng đẩy mạnh công tác sản xuất nâng cao chất lượng sản phẩm cũng như đầu tư các trang thiết bị máy móc hiện đại, tân tiến nhất để cho ra những sản phẩm đạt tiêu chuẩn ISO chất lượng cao.<h2><span style="color: #3366ff;"><em><span style="font-size: 14pt;"><strong>Sơ lược về lịch sử hình thành của ống nước nhựa Tiền Phong</strong></span></em></span></h2> Được thành lập từ năm 1960 nhà máy Nhựa Thiếu niên Tiền phong chính thức đi vào hoạt động trong ngành chuyên sản xuất các mặt hàng phục vụ thiếu niên nhi đồng. Đến năn 1993 nhà máy Nhựa Thiếu niên Tiền Phong chính thức đổi tên thành Công ty Nhựa Thiếu niên Tiền phong và trở thành một doanh nghiệp Nhà nước, sản xuất các sản phẩm từ chất dẻo. Sản phẩm của chúng tôi bao gồm ống nhựa, ống nước, ống HPDE, ống uPVC, ống PPR…được sản xuất trên dây chuyền công nghệ cao đạt chuẩn chất lượng ISO 9001:2008. Với những bước đi đúng đắn, đưa ra chiến lược phát triển thị trường vững chắc, những sản phẩm ống nước, ống nhựa của Công ty Tiền Phong ngày càng chiếm lĩnh thị trường bằng uy tín cũng như giá bán cạnh tranh. Bên cạnh đó hòa cùng với quá trình đổi mới nền kinh tế và công nghiệp hóa hiện đại hóa đất nước. Tiền Phong đã mạnh dạn đưa ra các chiến lược đầu tư, đổi mới sản phẩm cho phù hợp với nhu cầu thị trường. Đặc biệt chúng tôi chú trọng đến các sản phẩm ống nhựa Tiền Phong với các mặt hàng chủ yếu là ống nhựa u. PVC, ống HPDE, ống PPR dùng trong lĩnh vực cung cấp nước sạch, tiêu thoát nước thải phục vụ nhu cầu dân dụng và sử dụng trong các ngành xây dựng, công nghiệp, nông nghiệp…<h2><span style="color: #3366ff;"><em><span style="font-size: 14pt;"><strong>Ống nhựa Tiền Phong: chất lượng hàng đầu </strong></span></em></span></h2> Với hệ thống đội ngũ kỹ sư năng động, giàu sự sáng tạo kết hợp với kinh nghiệm nhiều năm trong lĩnh vực sản xuất các sản phẩm ống nhựa, ống nước cho ngành xây dựng. Bên cạnh đó ống nhựa Tiền Phong không ngừng nghiên cứu và đổi mới cải tiến để nâng cao chất lượng sản phẩm cũng như tạo ra những sản phẩm mới tốt nhất cho người dùng. Mặt khác ống nước ống nhựa Tiền Phong luôn đặt chất lượng lên hàng đầu, bảo đảm quyền lợi của khách hàng khi sử dụng sản phẩm của chúng tôi. Để có được sản phẩm chất lượng chúng tôi đưa và sản xuất hệ thống máy móc hiện đại được nhập khẩu từ các nước châu Âu và Nhật Bản. Vì vậy tất cả các sản phẩm ống nước, ống nhựa Tiền Phong đều đảm bảo độ chính xác cao và đồng nhất về vật liệu nên có độ bền cao. Ngày nay nhu cầu sử dụng ống nước, ống nhựa rất rộng rãi trong các lĩnh vực cấp thoát nước, công nghiệp xây dựng, giếng nước ngầm cho dân dụng và công nghiệp, cầu đường, hoá chất, địa chất, dầu khí, hệ thống nước thoát thải các đô thị, khu công nghiệp, nước tưới tiêu trong nông, lâm nghiệp...'
            };

            return company;
        }

    this.getMenus = function(){
        var menus = [
            {menu: "homepage",label: "TRANG CHỦ"},
            {menu: "intro",label: "GIỚI THIỆU"},
            {menu: "products({cid: 'init'})",label: "SẢN PHẨM"},
            {menu: "catalogue",label: "BẢNG GIÁ & CATALOGUES"},
            {menu: "project",label: "DỰ ÁN"},
            {menu: "recruitment",label: "TUYỂN DỤNG"},
            {menu: "news",label: "TIN TỨC"},
            {menu: "contact",label: "LIÊN HỆ"}
        ];
        return menus;
    }

    this.getFooterInfo = function(){
        return '<h4><b>CÔNG TY TNHH MTV SX - TM & XD Hoàn Tuấn Thành</b></h4><div style="font-size: 13px;"><div><b>Địa chỉ:</b> Số 155, Tổ 6, ấp Kiến An, Xã An Điền, Thị xã Bến Cát, Tỉnh Bình Dương</div><div><b>Điện thoại:</b> 065 0357 578</div><div><b>Hotline:</b> (090) 8155 838 - Fax: 065 0357 9879</div> <div><b>Email:</b> ngoctuan10@gmail.com</div></div>';
    }

    this.getNews
});