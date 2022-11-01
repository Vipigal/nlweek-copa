import app from "./config/expressConfig";


const port = process.env.PORT;

app.listen(port,()=>{
	console.log(`Server is running on port ${port}`);
});
