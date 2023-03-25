export const Navigation = () => {
    return (
        <nav>
            <ul className='flex flex-row justify-between'>
                <li className='p-1 text-slate-500 hover:text-slate-900'>
                    <a href='#home'>Home</a>
                </li>
                <li className='p-1 text-slate-500 hover:text-slate-900'>
                    <a href='#experience'>Experience</a>
                </li>
                <li className='p-1 text-slate-500 hover:text-slate-900'>
                    <a href='#education'>Education</a>
                </li>
                <li className='p-1 text-slate-500 hover:text-slate-900'>
                    <a href='#skill'>Skills</a>
                </li>
                <li className='p-1 text-slate-500 hover:text-slate-900'>
                    <a href='#blog'>Blogs</a>
                </li>
            </ul>
        </nav>
    );
};
