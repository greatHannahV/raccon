// const rotateAnimation = {
//   to: { transform: 'rotate(1turn)' },
// }

// const Spinner = () => {
//   return (
//     <div className="flex items-center justify-center">
//       <img
//         src="./img/spinner.png"
//         alt="spinner"
//         className="w-24 h-24 animate-spin"
//         style={rotateAnimation}
//       />
//     </div>
//   )
// }

// export default Spinner
/////////////

import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img className="spinner" src="../img/spinner.png" alt="Loading..." />
    </div>
  )
}

export default Spinner
