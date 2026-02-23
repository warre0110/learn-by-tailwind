import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { uniq } from '@/Utils'
import type { QuestionTable } from '@/models/memory/Question'

type Props = {
    className?: string
    table?: QuestionTable
}

/*
 * - - - - - - - - - -
 */
const MemoryTable = (props: Props) => {
    const table = props.table || null
    const rows = table?.rows || []

    const groups = uniq(rows.map(d => d.group || '')) // keep original order

    return (
        <div data-name="MemoryTable">
            { groups.map(group => (
                <Table className="text-lg">
                    <TableBody>
                        { rows.filter(r => r.group === group).map((r, index) => (
                            <TableRow key={r.question}>
                                <TableCell className="font-medium">{index === 0 ? r.group : ''}</TableCell>
                                <TableCell>{r.question}</TableCell>
                                <TableCell>{r.answer}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )) }
        </div>
    )
}

export default MemoryTable
