class employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}
employee.prototype.getName = function(){
    return this.name;
}
employee.prototype.getId = function(){
    return this.id;
}
employee.prototype.getEmail = function(){
    return this.email;
}
employee.prototype.getRole = function(){
    return this.role;
}
module.exports = employee;