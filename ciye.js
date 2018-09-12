const express=require('express')
const path=require('path')
const PORT=process.env.PORT||4212

express()
  .use(express.static(path.join(__dirname, 'publik')))
  .set('views', path.join(__dirname, 'templet'))
  .set('view engine', 'ejs')
  .get('/', (req, res)=>res.render('laman/index'))
  .listen(PORT, ()=> console.log(`Wicis pada port ${PORT}`))
