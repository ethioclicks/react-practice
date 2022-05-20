type ListProps = {
    items: string[] 
    onClick: (value: string) => void
}

export const List = ({ items, onClick,}: ListProps) => {
  return (
    <div>
        <h2>List of items</h2>
        {items.map((item, index) => {
            return (
                <div key={index} onClick={() => onClick(item)}>
                    {item}
                </div>
            )
        })}
    </div>
  )
} 
 
// type ListProps<T> = {
//     items: T[] 
//     onClick: (value: T) => void
// }

// export const List = <T extends {id: number}>({ items, onClick,}: ListProps<T>) => {
//   return (
//     <div>
//         <h2>List of items</h2>
//         {items.map((item, index) => {
//             return (
//                 <div key={index} onClick={() => onClick(item)}>
//                     {item}
//                 </div>
//             )
//         })}
//     </div>
//   )
// } 
 