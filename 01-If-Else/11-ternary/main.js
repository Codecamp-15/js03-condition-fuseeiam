let login = prompt("Enter username");
message =
    login == "Employee"
        ? "Hello"
        : login == "Director"
            ? "Greetings"
            : login == ""
                ? "No login"
                : "";
alert(message)