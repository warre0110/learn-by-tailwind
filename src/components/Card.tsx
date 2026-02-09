import type { ReactNode } from 'react'
import { Card as CardUi, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {
    children?: ReactNode
}

/*
 *
 */
const Card = (props: Props) => {
    //return (
    //    <div className="text-center rounded-lg border p-4" data-name="Card">
    //        {props.children}
    //    </div>
    //)
    return (
        <CardUi size="sm" className="mx-auto w-full max-w-sm">
            <CardHeader>
                <CardTitle>Small Card</CardTitle>
                <CardDescription>This card uses the small size variant.</CardDescription>
            </CardHeader>
            <CardContent>
                {props.children}
            </CardContent>
        </CardUi>
    )
}

export default Card
