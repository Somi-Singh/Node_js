new Promise((resolve, reject) => {
    throw new Error('Error')
  }).catch(err => {
    console.error(err)
  })
  
  // or
  
  // new Promise((resolve, reject) => {
  //   reject('Error')
  // }).catch(err => {
  //   console.error(err)
  // })
  