document.getElementById('next').onclick = function(){ // khi người dùng click vào nut next
    const widthItem=document.querySelector('.container__product-1').offsetWidth
    document.getElementById('listall').scrollLeft +=widthItem;

}
document.getElementById('prev').onclick = function(){ // khi người dùng click vào nut next
    const widthItem=document.querySelector('.container__product-1').offsetWidth
    document.getElementById('listall').scrollLeft -=widthItem;

}
const widthItem=document.querySelector('.container__product-1').offsetWidth
console.log(widthItem);

let suggetions =[
    "Bỗng Dưng Trúng Số",
    "Sư Phụ Của Tôi Không Có Đuôi",
    "Tôi Trở Nên Mạnh Hơn Nhờ Nâng Cấp Các Kỹ Năng Của Nông Dân",
    "Berserk: Thời Kỳ Hoàng Kim",
    "Luyện Thú Sư Sau Khi Bị đuổi Khỏi Tổ đội Của Dũng Sĩ, Gặp được Thiếu Nữ Tai Mèo Của Chủng Tộc Mạnh Nhất",
    "BOCCHI THE ROCK",
    "Hẹn Hò Chốn Công Sở 2022",
    "Yama No Susume Next Summit",
    "Cảm Ơn Bác Sĩ 2022",
    "Người Theo Đuổi Ánh Sáng 2022",
    "Thời Gian Ấm Áp Bên Em 2022",
    "Bậc Thầy Làm Vườn 2022",
    "Thìa Vàng 2022",
    "Chiếc Bật Lửa Và Váy Công Chúa 2022",
    "Băng Hỏa Ma Trù 2021",
    "Lưỡng Bất Nghi 2022",
    "Tinh Hán Xán Lạn 2022",
    "Nữ Luật Sư Kỳ Lạ Woo Young Woo 2022",
    "Big Mouth 2022",
]

const searchWrapper= document.querySelector(".header__search");
const inputBox= searchWrapper.querySelector("input");
const suggBox= searchWrapper.querySelector(".autocom-box");

// xuất những dữ liệu mà người dùng nhập vào ô input
inputBox.onkeyup=(function(e)
{
    let userData=e.target.value; // dữ liệu mà người dùng nhập vào 
    let emptyArray=[]; // khởi tao một cái mảng rổng
    if(userData)// nếu không rỗng thì chạy
    {
        emptyArray = suggetions.filter(function(data){
            return data.toLocaleLowerCase();
           
        });
        console.log(emptyArray);
    }
})

