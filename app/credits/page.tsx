'use client'
import { subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function Credits() {
	const [isSelected, setIsSelected] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<div>
			<div className="flex flex-col gap-2">
				<p className="text-small text-default-500">
					{isSelected ? (
						<div>
							<h1 className="text-3xl">Credit</h1>
							<h1 className="text-3xl">0.000</h1>
							<div className="flex w-full flex-wrap md:flex-nowrap">
								<span className="mt-1 border border-solid border-gray-300 p-2">Amount</span>
								<Input type="number" />
							</div>
							<Button className="w-full bg-blue-500 my-4">Purchase</Button>
							<p className="text-xs">Transactions may take many minutes to confirm.</p>
						</div>
					) : (
						<div>
							<h1 className="text-3xl">Credit</h1>
							<h1 className="text-3xl my-3">0.000</h1>
							<a href="#">View usage</a>
							<br />
							<Button className="bg-blue-500 my-3">Manage Credits</Button>
							<br />
						</div>
					)}
				</p>
			</div>
			<div className="flex gap-10 mt-10 justify-center">
				<p>Use crypto</p>
				<Switch isSelected={isSelected} onValueChange={setIsSelected} defaultSelected size="sm" aria-label="Automatic updates" />
			</div>
		</div>
	);
}
