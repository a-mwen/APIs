const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
    //pool.query("SELECT * FROM students", (error, results) => {
    pool.query(queries.getStudents,(error, results) => { 
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const  getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    } );
};


const addStudent = (req, res) => {
    const { name, email, age} = req.body;
   // const id = parseInt(req.params.id);
    pool.query(queries.checkEmailExists, [email], (error, results) => {
    if(results.rows.length) {
    res.send("Email already exists in the system");
    }
    
        //Add new Student
        pool.query(queries.addStudent, [name, email, age], (error, results) => {
            if(error) throw error; 
            res.status(201).send("Student Created Successfully");
        }); 
    });
    };

const updateStudent = (req, res) => {
//get the student data 
    const {name, email, age, id} = req.body;
    pool.query(queries.updateStudent, [name,email, age, id], (error, results) => {
        if(error) throw error;
        res.status(200).send("Student with ID: ${id} was updated successfully");
    });
};

const deleteStudent = (req, res) => {
    if (isNaN(req.params.id)) {
      return res.status(400).send({ error: 'Invalid student ID' }); 
    }
  
    const id = parseInt(req.params.id);
    pool.query(queries.deleteStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send(`Student with ID: ${id} was deleted successfully`);
    });
  };

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
};
