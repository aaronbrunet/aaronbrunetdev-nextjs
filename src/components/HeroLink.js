export const HeroLink = ({href = '',classes = '',children=''}) => {
    return (<a href={href} target='_blank' className={`${classes} border-opacity-100 border-b-[3px] hover:border-opacity-75 hover:text-gray-500 hover:border-b-[5px]`}>{children}</a>)
}