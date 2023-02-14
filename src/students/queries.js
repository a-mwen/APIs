const getStudents = "SELECT * FROM  students";
const getStudentById = "SELECT * from students WHERE id = $1";
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";
const addStudent = 
    "INSERT INTO students (name,email,age) VALUES($1,$2,$3)";
const updateStudent = "UPDATE students SET name = $1, email = $2, age = $3 WHERE id = $4";
const deleteStudent = "DELETE FROM students WHERE id = $1";


module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    updateStudent,
    deleteStudent,
};