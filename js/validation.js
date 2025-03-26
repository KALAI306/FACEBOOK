$(document).ready(function () {
    $('#signup').validate({
        rules: {
            fname: {
                required: true,
                minlength: 5,
            },
            sname: {
                required: true,
                minlength: 5,
            },
            mobilenumber: {
                required: true,
                minlength: 10,
            },
            password: {
                required: true,
                minlength: 8,
            },
            day: {
                required: true,
            },
            month: {
                required: true,
            },
            year: {
                required: true,
            },
            gen: {
                required: true,
            },
        },
        messages: {
            fname: {
                required: "First name is required.",
                minlength: "First name must be at least 5 characters long.",
            },
            sname: {
                required: "Surname is required.",
                minlength: "Surname must be at least 5 characters long.",
            },
            mobilenumber: {
                required: "Mobile number or email is required.",
                minlength: "Mobile number must be at least 10 characters long.",
            },
            password: {
                required: "Password is required.",
                minlength: "Password must be at least 8 characters long.",
            },
            day: {
                required: "Please select a day.",
            },
            month: {
                required: "Please select a month.",
            },
            year: {
                required: "Please select a year.",
            },
            gen: {
                required: "Please select your gender.",
            },
        },
    });
});