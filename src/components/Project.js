import react from 'react'

export const Project = ({title='Project Title',linkHref='#',linkTitle='Link',gitHubHref='',tags=[],children='Project body',color='black',border}) => {
    const borderColor = 'border-'+color
    
    return (
        <div className={`project-card border-4 ${border}`}>
            <h4 className='p-2 block text-3xl font-semibold'>{title}</h4>
            <div className='flex flex-row px-2 py-0 pb-6 '>
                <h4 className={`text-xl text-${color}`}>
                    <a className={`${border} border-opacity-100 border-b-[3px] hover:border-opacity-75 hover:text-gray-500 hover:border-b-[5px] hover:pb-0`} href={linkHref} target='_blank'>
                    {linkTitle}
                    </a>
                </h4>
                {gitHubHref!=='' && 
                (<>
                <p className='font-bold px-4'>|</p>
                <h4 className='text-xl'>
                    <a className='border-gray-500 border-opacity-100 border-b-[3px] hover:border-opacity-75 hover:text-gray-500 hover:border-b-[5px] hover:pb-0`' 
                    href={gitHubHref} target='_blank'>GitHub</a>
                    </h4>
                </>)}
            </div>
            <div className='w-full h-2/3 p-2 block'>{children}</div>
            <div className='w-full absolute inset-x-0 bottom-0 h-10 flex flex-row p-2'>
                {tags.length > 0 ? tags.map(({title,value})=>(
                    <div key={value} className={`tag tag-${value}`}>{title}</div>
                )) :
                <div>No tags</div>
                }
            </div>
        </div>
    )
}