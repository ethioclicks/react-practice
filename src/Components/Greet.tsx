type Greetprops = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
} 
export const Greet = (props: Greetprops) => {
    const { messageCount = 0 } = props
  return (
    <div>
        <h2>Welcome {props.name}! </h2>
        <h2>The message count is  {messageCount}! </h2>
        <h2>
            {
                props.isLoggedIn ? `Welcome ${props.name}! you have ${messageCount} unread messages ` : 'Welcome Guest'
            }
        </h2>
    </div>
  )
}
