const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware for enabling CORS and parsing JSON request bodies
app.use(cors());
app.use(express.json());

// Defining the schema for a student document in the 'data' collection
const studentSchema = new mongoose.Schema({
    
     a: String,
     b: String,
     d: String,
     g: String,
     h: String,
     i: String,
     n: String,
     p: String,
     r: String,
     u: String,
     s: String,
     c: String,
    
  }, { collection: 'data' });

  // Creating a Mongoose model for the 'student' collection
const Student = mongoose.model('student', studentSchema);

// Connecting to the MongoDB database
mongoose.connect('mongodb+srv://webdevtask:1i7MLHW1XsHF7QKj@students.uthxf5a.mongodb.net/studentdata_all', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Home route
  app.get('/', (req, res) => {
    res.send('Student Search API is running');
  });
  
// Search route
app.post('/search', async (req, res) => {
  try {
    const { batch, department, hall, programme, bloodGroup, hometown, search, gender } = req.body; // Destructuring request body
    
    let query = {}; // Initializing an empty query object
    
    if (batch && batch.length) {
  // Transform each batch value for the query
  query['i'] = {
    $in: batch.map(b => {
      // Check if batch is Y8 or Y9, keep the 'Y'
      if (['Y8', 'Y9'].includes(b)) {
        return new RegExp('^' + b);
      }
      // Otherwise, strip the 'Y' and use the rest
      return new RegExp('^' + b.substring(1));
    })
  };
}
    if (department && department.length) query['d'] = { $in: department }; // Adding department filter to the query
    if (hall && hall.length) query['h'] = { $in: hall }; // Adding hall filter to the query
    if (programme && programme.length) query['p'] = { $in: programme }; // Adding programme filter to the query
    if (bloodGroup && bloodGroup.length) query['b'] = { $in: bloodGroup }; // Adding bloodGroup filter to the query
    if (hometown) query['a'] = { $regex: hometown, $options: 'i' }; // Adding hometown filter to the query
    if (gender && gender !== 'Any') query['g'] = gender; // Adding gender filter to the query
    if (search){ // Adding search filter to the query
      query['$or'] = [
        { 'n': { $regex: search, $options: 'i' } },
        { 'u': { $regex: search, $options: 'i' } },
        { 'i': { $regex: search, $options: 'i' } }
      ];
    }
    
    // Fetching students based on the query
    const students = await Student.find(query);
    res.json(students);
  } catch (error) {
    console.error('Search API error:', error);
    res.status(500).send(error.message);
  }
});

const PORT = 5000; // Use your preferred port for backend
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



