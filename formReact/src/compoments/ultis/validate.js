/**
 * @param {string} value giá trị ng dùng nhập vào 
 * */  
// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     static init=(name)=>{
//         return new Animal(name);
//     }
// }
// // khong6 can phai viet new
// const obj1=Animal.init("SAD");
export function KiemTraLoi(value){
    this.value=value;
    this.message="";
   
    this.boTrong=function (message){
        if(this.value.trim().length===0){
            if(this.message) return this;
            this.message=message || "không dc bỏ trống"
        }
        return this
    }
    this.number=function(message){
        if(this.message) return this;
           var pattern= /^-?\d*\.?\d+$/;
           if(!pattern.test(this.value.trim())){
           
                  this.message=message || "Giá trị nhập vào sai định dạng số tự nhiên";
           }
           return this; 
           // method:getter
          
        }
    this.string=function(message){
        if(this.message) return this;
        var kiemTraString=/^[a-zA-Z]/
        if(!kiemTraString.test(this.value)){
            this.message=message || "Không phải là kí tự"
        }
        return this;
    }
    this.min=function(valueMin,message){
        if(this.message) return this;
        var regexNumber = /^-?\d*\.?\d+$/;
        if(regexNumber.test(this.value.trim())){
            if(Number(this.value) < valueMin ){
                this.message=message|| "Không được nhỏ hơn số "+valueMin
        }  
        }else{
            if(this.value.trim().length < valueMin){
                this.message=message|| `Không dc ít hơn ${valueMin} kí tự`
            }
        }
        return this
      
    }
    this.max=function(valueMax,message){
        if(this.message) return this;
        var regexNumber = /^-?\d*\.?\d+$/;

        if(regexNumber.test(this.value.trim())){
            if(Number(this.value) >=valueMax){
                this.message=message || "Không được lớn hơn số "+valueMax;
            }
        }else{
            if(this.value.trim().length>=valueMax){
                this.message=message || `Không dc lớn hơn ${valueMax} kí tự`
            }
        }
        return this;
    }
    //
    this.passWord = function (message) {
        if (this.message) return this;
        var regexPw = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-]).{6,10}$/;
    
        if (!regexPw.test(this.value)) {
          this.message = message || "Ít nhất là 1 ký tự chữ, có 1 ký tự số , 1 ký tự đặc biệt và có độ dài 6 đến 10 kí tự";
        }
        return this;
      };
      this.email=function(message){
        if (this.message) return this;
    
        var regexEmail =
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
        if (!regexEmail.test(this.value)) {
          this.message = message || "Sai định dạng email.";
        }
    
        return this;
    }
    this.layLoiRa= function(){
        return this.message;
    }
}