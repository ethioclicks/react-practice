type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    } else if(props.status === 'success'){
        message = 'Data Fetched succesfully!'
    } else if(props.status === 'error'){
        message = 'Error Fetching data'
    }
  return (
    <div>
        <h2>Loading...</h2>
        <h2>Data Fetched succesfully!</h2>
        <h2>Error fetching data</h2>
    </div>
  )
}
