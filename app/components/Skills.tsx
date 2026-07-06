type Skill = {
    name: string;
    description: string;
    url: string;
};

type SkillGroup = {
    label?: string;
    skills: Skill[];
};

const skillGroups: SkillGroup[] = [
    {
        skills: [
            {
                name: 'React',
                description: 'A JavaScript library for building fast, component-based user interfaces.',
                url: 'https://react.dev',
            },
            {
                name: 'Next.js',
                description: 'A React framework that adds routing, server-side rendering, and performance out of the box.',
                url: 'https://nextjs.org',
            },
            {
                name: 'TypeScript',
                description: 'A typed superset of JavaScript that catches errors early and improves code reliability.',
                url: 'https://www.typescriptlang.org',
            },
            {
                name: 'JavaScript',
                description: 'The core scripting language that powers interactivity across the web.',
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            {
                name: 'Tailwind CSS',
                description: 'A utility-first CSS framework for building custom designs quickly.',
                url: 'https://tailwindcss.com',
            },
            {
                name: 'Git',
                description: 'A distributed version control system for tracking code changes and collaborating efficiently.',
                url: 'https://git-scm.com',
            },
            {
                name: 'GSAP',
                description: 'A powerful JavaScript animation library for creating smooth, high-performance web animations.',
                url: 'https://gsap.com',
            },
            {
                name: 'EJS',
                description: 'A simple templating engine that lets you generate dynamic HTML using plain JavaScript.',
                url: 'https://ejs.co',
            },
            {
                name: 'HTML',
                description: 'The standard markup language used to structure content on the web.',
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            },
        ],
    },
];

export default function Skills() {
    return (
        <section className='max-w-350 mx-auto px-6 lg:px-8 mt-20 lg:mt-28'>
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left gap-1 mb-12'>
                <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
                    <span className='tracking-tight'>What I Work With.</span>
                </h2>
                <p className='text-lg text-[#565d6e] font-light max-w-2xl'>Technologies I use to design, build, and ship projects.</p>
            </div>

            <div className='flex flex-col gap-10'>
                {skillGroups.map((group, index) => (
                    <div key={group.label ?? index} className='flex flex-col gap-4'>
                        {group.label && <h3 className='text-xl md:text-2xl font-bold tracking-tight'>{group.label}</h3>}

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {group.skills.map((skill) => (
                                <a key={skill.name} href={skill.url} target='_blank' rel='noopener noreferrer' className='group flex flex-col gap-2 rounded-lg border border-[#F3F4F7] bg-gray-50 p-5'>
                                    <div className='flex items-center justify-between'>
                                        <h4 className='text-lg font-medium tracking-tight'>{skill.name}</h4>
                                        <i className='ri-arrow-right-up-line text-lg text-gray-400 transition-all duration-300 group-hover:text-[#7b55ce] group-hover:-translate-y-1 group-hover:translate-x-1'></i>
                                    </div>

                                    <p className='text-base text-[#565d6e] font-light leading-relaxed'>{skill.description}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
