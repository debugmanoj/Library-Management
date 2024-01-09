import React from 'react'

function Children({author}) {
    console.log(author);
  return <>
  <div  className='mb-3 d-flex justify-content-between'>
            <div>{author}</div>  
            <div>MAno j   Kumar</div>
            </div>
  </>
}

export default Children