"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { assets } from "@/utils/asset-utils";
import { type Framework, frameworks } from "@/utils/framework-utils";
import { cn } from "@/utils/tailwind-utils";
import { FrameworkRotation } from "@/components/framework-rotation";
import { Poppins } from "next/font/google";
import { CountdownTimer } from "@/components/countdown-timer";
import { Cursor } from "@/components/cursor";
import Link from "next/link";
import { Spand } from "@/components/span";
import { Spand2 } from "@/components/span2";

const poppins = Poppins({
	weight: "700",
	subsets: ["latin"],
});
export default function Home() {
	const [currentFramework, setCurrentFramework] = useState<Framework>(
		frameworks[0]
	);
	const [showBackground, setShowBackground] = useState(false);
	// ref for the button
	const buttonRef = useRef<HTMLButtonElement>(null);
	// ref for the span
	const spanRef = useRef<HTMLDivElement>(null);
	const spanRef2 = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let currentIndex = 0;
		const rotateFrameworks = () => {
			setCurrentFramework(frameworks[currentIndex]);
			currentIndex = (currentIndex + 1) % frameworks.length;
		};
		const intervalId = setInterval(rotateFrameworks, 2000);
		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		setShowBackground(true);
	}, []);

	return (
		<main>
			{/* Background color */}
			<div
				className={cn(
					"fixed inset-0 transition-color delay-100 duration-700 opacity-25",
					{
						"bg-purple-300": currentFramework === "qwik",
						"bg-sky-300": currentFramework === "safari",
						"bg-yellow-300": currentFramework === "chrome",
						"bg-teal-300": currentFramework === "tailwind",
						"bg-blue-300": currentFramework === "react",
						"bg-green-300": currentFramework === "vue",
						"bg-orange-400": currentFramework === "sevelte",
						"bg-red-300": currentFramework === "mobile",
						"bg-neutral-300": currentFramework === "desktop",
					}
				)}
			/>
			{/* Grid */}
			<div
				style={{
					backgroundSize: "30px",
					backgroundImage: `url(${assets.square})`,
				}}
				className="fixed inset-0 opacity-30"
			/>
			{/* Gradient */}
			<Image
				width={1200}
				height={1200}
				role="presentation"
				alt="gradient background"
				className="fixed inset-0 w-screen h-screen object-cover"
				src={assets.gradient}
			/>
			{/* Reveal */}
			<div
				className={cn(
					"bg-black fixed inset-0 transition-opacity duration-1000",
					!showBackground ? "opacity-100" : "opacity-0"
				)}
			/>
			{/* Content */}
			<div className="max-w-7xl mt-20 mx-auto">
				<div className="flex flex-col items-center relative z-10">
					{/* Heading */}

					<div>
						<h1
							className={`text-5xl max-w-3xl  text-center leading-snug mb-12 ${poppins.className}`}>
							<div className="mx-auto">
								<Image
									alt="Figma_logo"
									className="inline-block mr-6  -mt-2 "
									src="https://hacktoberfest.com/_next/static/media/logo-hacktoberfest--logomark.b91c17d2.svg"
									width={100}
									height={100}
								/>
								x
								<Image
									alt="RS"
									className="inline-block ml-6 mr-6 -mt-2 rounded-full "
									src="https://yt3.ggpht.com/a/AATXAJysdAzszI_in2gwk4d7kcYaZKsZcqO_v8dhYw=s900-c-k-c0xffffffff-no-rj-mo"
									width={85}
									height={85}
								/>{" "}
								<br />
								<span
									className={cn("transition-colors duration-200", {
										"text-purple-300": currentFramework === "qwik",
										"text-sky-300": currentFramework === "safari",
										"text-yellow-300": currentFramework === "chrome",
										"text-teal-300": currentFramework === "tailwind",
										"text-blue-300": currentFramework === "react",
										"text-green-300": currentFramework === "vue",
										"text-orange-300": currentFramework === "sevelte",
										"text-red-300": currentFramework === "mobile",
										"text-neutral-300": currentFramework === "desktop",
									})}>
									<div className="flex flex-row-1 mx-auto mt-6">
										<div ref={spanRef} className="mx-4">
											Fest
										</div>

										<div className="mx-4" ref={spanRef2}>
											Hacktober
										</div>
									</div>
								</span>
							</div>{" "}
						</h1>
					</div>
					{/* Sub heading */}
					<p className="mb-8 ">
						<span
							className={cn(
								"transition-colors duration-200 text-base -mt-6 mr-3",
								{
									"text-purple-300": currentFramework === "qwik",
									"text-sky-300": currentFramework === "safari",
									"text-yellow-300": currentFramework === "chrome",
									"text-teal-300": currentFramework === "tailwind",
									"text-blue-300": currentFramework === "react",
									"text-green-300": currentFramework === "vue",
									"text-orange-300": currentFramework === "sevelte",
									"text-red-300": currentFramework === "mobile",
									"text-neutral-300": currentFramework === "desktop",
								}
							)}>
							Lets Collaborate and Contribute to Open-Source together
						</span>
						<Link
							href="https://www.linkedin.com/company/vssutrobotics/"
							target="_blank"
							rel="Linkedin_Dev">
							<Image
								alt="Git.dev logo"
								className="inline-block ml-1 -mt-1 rounded-full"
								height={7}
								width={30}
								src="https://yt3.ggpht.com/a/AATXAJysdAzszI_in2gwk4d7kcYaZKsZcqO_v8dhYw=s900-c-k-c0xffffffff-no-rj-mo"
							/>
						</Link>
						{" + "}

						<Link
							href="https://www.linkedin.com/in/debarajrout/"
							target="_blank"
							rel="Linkedin_Dev">
							<Image
								alt="Linkedin.dev logo"
								className="inline-block ml-1 -mt-1 rounded-full"
								height={7}
								width={30}
								src="https://media.licdn.com/dms/image/D4D03AQHn6w4ufNWcag/profile-displayphoto-shrink_800_800/0/1695119132056?e=1701302400&v=beta&t=JVA_HPCir8koxwsYSnQaVclzeLY54LybzTACuVErkoc"
							/>
						</Link>
					</p>
					{/* Claim ticket button */}
					<div className=" flex flex-col mb-8  gap-3">
						<button
							ref={buttonRef}
							className={cn(
								"text-black px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200",
								{
									"bg-purple-300": currentFramework === "qwik",
									"bg-sky-300": currentFramework === "safari",
									"bg-yellow-300": currentFramework === "chrome",
									"bg-teal-300": currentFramework === "tailwind",
									"bg-blue-300": currentFramework === "react",
									"bg-green-300": currentFramework === "vue",
									"bg-orange-400": currentFramework === "sevelte",
									"bg-red-300": currentFramework === "mobile",
									"bg-neutral-300": currentFramework === "desktop",
								}
							)}>
							<Link
								href="https://hacktoberfest.com/"
								target="_blank"
								rel="Linkedin_Dev">
								Register Here
							</Link>
						</button>

						<button
							ref={buttonRef}
							className={cn(
								"text-black px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200 ",
								{
									"bg-purple-300": currentFramework === "qwik",
									"bg-sky-300": currentFramework === "safari",
									"bg-yellow-300": currentFramework === "chrome",
									"bg-teal-300": currentFramework === "tailwind",
									"bg-blue-300": currentFramework === "react",
									"bg-green-300": currentFramework === "vue",
									"bg-orange-400": currentFramework === "sevelte",
									"bg-red-300": currentFramework === "mobile",
									"bg-neutral-300": currentFramework === "desktop",
								}
							)}>
							<Link
								href="https://github.com/debrajrout/H-Fest"
								target="_blank"
								rel="Linkedin_Dev">
								Contribute Here
							</Link>
						</button>
					</div>
					{/* Countdown timer */}
					<CountdownTimer currentFramework={currentFramework} />
					<div className="flex flex-row gap-4 mt-24">
						{/* Open the modal using document.getElementById('ID').showModal() method */}
						<button
							className="btn"
							onClick={() => {
								const modal = document.getElementById("my_modal_1");
								if (modal instanceof HTMLDialogElement) {
									modal.showModal();
								}
							}}>
							Code
						</button>
						<dialog id="my_modal_1" className="modal">
							<div className="modal-box">
								<h3 className="font-bold text-lg">Contribute In Code</h3>
								<p className="py-4">
									!!Create a new folder!! In side the folder Try to build small
									projects and make a PR to the repo. Crate your own branch.
								</p>
								<div className="modal-action">
									<form method="dialog">
										{/* if there is a button in form, it will close the modal */}
										<button className="btn">Close</button>
									</form>
								</div>
							</div>
						</dialog>

						{/* Open the modal using document.getElementById('ID').showModal() method */}
						<button
							className="btn"
							onClick={() => {
								const modal = document.getElementById("my_modal_5");
								if (
									modal instanceof HTMLDialogElement &&
									typeof modal.showModal === "function"
								) {
									modal.showModal();
								}
							}}>
							NonCode
						</button>
						<dialog
							id="my_modal_5"
							className="modal modal-bottom sm:modal-middle">
							<div className="modal-box">
								<h3 className="font-bold text-lg">Contribute In NonCode</h3>
								<p className="py-4">
									You can write technical blogs. Also can review and improve
									technical blog posts written by others.
								</p>
								<div className="modal-action">
									<form method="dialog">
										{/* if there is a button in form, it will close the modal */}
										<button className="btn">Close</button>
									</form>
								</div>
							</div>
						</dialog>
					</div>
					<h6
						className={`text-gray-400 mt-14 opacity-30 text-xs hover:text-xl hover:opacity-100 duration-500  transition-all ease-in-out`}>
						By Dev...
					</h6>
				</div>
			</div>

			<Cursor buttonRef={buttonRef} />
			<Spand spanRef={spanRef} />
			<Spand2 spanRef2={spanRef2} />
		</main>
	);
}
