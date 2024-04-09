import FaqItem from "./components/FaqItem";
import Title from "./components/Title";

function App() {
	return (
		<div className="bg-bgColor h-screen grid place-content-center">
			<img
				src="/background-pattern-desktop.svg"
				alt="main"
				srcSet="/background-pattern-desktop.svg 1x, /background-pattern-mobile.svg 2x"
				className="absolute inset-0 w-full object-cover z-0"
			/>
			<div className="card bg-white relative style-mobile">
				<div className="content">
					<Title title="FAQs" />
					<div className="relative ">
						<div>
							<FaqItem
								title="What is Frontend Mentor, and how will it help me?"
								description="Frontend Mentor offers realistic coding challenges to help
                         developers improve their frontend coding skills with projects in
                         HTML, CSS, and JavaScript. It's suitable for all levels and ideal
                         for portfolio building."
							/>
							<FaqItem
								title="Is Frontend Mentor free?"
								description="Yes, Frontend Mentor offers both free and premium coding challenges,
                           with the free option providing access to a range of projects suitable for all skill levels."
							/>
							<FaqItem
								title="Can I use Frontend Mentor projects in my portfolio?"
								description="Yes, you can use projects completed on Frontend Mentor in your portfolio. 
                           It's an excellent way to showcase your skills to potential employers!"
							/>
							<FaqItem
								title="How can I get help if I'm stuck on a challenge?"
								description="The best place to get help is inside Frontend Mentor's Discord community. 
                           There's a help channel where you can ask questions and seek support from other community members."
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
