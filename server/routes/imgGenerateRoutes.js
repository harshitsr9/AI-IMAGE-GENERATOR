import express from "express";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
    res.send("Hello from Hugging Face");
});

router.route("/").post(async (req, res) => {
    try {
        const { prompt } = req.body;
        const stabilityaiApiKey = process.env.STABILITY_AI_TOKEN;

        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                headers: { 
                    Authorization: `Bearer ${stabilityaiApiKey}`,
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        console.log(`Hugging Face API response status: ${response.status}`);

        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            console.error("Hugging Face API error response:", errorData);
            return res.status(response.status).json({ error: errorData.error || "Error from Hugging Face API" });
        }

        const result = await response.blob();
        const image = Buffer.from(await result.arrayBuffer()).toString("base64");

        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send(error?.response?.data?.error?.message || "Something went wrong");
    }
});

export default router;
