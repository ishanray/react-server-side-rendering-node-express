import express from "express"
import React from "react"
import { renderToString } from "react-dom/server"
import App from "../shared/App"
import fetch from 'isomorphic-unfetch'

let app = express()

app.use(express.static("public"))

app.get('*', async (req, res) => {
	let result = await fetch('https://jsonplaceholder.typicode.com/users')
	let users = await result.json()

	res.send(`
      <!DOCTYPE html>
	      <head>
	        <title>App</title>
	      </head>
	      <body>
	        <div id="root">${renderToString(<App users={users} />)}</div>

			<script>window.__PRELOADED_STATE__ = ${JSON.stringify(users).replace(/</g, '\\u003c')}</script>
	        <script src="/bundle.js"></script>
	      </body>
	    </html>
	  `)
})

app.listen(3000, () => {
	console.log(`listening on port 3000`)
})
