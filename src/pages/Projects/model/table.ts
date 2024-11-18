type tableHeader = {
   label: string
   align: "left" | "right" | "center"
}

export const tableHeader: tableHeader[] = [
   {
      label: 'Name',
      align: 'left',
   },
   {
      label: 'Lead',
      align: 'right',
   },
   {
      label: 'Team size',
      align: 'right',
   },
   {
      label: 'Start date',
      align: 'right',
   },
   {
      label: 'End date',
      align: 'right',
   },
]