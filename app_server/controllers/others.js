/* GET 'about' page */
const about = function(req, res) {
  res.render('generic-text', {
    title: 'About Hospital Management System',
  });
};


  module.exports = {
      about,
     
    };  