const express = require("express");
const axios = require("axios");
const fs = require("fs").promises;
const cheerio = require("cheerio");

const port = 8090;
const app = express();

app.get("/", async (req, res) => {
  try {
    const instagramUrl = "https://www.instagram.com/p/CtBG7E9yH9H";

    if (!instagramUrl) {
      return res.status(400).send("URL parameter is missing.");
    }

    const response = await axios.get(instagramUrl);

    const htmlContent = response.data;

    await fs.writeFile("instagram_page.html", htmlContent);

    const $ = cheerio.load(htmlContent);

    const ogImageUrl = $("meta[property='og:image']").attr("content");

    const ogImageVariable = ogImageUrl || "No og:image found";

    console.log("og:image URL:", ogImageVariable);

    res.send("HTML content saved to 'instagram_page.html'");
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
