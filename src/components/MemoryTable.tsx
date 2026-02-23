import type { Memory } from '@/models/memory/Memory'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { uniq } from '@/Utils'

const NoData: Memory[] = []

type Props = {
    className?: string
    data?: Memory[]
}

/*
 * - - - - - - - - - -
 */
const MemoryTable = (props: Props) => {
    const data = props.data || NoData

    const groups = uniq(data.map(d => d.group || '')) // keep original order

    return (
        <div data-name="MemoryTable">
            {groups.map(group => (
                <Table className="text-lg">
                    <TableBody>
                        {data.filter(d => d.group === group).map((m, index) => (
                            <TableRow key={m.question}>
                                <TableCell className="font-medium">{index === 0 ? m.group : ''}</TableCell>
                                <TableCell>{m.question}</TableCell>
                                <TableCell>{m.answer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ))}
        </div>
    )
}

export default MemoryTable
