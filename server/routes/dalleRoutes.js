import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios({
      method: 'post',
      url: 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0',
      headers: {
        Authorization: `Bearer ${process.env.STABILITY_AI_TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ inputs: prompt }),
    });

    const buffer = response.data;

    res.status(200).json({ photo: buffer });
  } catch (error) {
    console.error("Image generation error: ", error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to generate image' });
  }
});

export default router;
