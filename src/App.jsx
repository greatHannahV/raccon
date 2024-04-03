import { useState } from 'react'
import './Spinner.css'
function App() {
  const lineStyle = {
    width: '120%',
    height: '1px',
    backgroundColor: 'white',
    margin: '10px 0',
  }

  const [isLoading, setIsLoading] = useState(false)
  const [isNotClicked, setIsNotClicked] = useState(true) // Changed to true initially
  const handleClick = () => {
    setIsNotClicked(false) // Changed to false when clicked
    setIsLoading(true)
    const audio = new Audio('./song.m4a') // Corrected path to audio file
    audio.play().catch((error) => console.error('Audio playback failed', error))

    setTimeout(() => {
      setIsLoading(false)
      audio.pause()
      audio.currentTime = 0
    }, 7000)
  }

  if (isNotClicked) {
    // Added curly braces for if statement block
    return (
      <div className="flex items-center justify-center h-screen text-8xl ">
        <button className="border px-5 py-7 border-white" onClick={handleClick}>
          Start Loading
        </button>
      </div>
    )
  }

  if (isLoading) return <Spinner />

  return (
    <>
      <header className="flex flex-col px-12 mx-[80px] text-[170px]   md:pt-5 ">
        <h1 className="font-center ">КУПИ ЕНОТА,</h1>
        <h1 className=" font-center text-right mr-[280px] mt-[-70px]">
          СВИНОТА
        </h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-[20px] px-7 pb-7">
        <div className="w-full md:col-span-1 px-2 ">
          <div className="mb-[20%] md:w-[100%] w-[70%]">
            Как мило видеть маленького енотика, их небольшие тела украшены
            полосатым мехом, а их игривые глаза и любопытные носы делают их
            по-настоящему очаровательными существами. Еноты - это умные и
            сообразительные животные, которые могут стать прекрасными домашними
            питомцами для тех, кто готов обеспечить им заботу и внимание.
            <br />
            <br />
            Покупка енота - это серьезное решение, и перед тем как принять его,
            необходимо убедиться, что вы готовы к ответственности за этого
            чудесного создания. Когда вы решите купить енота, убедитесь, что
            выбираете зарегистрированного заводчика или приют, где животные
            содержатся в хороших условиях и получают необходимый уход.
            <br />
            <br />
            Не забывайте, что еноты - это активные существа, им нужно много
            места для игр и развлечений. Предоставьте им достаточно места для
            активности и разнообразные игрушки, чтобы они могли проявить свою
            игривость и интеллект. Также учтите, что еноты требуют особого
            питания и ухода. Обеспечьте им сбалансированное питание и регулярные
            визиты к ветеринару для проверок здоровья и вакцинаций. Купить енота
            - значит принять в свой дом верного друга и компаньона на многие
            годы. Будьте готовы к тому, чтобы поделиться своей жизнью с этим
            чудесным существом и получить море радости и невероятных впечатлений
            от его присутствия в вашей жизни.
          </div>
          <div style={lineStyle}></div>
          <a href="#">ПЕРЕЙТИ В КАТАЛОГ</a>
        </div>
        <div className="flex justify-center items-center md:justify-end md:col-span-1 ">
          <img
            className="w-full  h-auto object-cover md:w-auto md:h-auto "
            src="./rac.jpg"
            alt="raccoon"
          />
        </div>
      </main>
    </>
  )
}

export default App

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img className="spinner" src="./spinner.png" alt="Loading..." />
    </div>
  )
}
