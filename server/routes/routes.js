const mysql = require('../config/mysql');

module.exports = (app) => {


   app.get('/', async(req, res, next) => {
      let db = await mysql.connect();
      // let [breakingnewsdk] = await db.execute("SELECT * FROM breakingnewsdk")
      // let [breakingnewsen] = await db.execute("SELECT * FROM breakingnewsen")
      // let [topnews] = await db.execute("SELECT * FROM topnews")
      db.end();
      
      res.render('home', {
         // "topnews": topnews,
         // "breakingnewsdk": breakingnewsdk,
         // "breakingnewsen": breakingnewsen
      });
   });

   app.get('/category', async(req, res, next) => {
      let db = await mysql.connect();
      let [categories] = await db.execute("SELECT * FROM categories");
      console.log(categories);
      db.end();
      
      res.render('categories_post', {
      }); 
   });

   app.get('/database/:category_id', async (req, res, next) => {

		let db = await mysql.connect();

		let [articles] = await db.execute(`
			SELECT categories.category
			FROM articles
			LEFT OUTER JOIN categories ON FK_article_category = categories.category_id
			WHERE FK_article_category = ?
		`, [req.params.category_id]);

		res.render('database', {'articles': articles});

		db.end();

	});
};