import { assets } from "@/utils/asset-utils";
import Image from "next/image";
import { useState, useEffect, RefObject } from "react";

export const Spand2 = ({
	spanRef2,
}: {
	spanRef2: RefObject<HTMLDivElement>;
}) => {
	const [cursorPosition, setCursorPosition] = useState({
		x: -100,
		y: -100,
	});

	useEffect(() => {
		async function animateCursor() {
			if (!spanRef2.current) return;
			// Initial 1-second delay
			await new Promise((resolve) => setTimeout(resolve, 3000));

			// Move the cursor to the claim button
			var buttonRect = spanRef2.current.getBoundingClientRect();
			var x = buttonRect.x + buttonRect.width / 2;
			var y = buttonRect.y + buttonRect.height / 2;
			setCursorPosition({ x, y });

			// Additional 1-second delay
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Update the cursor position to be 150px below the button
			var newX = x - 235;
			setCursorPosition({ x: newX, y });

			// Move the button down by 150px
			spanRef2.current.style.transition = "transform 700ms ease-in-out";
			spanRef2.current.style.transform = `translateX(-235px)`;

			// Additional 1-second delay
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Move the cursor out of the screen
			setCursorPosition({ x: window.innerWidth - 100, y: -100 });
			//exp

			await new Promise((resolve) => setTimeout(resolve, 1500));

			buttonRect = spanRef2.current.getBoundingClientRect();
			x = buttonRect.x + buttonRect.width / 2;
			y = buttonRect.y + buttonRect.height / 2;
			setCursorPosition({ x, y });
			await new Promise((resolve) => setTimeout(resolve, 1000));
			newX = x + 100;
			setCursorPosition({ x: newX, y });
			spanRef2.current.style.transition = "transform 700ms ease-in-out";
			spanRef2.current.style.transform = `translateX(-130px)`;

			// Additional 1-second delay
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Move the cursor out of the screen
			setCursorPosition({ x: window.innerWidth - 100, y: -100 });
		}

		animateCursor();
	}, [spanRef2]);

	return (
		<Image
			className={`duration-700 absolute transition-all ease-in-out z-50`}
			style={{
				top: `${cursorPosition.y}px`,
				left: `${cursorPosition.x}px`,
			}}
			alt="Cursor"
			src={assets.cursor}
			width={80}
			height={50}
		/>
	);
};
