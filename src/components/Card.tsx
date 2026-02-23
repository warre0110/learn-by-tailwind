import { Card as CardUi, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { ReactNode } from 'react'

type Props = {
    className?: string
    children?: ReactNode
}

/*
 * - - - - -
 */
const Card = (props: Props) => {
    // return (
    //    <div className="text-center rounded-lg border p-4" data-name="Card">
    //        {props.children}
    //    </div>
    // )
    return (
        <CardUi
            className={`mx-auto w-full max-w-sm ${props.className}`}
            data-name="Card">
            <CardHeader>
                <CardTitle>て form</CardTitle>
                <CardDescription>How to turn Japanese verbs into the て form.</CardDescription>
            </CardHeader>
            <CardContent>{props.children}</CardContent>
        </CardUi>
    )
}

export default Card
