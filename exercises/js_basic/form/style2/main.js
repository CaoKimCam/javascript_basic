function Validator(formSelector, options){

    // Gán giá trị mặc định cho tham số khi định nghĩa (ES5)
    if (!options){
        options={}
    }

    function getParent(element, selector){
        while (element.parentElement){
            if (element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var formRules={};

    /**
     * Quy ước tạo rule:
     * - Nếu có lỗi thì return 'error message'
     * - Nếu không có lỗi thì return 'undefined'
     */
    var validatorRules ={
        required: function(value){
            return value? undefined : 'Vui lòng nhập trường này';
        },
        email: function(value){
            var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            return emailRegex.test(value)?undefined : 'Trường này phải là email'
        },
        min: function(min){
            return function(value){
                return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} kí tự`
            }
        },
        max: function(max){
            return function(value){
                return value.length <= max ? undefined : `Vui lòng chỉ nhập tối đa ${min} kí tự`
            }
        }
    };

    // Lấy ra form elemnt trong DOM theo 'formSelector
    var formElement= document.querySelector(formSelector);

    // Chỉ xử lý khi có element trong DOM
    if (formElement){

        // Lấy ra tất cả các input có thuộc tính 'name' và 'rules'
        var inputs= formElement.querySelectorAll('[name][rules]')

        for (var input of inputs){

            var rules = input.getAttribute('rules').split('|')

            for (var rule of rules){

                var isRuleHasValue = rule.includes(':');

                var ruleInfo
                if (isRuleHasValue){
                    ruleInfo = rule.split(':');
                    rule=ruleInfo[0];
                }

                var ruleFunc = validatorRules[rule];

                if (isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }


                if (Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name]= [ruleFunc]
                }
                
            }

            // Lắng nghe sự kiển để validate (blur, change,...)
            input.onblur = handleValidate;

            input.oninput = handleClearError;
        }

        // Hàm thực hiện validate
        function handleValidate(event){
            var rules = formRules[event.target.name];
            var errorMessage
            rules.find(function(rule){
                errorMessage = rule(event.target.value);
                return errorMessage;
            });

            if (errorMessage){
                var formGroup = getParent(event.target, '.form-group')
                if (formGroup){
                    var formMessage =formGroup.querySelector('.form-message');
                    if(formMessage){
                        formMessage.innerText = errorMessage;
                        formGroup.classList.add('invalid')
                    }
                }
            }

            return !!errorMessage;
        }

        // Hàm clear message lỗi
        function handleClearError(event){
            var formGroup = getParent(event.target, '.form-group')
            if (formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid')
                var errorElement = formGroup.querySelector('.form-message');
                if(errorElement){
                    errorElement.innerText = '';
                }
            }
        }
    }

    // Xử lý hành vi submit form
    formElement.onsubmit = function(event){
        event.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]')
        var isValid = true;
        for (var input of inputs){
            if (handleValidate({target:input})){
                isValid = false;
            }
        }
        
        // Khi không có lỗi thì submit form
        if(isValid){
            if (typeof options.onSubmit === 'function'){
                var enableInputs = formElement.querySelectorAll('[name]')
                var formValues = Array.from(enableInputs).reduce(function(values, input){
                    switch (input.type){
                        case 'radio':
                            values[input.value]=formElement.querySelector('input[name="'+input.name+'"]:checked')
                            break;
                        case 'checkbox':
                            if (!input.matches(':checked')){
                                values[input.name]= '';
                                return values
                            }
                            if (!Array.isArray(values[input.name])){
                                values[input.name]= [];
                            }
                            values[input.name].push(input.value);
                            break;
                        default:
                            values[input.name]= input.value;
                    }
                    return values;
                },{}) 

                // Gọi lại hàm onSubmit và trả về kèm giá trị của form
                options.onSubmit(JSON.stringify(formValues));
            } 
        }
        else{
            formElement.submit();
        }
    }
}