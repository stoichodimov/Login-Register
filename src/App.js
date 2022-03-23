import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Register from './components/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
