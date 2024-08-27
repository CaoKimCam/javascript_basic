// Đối tượng `Validator`
function Validator(options){

    var selectorRules={};

    function validate(inputElement, rule){
        var errorMessage
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rules và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; i++){
            errorMessage=rules[i](inputElement.value)
            if(errorMessage) break;
        }
        if (errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        } else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }

        return !!errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);

    if (formElement){

        // Khi submit form
        formElement.onsubmit = function (e){
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function (rule){
                var inputElement = document.querySelector(rule.selector)
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });

            if (isFormValid){

                // var enableInputs = formElement.querySelectorAll('[name]:not[disabled]');
                var enableInputs = formElement.querySelectorAll('[name]');

                var formValues = Array.from(enableInputs).reduce(function(values, input){
                    return (values[input.name]= input.value) && values;
                },{})

                // Trường hợp submit với hành vi mặc định
                if (typeof options.onSubmit === 'function'){
                    options.onSubmit(formValues)
                }
            }
        }

        // Lặp qua mỗi rule và xử lý sự kiện (blur, input)
        options.rules.forEach(function(rule){

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            } else{
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement){
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                    validate(inputElement, rule)
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function(){
                    options.errorSelector.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra messae lỗi
// 2. Khi hợp lệ => Không trả ra gì cả (undefined)

Validator.isRequired = function(selector){
    return {
        // value: inputElement.value
        // test func: rule.test
        selector:selector,
        test: function(value){
            return value? undefined : ' Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message){
    return {
        selector:selector,
        test(value){
            var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            return emailRegex.test(value) ? undefined : message || ' Trường này phải là email';
        }
    };
}
Validator.minLength = function(selector, min, message){
    return {
        selector,
        test(value){
            return value.length >= min? undefined : message|| ` Trường này phải có ít nhất ${min} kí tự`;
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector:selector,
        test: function (value){
            return value === getConfirmValue() ? undefined : message|| 'Giá trị nhập vào không chính xác'
        }
    }
}