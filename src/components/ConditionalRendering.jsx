import React from 'react'

const ConditionalRendering = () => {
    const isLoading = false;
    const isSubmitting = true
    const isError = true

    if (isLoading) {
        return <h1>LOADIND...</h1>
    }
  return (
    <div>
        <h1>MAIN CONTENT</h1>
        <button className='mybtn'>{isSubmitting ? "Submitting..." : "Submit"}</button>
        {isError && <h1>Error Loading page, try again</h1>}
    </div>
  )
}

export default ConditionalRendering