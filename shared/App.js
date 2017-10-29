import React from 'react'

let App = ({users}) =>
<div>
	<div>hello from server</div>
	{users.map(user => {
		return <li key={user.id}>{user.name}</li>
	})}
</div>

export default App
