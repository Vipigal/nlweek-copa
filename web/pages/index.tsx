export default function Home() {
	fetch('http://localhost:3030/pools/count')
		.then(response => response.json())
		.then(data=>{
			console.log(data);
		})
  return (
		<h1>Hello NKLW</h1>
	)
}
