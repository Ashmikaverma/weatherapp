import express from "express";
//import bodyparser from "bodyparser";
import axios from "axios";
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", async (req, res) => {
    
      res.render("index.ejs"
      
    );
   
  });
 app.get("/weather/:city",async(req,res)=>{
    try {
      
       
          const cityName = req.params.city;
          const apiKey = '17a54cfccdccf4e4f0233d7798c829cb'; // Replace with your actual API key
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      
        
              const response=await axios.get(apiUrl)
              const data =  response.data;
              res.json(data);
          } catch (error) {
              console.error('Error fetching weather data:', error);
              res.status(500).json({ error: 'Error fetching weather data' });
          }
      
    
    }
 );
 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});