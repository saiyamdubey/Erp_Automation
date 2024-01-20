const axios = require('axios');
const fs = require('fs').promises;

const imageUrl = 'https://www.instagram.com/p/CtBG7E9yH9H';

async function downloadImage() {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Extract file extension from the URL
    const fileExtension = Date.now();

    // Save the image to a file
    await fs.writeFile(`downloaded_image.${fileExtension}`, response.data);

    console.log('Image downloaded successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

downloadImage();
