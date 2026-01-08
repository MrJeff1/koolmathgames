const express = require("express");
const path = require("path");
//const fs = require("fs");

const app = express();
const PORT = 3000;

const publicDir = path.join(__dirname, "public");
const staticDir = path.join(__dirname, "static");

// Serve assets first
app.use(express.static(publicDir));
app.use(express.static(staticDir));
/*
function sendIfExists(res, file) {
    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        res.sendFile(file);
        return true;
    }
    return false;
}

app.use((req, res) => {
    if (req.method !== "GET") {
        return res.status(405).end();
    }

    // Normalize + strip trailing slash
    let urlPath = decodeURIComponent(req.path);
    urlPath = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");

    // Root
    if (urlPath === "/") {
        if (
            sendIfExists(res, path.join(publicDir, "index.html")) ||
            sendIfExists(res, path.join(staticDir, "index.html"))
        ) return;
    }

    const attempts = [
        path.join(publicDir, urlPath + ".html"),
        path.join(staticDir, urlPath + ".html"),
        path.join(publicDir, urlPath, "index.html"),
        path.join(staticDir, urlPath, "index.html"),
    ];

    for (const file of attempts) {
        if (sendIfExists(res, file)) return;
    }

    // Final 404
    const notFound = path.join(staticDir, "404.html");
    if (sendIfExists(res, notFound)) {
        res.status(404);
        return;
    }

    res.status(404).send("404 – Page not found");
});*/

app.listen(PORT, "0.0.0.0", () => {
    console.log(`✔ Server listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
