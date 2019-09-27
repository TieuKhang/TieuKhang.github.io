function check(but, que, ans) {
    document.getElementById(but).onclick = function() {
        if (document.getElementById(que).value == ans) {
            alert("Đúng! :D");
        } else {
            alert("Sai. :'(");
        }
    }
}

check("bgt1", "gt1", "My name is Nam.");
check("bgt2", "gt2", "I am 10 years old.");
check("bgt3", "gt3", "I am from Viet Nam.");
check("bgt4", "gt4", "How are you?");
check("bgt5", "gt5", "What is your name?");
check("bgt6", "gt6", "Where are you from?");
check("bgt7", "gt7", "How old are you?");
