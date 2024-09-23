// Create an Employees Array of Employee Objects

let employees = [
    { name: 'Bill', shifts: [{ day: 'Monday', hours: 8}, { day: 'Thursday', hours: 5}, { day: 'Friday', hours: 6}]},
    { name: 'Johnny', shifts: [{ day: 'Tuesday', hours: 7}, { day: 'Thursday', hours: 8}]},
    { name: 'Jill', shifts: [{ day: 'Wednesday', hours: 8}, { day: 'Friday', hours: 7}]},
    { name: 'Natalie', shifts: [{ day: 'Monday', hours: 5}, { day: 'Tuesday', hours: 6}, { day: 'Wednesday', hours: 5}]}
];

// Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Employee Name: ${employee.name}`);
    employee.shifts.forEach((test)=> {
        console.log(test);})
}

displayEmployeeShifts(employees[0]);

// Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    let employee = employees.find(emp => emp.name === employeeName);
    let existingShift = employee.shifts.find(shift => shift.day === day);
    if (!employee) {
        console.log(`Error: Employee ${employeeName} is not found.`);
    }
    if (existingShift) {
        console.log(`Error: ${employeeName} already has a shift on ${day}.`);
    }
    employee.shifts.push({ day, hours });
    console.log(`${employeeName} was assigned a ${hours} hour long shift on ${day}.`);
}

assignShift('Bill', 'Wednesday', 6);

// Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    let employee = employees.find(emp => emp.name === employeeName);
    let employeeTotalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
    return employeeTotalHours;
}

console.log(`Bill's total for the week: ${calculateTotalHours('Bill')} hours`);

// Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    
    employees.forEach(employee => {
        let isAvailable = true;
        employee.shifts.forEach(shift => {
        if (shift.day === day) {
            isAvailable = false;}});
        if (isAvailable) {
    console.log(`Employees available on ${day}:`);
    console.log(employee.name);}});
}

listAvailableEmployees('Monday');
