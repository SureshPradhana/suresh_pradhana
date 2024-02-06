<script>
	let certifcations=[
        {
            name: "MongoDB Associate Developer",
            link:"https://www.credly.com/badges/d1bc2939-5989-4d38-b078-4fe905d2c718",
            description:"",
            date:new Date(2023,8,15)
        },

		{
			name: "Responsive Web Design",
			link: "https://www.freecodecamp.org/certification/sureshpradhana/responsive-web-design",
			description: "",
            date: new Date(2021,5,7)
		},
        {
            name: "JavaScript Algorithms and Data Structures",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/javascript-algorithms-and-data-structures",
            description:"",
            date: new Date(2022,6,11)
        },
        {
            name: "Front End Libraries",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/front-end-development-libraries",
            description:"",
            date: new Date(2023,4,30)

        },
        {
            name: "Data Visualization",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/data-visualization",
            description:"",
            date: new Date(2020,8,21)
        },
        {
            name:"Relational Database",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/relational-database-v8",
            description:"",
            date: new Date(2023,5,6)
        },
        {
            name:"Backend Development and APIs",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/apis-and-microservices",
            description:"",
            date:new Date(2023,5,9)
        },
        {
            name:"Quality Assurance",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/quality-assurance-v7",
            description:"",
            date:new Date(2023,9,5)
        },
        {
            name:"foundational C# with Microsoft",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/foundational-c-sharp-with-microsoft",
            description:"",
            date:new Date(2023,9,10)
        },
        {
            name:"Legacy Information Security and Quakity Assurance",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/information-security-and-quality-assurance",
            description:"",
            date:new Date(2023,9,16)
        },
        {
            name:"Legacy Full Stack",
            link:"https://www.freecodecamp.org/certification/sureshpradhana/full-stack",
            description:"",
            date:new Date(2023,9,16)
        }
    

	
	

	]
</script>

<div>
	<h1>Certifications!</h1>
	<p>
        Here are some certifications I have earned during the process of learning
	</p>
	<ul>
		{#each certifcations as project (project) }
			<li>
			<a href={project.link} target="_blank">{project.name} </a>
		</li>
			
		{/each}
	</ul>
</div>

<style>
	h1 {
		color: var(--red);
		font-size: var(--h1);
	}
	p,
	a,
	li {
		font-size: 1rem;
	}
	ul {
		list-style: circle;
		margin: 0.5rem 0 0 1.2rem;
		padding: 0;
	}
	a {
		color: var(--blue);
		font-weight: bold;
	}
	a:hover {
		background-color: var(--blue);
		color: var(--white);
	}
	a::after {
		content: "]";
		display: inline-block;
		width: 0;
		height: 2px;
		background-color: var(--blue);
		transition: width 0.3s ease-in-out;
		margin: 0 0.5rem 0 0.5rem;
	}
	a::before {
		content: "[";
		display: inline-block;
		width: 0;
		height: 2px;
		background-color: var(--blue);
		transition: width 0.3s ease-in-out;
		margin: 0 1rem 0 0rem;
	}
	li::marker {
		color: white;
	}
</style>
