const homePage = async (req, res) => {
    try {
      res.status(200).send(`
          <div style="padding:10px;"><h1 style = "text-align:center">Hall Booking API</h1>
          </div>
          `);
    } catch (error) {
      res.status(500).send({
        comment: "Internal Server Error",
      });
    }
  };
  
  export default {
    homePage,
  };