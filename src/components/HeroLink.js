export const HeroLink = ({href = '',classes = '',children=''}) => {
    return (<a href={href} target='_blank' className={`${classes} border-opacity-100 border-b-[4px] hover:border-opacity-75 hover:text-gray-500`}>{children}</a>)
}