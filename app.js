import express from "express";
import bodyparser from "body-parser";
import cors from "cors";

import user from "./controller/user";

const app = express();
const extension = '/api/v1';

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(extension + "/user", user);


app.use((req,res,next)=> {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//all other requests are not implemented.
app.use((err,req, res, next) => {
    res.status(err.status || 501);
    res.json({
        error: {
            code: err.status || 501,
            message: err.message
        }
    });
});
module.exports = app;
