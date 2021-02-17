class engineer {
    constructor (name, role, id, email){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
}
employee.prototype.getName = function(){
    return this.name;
}
employee.prototype.getRole = function(){
    return this.role;
}
employee.prototype.getId = function(){
    return this.id;
}
employee.prototype.getEmail = function(){
    return this.email;
}

module.exports = engineer;