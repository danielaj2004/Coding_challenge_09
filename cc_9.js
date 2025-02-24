// Task 1
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; // name of employee
        this.id = id; // employee id
        this.department = department; // employee department
        this.salary = salary; // employee salary
    }; // employee constructor
    getDetails() {
            return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    }; // Receiving employee details
    calculateAnnualSalary() {
        return this.salary * 12; // annual salary
    }
}; // employee class

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // new employee
console.log(emp1.getDetails()); // print employee details

// Task 2
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // print employee constructor
        this.teamSize = teamSize; // Manager's team size
    }; // manager constructor
    getDetails() {
        return `Manager: ${this.name}, Id: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
    } // manager details
    calculateBonus() {
        return this.salary * 12 * 0.10; // calculate bonus
    }
    // Task 4 modification
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus();
    }
}; // manager class
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // new manager
console.log(mgr1.getDetails()); // print manager details
console.log(mgr1.calculateBonus()); // print manager bonus

// Task 3
class Company {
    constructor(name) {
        this.name = name; // company name
        this.employees = []; // company employees
    }; // company constructor
    addEmployee(employee) {
        this.employees.push(employee); // add employees to company
    }
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails())); // list of employees
    }

    // Task 4
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => {
             return total + employee.calculateAnnualSalary(); // total payroll
         }, 0); // calculating total payroll
     }; // payroll system

     // Task 5
     promoteToManager (employee, teamSize) {
        const index = this.employees.indexOf(employee);
        if (index !== -1)
         this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); // promotion to manager
     }
 }; // company class
 
 const company = new Company("TechCorp"); // new company
 company.addEmployee(emp1); // add employee
 company.addEmployee(mgr1); // add manager
 company.listEmployees(); // list of employees
 
 console.log(company.calculateTotalPayroll()); // print total payroll
 
 company.promoteToManager(emp1, 3); // promote employee
 company.listEmployees(); // new employee list