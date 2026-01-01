// Content data for all blog sections
export interface SectionContent {
	content?: string | string[];
	image?: string;
	imageAlt?: string;
	imageClass?: string;
	type?: 'formula' | 'quote' | 'toremember';
	formula?: string;
	quote?: string;
	pText?: string;
	sText?: string;
}

export interface ContentData {
	grandparentId: string;
	parentId: string;
	id?: string;
	title?: string;
	sectionContent: SectionContent[];
}

export interface BlogPageData {
	parentTitle: string;
	sections: ContentData[];
}

// Content for section 1.1 (Functions)
export const content_1_1: BlogPageData = {
	parentTitle: "Functions",
	sections: [
		{
			grandparentId: "1",
			parentId: "1.1",
			id: "1.1.1",
			title: "What are functions?",
			sectionContent: [
				{
					content:
						"Functions are basically machines that take an input & give out an output. Simple.",
					image: "https://media.geeksforgeeks.org/wp-content/uploads/20240509174104/Function-in-Maths.webp",
					imageAlt: "monke memes",
					imageClass: "w-64",
				},
				{
					content:
						"Each numerical input must produce some numerical output, which must be unique to that input.",
				},
			],
		},
		{
			grandparentId: "1",
			parentId: "1.1",
			id: "1.1.2",
			title: "(Scenario): Banan & Banker Monke",
			sectionContent: [
				{
					content:
						"Mr. Banker Monke returns coins for each banan that they get! <br/> A question that you must ask as a regular monke. <br/>'How many coins will I get for each banan?'",
				},
				{
					content: "THIS is called a relationship of a function.",
				},
				{
					content:
						"Treating Mr. Banker Monke as a function, the relationship between number of banans & number of coins  gives us a relationship between the two!",
				},
				{
					content:
						"A few terminologies here are:<ul><li>Domain: a set of your inputs (for ex: 1 banan, 2 banan, 3 banan, …)</li><li>Range: a set of outputs (for ex: 1 coin, 2 coin, 3 coin, etc…)</li><li>Co-Domain: a set of **ALL outputs** (for ex: number of coins more than what Mr. Banker Monke has)</li></ul>",
				},
				{
					type: "formula",
					formula: "f(x) = y",
					content:
						"Here, f is the function that takes an input x & gives an output y.",
				},
				{
					content:
						"A function must have a one-one OR many-one relationship, not one-many relationship. <br/>Each input must return a single, unique output. No multiple outputs for each input.",
				},
			],
		},
		{
			grandparentId: "1",
			parentId: "1.1",
			id: "1.1.3",
			title: "Algebra of Functions",
			sectionContent: [
				{
					content:
						"Functions can be added, subtracted and manipulated upon. This forms the basis of how you define series of functions being acted upon an input in machine learning and deep learning algorithms.",
				},
				{
					content:
						"For ex:<ul><li>an output of a neural network is nothing but a huuuuuuge composition function, acted upon by many non-linear learnt functions to give a final value.</li><li>sharpening of an image is nothing but applying composition functions on an image to blur and sharpen the image, but more about image manipulation later…</li></ul>",
				},
			],
		},
		{
			grandparentId: "1",
			parentId: "1.1",
			id: "1.1.4",
			title: "Linear v/s Non-linear functions",
			sectionContent: [
				{
					content:
						'<strong>Linear Functions</strong><ul><li>literally, relationships that are basically straight lines</li><li>one or two variables and constants</li><li>if y = f(x) is linear, we say "y varies linearly with x", meaning when plotted, they form a straight line!</li><li>y = mx + c (generally, for 2 variables)</li><li>increase or decrease in x ⇒ scaled by constant amount as change in y</li></ul>',
				},
				{
					content:
						"<strong>Non-linear Functions</strong><ul><li>relationships that are not, basically, straight lines. duh.</li><li>trignometric (sin, cos, tan, …), exponential, logarithmic. look at their graphs.</li><li>change in x ⇒ not scaled by a constant amount as change in y</li></ul>",
				},
			],
		},
		{
			grandparentId: "1",
			parentId: "1.1",
			id: "1.1.5",
			title: "Why non-linear functions?",
			sectionContent: [
				{
					content:
						"Non-linear functions can help us model rather unpredictable or seasonal kinda repetitive patterns.",
				},
				{
					content:
						"Linear relationships are simple. If either x increases, y increases or decreases, <strong>linearly.</strong>",
				},
				{
					content:
						"But, most of the real-life relationships are <strong>NEVER</strong> linear. There is always some sort of noise, degree of randomness in IRL relationships.",
				},
				{
					content:
						"For ex:<ul><li>monke's hunger v/s time: monke might not always be hungry, but it will be only during specific durations of the day, some sorta sin/cos wave.</li><li>population of rabbits: increases exponentially!</li><li>moore's law!</li></ul>",
				},
				{
					content:
						"Hence, we can safely say that non-linear functions are awesome! They help us a model real-life use cases.",
				},
			],
		},
		{
			grandparentId: "1",
			parentId: "1.1",
			sectionContent: [
				{
					type: "toremember",
					content: [
						"Non-linear functions help us model real-life practical use cases!",
						"Finding a way to model such relationships can help us predict real-life scenarios.",
						"For ex: by developing a non-linear model of how banans sell on the MonkeMarket, Mr. Monke can predict what the next price of banans can be!",
						"And hence, we want to develop machine learning algorithms that help in the creation of these non-linear relationships ⇒ to help us predict real life use-cases and scenarios better!",
					],
				},
			],
		},
	],
};

// Map of all content by section ID
export const blogContentMap: Record<string, BlogPageData> = {
	"1.1": content_1_1,
	// Add more sections as needed
	// "1.2": content_1_2,
	// "1.3": content_1_3,
	// etc.
};

// Helper function to get content by parent and child IDs
export function getBlogContent(parentId: string, childId: string): BlogPageData | null {
	const sectionKey = `${parentId}.${childId}`;
	return blogContentMap[sectionKey] || null;
}
