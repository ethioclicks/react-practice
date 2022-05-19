type Greetprops = {
    name: string
    messageCount:number
    isLoggedIn: boolean
} 
export const Greet = (props: Greetprops) => {
  return (
    <div>
        <h2>Welcome {props.name}! </h2>
        <h2>The message count is  {props.messageCount}! </h2>
        <h2>
            {
                props.isLoggedIn ? `Welcome ${props.name}! you have ${props.messageCount} unread messages ` : 'Welcome Guest'
            }
        </h2>
    </div>
  )
}
