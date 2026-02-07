import e from "express";

const app = e();

const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  return res.json({
    msg: 'Hello from the server'
  })
})

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`)
})
