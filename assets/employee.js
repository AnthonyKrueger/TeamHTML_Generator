// Employees are instantiated with only a role property

function Employee(role) {
     this.role = role;
 }

// Function to add necessary properties to the instance

Employee.prototype.populateData = function (name, id, email, extra) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.extra = extra;
}

Employee.prototype.populateExtraHTMLData = function () {

    if(this.role === "Manager") {
        this.color = "red";
        this.icon = "business_center";
    }
    else if(this.role === "Engineer") {
        this.color = "deep-purple";
        this.icon = "computer";
        this.extra = `GitHub: <a href=https://github.com/${this.extra}>${this.extra}</a>`
    }
    else if(this.role === "Intern"){
        this.color = "green";
        this.icon = "face";
    }
    else {
        this.color = "indigo";
        this.icon = "create";
    }
}

module.exports = Employee;