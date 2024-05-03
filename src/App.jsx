import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const lineStyle = {
    width: '120%',
    height: '1px',
    backgroundColor: 'white',
    margin: '10px 0',
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          <header className="flex flex-col px-12 mx-[80px] text-[170px] md:pt-5">
            <h1 className="font-center">КУПИ ЕНОТА,</h1>
            <h1 className="font-center text-right mr-[280px] mt-[-70px]">
              СВИНОТА
            </h1>
          </header>
          <main className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-[20px] px-7 pb-7  text-[19px]">
            <div className="w-full md:col-span-1 px-2 ">
              <div className="mb-[20%] md:w-[100%] w-[70%]">
                Как мило видеть маленького енотика, их небольшие тела украшены
                полосатым мехом, а их игривые глаза и любопытные носы делают их
                по-настоящему очаровательными существами. Еноты - это умные и
                сообразительные животные, которые могут стать прекрасными
                домашними питомцами для тех, кто готов обеспечить им заботу и
                внимание.
                <br />
                <br />
                Покупка енота - это серьезное решение, и перед тем как принять
                его, необходимо убедиться, что вы готовы к ответственности за
                этого чудесного создания. Когда вы решите купить енота,
                убедитесь, что выбираете зарегистрированного заводчика или
                приют, где животные содержатся в хороших условиях и получают
                необходимый уход.
                <br />
                <br />
                Не забывайте, что еноты - это активные существа, им нужно много
                места для игр и развлечений. Предоставьте им достаточно места
                для активности и разнообразные игрушки, чтобы они могли проявить
                свою игривость и интеллект. Также учтите, что еноты требуют
                особого питания и ухода. Обеспечьте им сбалансированное питание
                и регулярные визиты к ветеринару для проверок здоровья и
                вакцинаций. Купить енота - значит принять в свой дом верного
                друга и компаньона на многие годы. Будьте готовы к тому, чтобы
                поделиться своей жизнью с этим чудесным существом и получить
                море радости и невероятных впечатлений от его присутствия в
                вашей жизни.
              </div>
              <div style={lineStyle}></div>
              <a href="#">ПЕРЕЙТИ В КАТАЛОГ</a>
            </div>
            <div className="flex justify-center items-center md:justify-end md:col-span-1 ">
              <img
                className="w-full  h-auto object-cover md:w-auto md:h-auto "
                src="./public/rac-lazy.jpg"
                alt="Raccoon"
              />
            </div>
          </main>
        </>
      )}
    </>
  )
}

const Spinner = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: '350px', height: '350px' }}
    >
      <img
        className="w-full h-full object-cover animate-spin"
        src="./public/cover.jpg"
        alt="Spinner"
      />
    </div>
  )
}

export default App
