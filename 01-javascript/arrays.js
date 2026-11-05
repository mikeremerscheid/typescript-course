const employees = [
  { name: "Alice", salary: 95000, active: true },
  { name: "Bob", salary: 65000, active: false },
  { name: "Carol", salary: 110000, active: true },
];

// Filter employees
const activeEmployees = employees.filter((employee) => employee.active);

// Transform employees into names
const names = employees.map((employee) => employee.name);

// Find the first matching employee
const highEarner = employees.find((employee) => employee.salary > 100000);

// Calculate total salaries
const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);

console.log(activeEmployees);
console.log(names);
console.log(highEarner);
console.log(totalSalary);
