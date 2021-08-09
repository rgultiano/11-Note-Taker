const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const DB_FILE = '/db/db.json'

function appendNote(note){
    fs.readFile('.'+DB_FILE, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedData = JSON.parse(data);
          parsedData.push(note);
          fs.writeFile('.'+DB_FILE, JSON.stringify(parsedData), ()=> console.log('File Updated.'));
        }
      });
}

// serve up the public folder for access
app.use(express.static('public'));

app.get('/',(req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes',(req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes',(req, res) =>
    res.sendFile(path.join(__dirname, DB_FILE))
);

app.post('/api/notes',(req, res) =>{
    // update notes file
    const note = req.body;
    note["id"] = uuidv4();

    appendNote(note);
    // add note to file
    res.send(JSON.stringify(note));
});

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
