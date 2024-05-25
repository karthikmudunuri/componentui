import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const ids = [
    {
      id: "0001",
      Name: "Karthik",
      Salary: "$250.00",
      Age: "20",
    },
    {
      id: "0002",
      Name: "Anil",
      Salary: "$150.00",
      Age: "24",
    },
    {
      id: "0003",
      Name: "Sriram",
      Salary: "$350.00",
      Age: "44",
    },
    {
      id: "0004",
      Name: "varma",
      Salary: "$450.00",
      Age: "17",
    },
    {
      id: "0005",
      Name: "sai",
      Salary: "$550.00",
      Age: "21",
    },
    {
      id: "0006",
      Name: "Murali",
      Salary: "$200.00",
      Age: "24",
    },
    {
      id: "0007",
      Name: "ravi",
      Salary: "$300.00",
      Age: "22",
    },
  ]
  
  export function TableDemo() {
    return (
      <Table>
        <TableCaption>A list of your users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead className="text-right">Salary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ids.map((id) => (
            <TableRow key={id.id}>
              <TableCell className="font-medium">{id.id}</TableCell>
              <TableCell>{id.Name}</TableCell>
              <TableCell>{id.Age}</TableCell>
              <TableCell className="text-right">{id.Salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  