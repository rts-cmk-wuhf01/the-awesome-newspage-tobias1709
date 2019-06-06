module.exports = (app) => {

   app.get('/', (req, res, next) => {
      res.render('home');
   });

   app.get('/database', async (req, res, next) => {

      let db = await mysql.connect();
      let [product] = await db.execute('SELECT * FROM product');
      db.end();

      res.render('product'), {
         'product': product
      }
   });

};