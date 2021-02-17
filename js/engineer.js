class employee {
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