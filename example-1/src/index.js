const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

if (!process.env.VIDEOS_PATH) {
    throw new Error("Please specify the path to videos using the environment variable VIDEOS_PATH.");
}

const VIDEOS_PATH = process.env.VIDEOS_PATH;
console.log(`Serving videos from path ${VIDEOS_PATH}.`);

app.get("/video", (req, res) => {

    const videoPath = path.join(VIDEOS_PATH, "SampleVideo_1280x720_1mb.mp4");
    fs.stat(videoPath, (err, stats) => {
        if (err) {
            console.error("An error occurred ");
            res.sendStatus(500);
            return;
        }

        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });
        fs.createReadStream(videoPath).pipe(res);
    });
});

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}, point your browser at http://localhost:3000/video`);
});
