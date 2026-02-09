import type { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

/*
 *
 */
const Card = (props: Props) => {
    return (
        <div className="text-center rounded-lg border p-4" data-name="Card">
            { props.children }
        </div>
    )
}

export default Card