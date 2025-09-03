import { useState } from "react";
import "./styles/App.css";
import Navbar from "./composants/Navbar";
import { InventoryProvider } from "./InventoryManagementContext";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div className="flex flex-row align-stretch">
				<aside className="bg-gray-800 text-white md:w-1/5 xl:w-1/6 h-screen fixed">
					<Navbar />
				</aside>
				<div className="flex-1 bg-blue-200 p-8 md:ml-[20%] xl:ml-[16.66666667%]">
					<InventoryProvider>
						<Outlet />
					</InventoryProvider>
				</div>
			</div>
		</>
	);
}

export default App;
