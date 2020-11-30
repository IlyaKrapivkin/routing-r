require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const DB = {
  users: [
    { name: 'Tapac', id: 'qwert', phone: '+7 999 888 77 66' },
    { name: 'Sem', id: 'asdf', phone: '+7 111 222 33 44' },
    { name: 'Igor', id: 'zxcv', phone: '+7 444 333 22 11' },
  ],
};

const db3 = {
  users: [
    {
      id: '1',
      name: 'Tapacc',
    },
  ],
};
// MIDDLE:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/server2', (req, res) => {
  // for (let i = 0; i < 2e9; i += 1) {}
  res.json(DB.users);
});

app.get('/server2/:id', (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = DB.users.find((item) => item.id === id);
    if (user) {
      for (let i = 0; i < 4e9; i += 1) {}
      return res.json(user);
    }
    return res.sendStatus(404);
  }
  return res.sendStatus(418);
});
// SERVER3:
app.get('/server3', (req, res) => {
  setTimeout(() => {
    res.json(db3.users);
  }, 1000);
});
// AFTERCODE:
app.listen(process.env.PORT, () => console.log('server was started!'));
