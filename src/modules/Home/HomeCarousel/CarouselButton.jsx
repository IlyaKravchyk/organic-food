export const CarouselButton = ({ className, action, children }) => {

    return (
        <button className={className} onClick={action}>
            {children}
        </button>
    )
}