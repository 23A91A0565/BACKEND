import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017/testdb")
    .then(() => console.log("MongoDB working"))
    .catch((error) => console.log(error));

// schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// export default instead of module.exports
const User = mongoose.model("User", userSchema);
export default User;

// IMPORTANT for HTML form data
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Hai this is from backend");
});

app.get("/get-user", (req, res) => {
    res.send("User details accessed");
});

app.post("/add-user", async (req, res) => {
    try {
        const data = new User(req.body);
        const result = await data.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put("/update-user/:id", (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    console.log(`Updating user ${userId}:, updatedData`);
    res.send(`User ${userId} updated successfully`);
});

app.delete("/delete-user/:id", (req, res) => {
    const userId = req.params.id;
    console.log(`Deleting user ${userId}`);
    res.send(`User ${userId} deleted successfully`);
});

app.listen(999, () => {
    console.log("server running at port 999");
});