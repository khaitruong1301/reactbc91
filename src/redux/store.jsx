import { configureStore } from '@reduxjs/toolkit';
/*
    reducer: là hàm trả về state, khi state thay đổi thì component nào follow từ state sẽ tự động chạy lại (render lại). Hàm này sẽ được kích hoạt khi ứng dụng khởi tạo và mỗi lần gửi dữ liệu lên
*/


const phoneDetailDefault = { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }

export const store = configureStore({
    reducer: {
        //Nơi chứa toàn bộ state của ứng dụng
        numberReducer: (stateNumber = 10,action) => {
            console.log('numberReducer',action)

            if(action.type == 'CHANGE_NUMBER_ACTION'){
                stateNumber = stateNumber + action.payload;
            }

            return stateNumber; //imutable (tính bất biến của redux) shallow compare (so sánh địa chỉ ô nhớ .
        },
        abcReducer: (state='string',action) => {
            console.log('abcReducer',action)
            return state;
        },
        imgCarReducer: (state = '/img/products/black-car.jpg',action) => {
            switch(action.type){
                case 'CHANGE_CAR_COLOR': {
                    state = `/img/products/${action.payload}-car.jpg`;

                };break;
            }
            return state;
        },
        numPeopleReducer: (state =  Math.floor(Math.random() * 99) ,action) => {
            //Tạo số ngẫu nhiên
            switch(action.type){
                case 'RANDOM_PEOPLE_NUMBER': {
                    //Tạo số ngẫu nhiên 
                    let numRandom = Math.floor(Math.random() * 99) + 1;  //Trả từ 0 đến 98 => + 1
                    state = numRandom;
                };break;
            }
            return state;
        },
        phoneDetailReducer: (state= phoneDetailDefault,action) =>{

            switch(action.type){
                case 'CHANGE_PRODUCT_DETAIL_ACTION': {
                    state = action.payload;

                };break
            }

            return state;
        }



    }
})