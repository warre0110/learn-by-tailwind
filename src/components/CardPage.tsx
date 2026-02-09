import type { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

/*
 *
 */
const CardPage = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full" data-name="CardPage">
            { props.children }
        </div>
    )
}

export default CardPage