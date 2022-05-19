import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) => {
  return (
    <div>  Person Render - {props.name.first} {props.name.last} </div>
  )
}
