import express from 'express';
import path from 'path';
import router from './api/router';
import config from './config';


const app = express();
const port = 3000;
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, '../client/build')));

console.log(config.DATABASE_URL);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.get("/api", (req, res) => {
  res.send("Welcome to Appointo Backend");
})

app.use("/api", router);

app.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html")
  );
});

