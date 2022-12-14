function Validator(options) {
    var selectorRules = {};

    function show_error(inputElement, errorMessage) {
        var errorElement = inputElement.parent().children(options.errorSelector);
        inputElement.addClass("is-invalid");
        errorElement.html(errorMessage).css("color", "red");
    }

    function hide_error(inputElement) {
        var errorElement = inputElement.parent().children(".form-message")
        errorElement.html('');
        inputElement.removeClass("is-invalid");
    }

    function validate(inputElement, rule) {
        //value: inputElement.value
        //test func: rule.test
        var errorMessage;
        var rules = selectorRules[rule.selector];

        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.val());
            if (errorMessage) break;

        }
        if (errorMessage) {
            show_error(inputElement, errorMessage);
        }
        else {
            hide_error(inputElement);
        }

        return !errorMessage;
    }

    var formElement = $(options.form);
    if (formElement) {
        formElement.on("submit", (e) => {
            e.preventDefault();
            var isFormValid = true;
            options.rules.forEach((rule) => {
                var inputElement = $(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) isFormValid = false;
            })

            if (isFormValid) {
                if (typeof options.onSubmit === "function") {
                    var condition_element = $("[name]:not(:disabled)");
                    var enableInputs = formElement.find(condition_element);
                    var formValues = Array.from(enableInputs).reduce((values, input) => {
                        values[input.name] = input.value;
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
                else{
                    formElement.submit();
                }
            }
        });
        //listen rule event and solve
        options.rules.forEach((rule) => {
            //Store rules for each input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }

            // var inputElement = $(rule.selector);
            // if (inputElement) {
            //     // solving blur event
            //     inputElement.on("blur", () => {
            //         validate(inputElement, rule);
            //     })
            //     //solving when inputing
            //     inputElement.on("keydown", () => {
            //         hide_error(inputElement);
            //     })
            // }
        })
    }
}

//Define rules
// Priciple
// 1. Have Error => return Error
// 2. Valid => Nothing
Validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : 'Please input here is required!';
        }
    };
};

Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            var regex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
            return regex.test(value) ? undefined : 'Please input email correctly!';
        }
    }
};

Validator.minLength = (selector, min_length = 6) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min_length ? undefined : `Please input least ${min_length} characters!`;
        }
    }
};

Validator.isConfirmed = (selector, confirmSelector, message) => {
    function getConfirmValue(selector) {
        return $(selector).val();
    };
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue(confirmSelector) ? undefined : message || "Confirm Password is not match!";
        }
    }
};

Validator.isRequiredSelector = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value!=null ? undefined : 'Please choose your selections!';
        }
    };
};



