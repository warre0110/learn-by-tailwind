import type { Memory } from '@/models/memory/Memory'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

const NoData: Memory[] = [];

type Props = {
    className?: string
    data?: Memory[]
}

/*
 *
 */
const MemoryTable = (props: Props) => {
    const data = props.data || NoData;

    return (
        <div data-name="MemoryTable">
            <Table>
                <TableBody>
                    {data.map(m => (
                        <TableRow key={m.question}>
                            <TableCell className="font-medium">{m.group}</TableCell>
                            <TableCell>{m.question}</TableCell>
                            <TableCell>{m.answer}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default MemoryTable
