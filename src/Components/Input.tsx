type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({value, handleChange}: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input', event)
    }
    return (
        <div>
            <input type='text' value={value} onChange={handleChange}/>
            <input type='text' value={value} onChange={handleInputChange}/>
        </div>
  )
}
