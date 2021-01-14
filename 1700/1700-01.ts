function countStudents(students: number[], sandwiches: number[]): number {
    if (students.filter(s => s === 1).length === sandwiches.filter(s => s === 1).length) return 0;
    
    while (sandwiches.length > 0) {
        if (students.filter(s => s === sandwiches[0]).length === 0) break;
        
        let student = students.shift();
        if (sandwiches[0] === student) {
            sandwiches.shift();
        } else {
            students.push(student);
        }
    }
    return students.length;
};