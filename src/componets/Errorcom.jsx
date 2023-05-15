import Wrapper from "./Wrapper"

const Errorcom = ({Error}) => {
  return (
    <div className="errorcom">
        <Wrapper>
          <div className="containerError">
            <img src="errorimg.png" alt="" /> 
            <h1>{Error}</h1>
          </div>
        </Wrapper>
    </div>
  )
}

export default Errorcom
